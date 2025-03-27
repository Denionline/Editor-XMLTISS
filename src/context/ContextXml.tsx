import { createContext, useState, useEffect } from "react";
import {
  GuiaSPSADT,
  ObjectXmlType,
  OutraDespesa,
  ProcedimentoExecutado,
} from "@/utils/XmlTypes";
import { FormGuideType } from "@/pages/arquive-xml/components/guide-details/page";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "@phosphor-icons/react";
import { ToastAction } from "@/components/ui/toast";
import { FormXmlType } from "@/pages/arquive-xml/page";
import { MultiQtdeValorUn } from "@/utils/Convert";

export interface ArquiveType {
  ID: string;
  objectXml: ObjectXmlType;
  details: {
    createdAt: Date;
    arquiveName: string;
    guidesQuantity: number;
    totalValueXml: string;
  };
}

export interface ContextXmlType {
  arquives: ArquiveType[] | undefined;
  AddNewArquive: (xmlInJson: ObjectXmlType, fileName: string) => void;
  updateXmlDetails: (idXml: string, data: FormXmlType) => void;
  updateGuideDetails: (
    idXml: string,
    idxGuide: number,
    data: FormGuideType
  ) => void;
  removeXml: (idxXml: string, setIsDisabledBtnRemove: any) => void;
  deleteGuides: (idXml: string, guides: string[]) => void;
}

export const ContextXml = createContext({} as ContextXmlType);

export const ContextXmlProvider = ({ children }: any) => {
  const [arquives, setArquives] = useState<ArquiveType[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const arquivesOnStorage = localStorage.getItem("editor_xml_tiss_v1");
    if (arquivesOnStorage) {
      try {
        const parsedArquives = JSON.parse(arquivesOnStorage);
        const validArquives = parsedArquives.map((arquive: ArquiveType) => ({
          ...arquive,
          details: {
            ...arquive.details,
            createdAt: new Date(arquive.details.createdAt),
          },
        }));
        setArquives(validArquives);
      } catch (error) {
        console.error("Failed to parse arquives from localStorage", error);
      }
    }
  }, []);

  function AddNewArquive(xmlInJson: ObjectXmlType, fileName: string) {
    if (
      !Array.isArray(
        xmlInJson["ans:mensagemTISS"]["ans:prestadorParaOperadora"][
          "ans:loteGuias"
        ]["ans:guiasTISS"]["ans:guiaSP-SADT"]
      )
    ) {
      const guide =
        xmlInJson["ans:mensagemTISS"]["ans:prestadorParaOperadora"][
          "ans:loteGuias"
        ]["ans:guiasTISS"]["ans:guiaSP-SADT"];
      xmlInJson["ans:mensagemTISS"]["ans:prestadorParaOperadora"][
        "ans:loteGuias"
      ]["ans:guiasTISS"]["ans:guiaSP-SADT"] = [guide];
    }
    const guides = xmlInJson["ans:mensagemTISS"]["ans:prestadorParaOperadora"][
      "ans:loteGuias"
    ]["ans:guiasTISS"]["ans:guiaSP-SADT"] as GuiaSPSADT[];

    guides.map((guide) => {
      if (
        guide["ans:procedimentosExecutados"] &&
        !Array.isArray(
          guide["ans:procedimentosExecutados"]["ans:procedimentoExecutado"]
        )
      ) {
        const procedimento = guide["ans:procedimentosExecutados"][
          "ans:procedimentoExecutado"
        ] as ProcedimentoExecutado;
        guide["ans:procedimentosExecutados"]["ans:procedimentoExecutado"] = [
          procedimento,
        ];
      }

      if (
        guide["ans:outrasDespesas"] &&
        !Array.isArray(guide["ans:outrasDespesas"]["ans:despesa"])
      ) {
        const despesa = guide["ans:outrasDespesas"][
          "ans:despesa"
        ] as OutraDespesa;
        guide["ans:outrasDespesas"]["ans:despesa"] = [despesa];
      }
      return guide;
    });

    const newArquive: ArquiveType = {
      ID: new Date().getTime().toString(),
      objectXml: xmlInJson,
      details: {
        createdAt: new Date(),
        arquiveName: fileName,
        guidesQuantity: guides.length,
        totalValueXml: "",
      },
    };
    const arquivesWithNew = [...arquives, updateTotalValueArquive(newArquive)];
    setArquives(updateArquives(arquivesWithNew));
  }

  const updateTotalValueArquive = (ArquiveXml: ArquiveType) => {
    const guides = ArquiveXml.objectXml["ans:mensagemTISS"][
      "ans:prestadorParaOperadora"
    ]["ans:loteGuias"]["ans:guiasTISS"]["ans:guiaSP-SADT"] as GuiaSPSADT[];

    const guidesUpdated = guides.map((guide) => {
      const totalProcedures =
        guide["ans:procedimentosExecutados"]?.[
          "ans:procedimentoExecutado"
        ].reduce((accProc, proc) => {
          const totalProcedure = Number(
            MultiQtdeValorUn(
              proc["ans:quantidadeExecutada"]._text,
              proc["ans:valorUnitario"]._text
            )
          );
          return accProc + totalProcedure;
        }, 0) || 0;

      const totalExpenses =
        guide["ans:outrasDespesas"]?.["ans:despesa"].reduce((accExp, exp) => {
          const totalExpense = Number(
            MultiQtdeValorUn(
              exp["ans:servicosExecutados"]["ans:quantidadeExecutada"]._text,
              exp["ans:servicosExecutados"]["ans:valorUnitario"]._text
            )
          );
          return accExp + totalExpense;
        }, 0) || 0;
      return {
        ...guide,
        "ans:valorTotal": {
          "ans:valorTotalGeral": {
            _text: (totalProcedures + totalExpenses).toFixed(2),
          },
        },
      };
    }, 0);
    const totalValueXml = guidesUpdated.reduce((acc, guide) => {
      const guideValue =
        guide["ans:valorTotal"]["ans:valorTotalGeral"]._text || "0";
      return acc + Number(guideValue);
    }, 0);
    return {
      ...ArquiveXml,
      details: {
        ...ArquiveXml.details,
        totalValueXml: totalValueXml.toFixed(2),
      },
    };
  };

  function updateArquives(newArquives: ArquiveType[]) {
    const arquivesUpdated = newArquives.map((arquive) =>
      updateTotalValueArquive(arquive)
    );
    localStorage.setItem("editor_xml_tiss_v1", JSON.stringify(arquivesUpdated));
    return arquivesUpdated;
  }

  function updateXmlDetails(
    idXml: string,
    {
      nomeDoArquivo,
      codigoDoPrestador,
      numeroDoProtocolo,
      registroANS,
    }: FormXmlType
  ) {
    const xmlSelected = arquives.find((arquive) => arquive.ID == idXml);
    if (xmlSelected) {
      if (xmlSelected.details.arquiveName != nomeDoArquivo) {
        xmlSelected.details.arquiveName = nomeDoArquivo;
      }

      if (
        xmlSelected.objectXml["ans:mensagemTISS"]["ans:cabecalho"][
          "ans:origem"
        ]["ans:identificacaoPrestador"]["ans:codigoPrestadorNaOperadora"]
          ._text != codigoDoPrestador
      ) {
        xmlSelected.objectXml["ans:mensagemTISS"]["ans:cabecalho"][
          "ans:origem"
        ]["ans:identificacaoPrestador"][
          "ans:codigoPrestadorNaOperadora"
        ]._text = codigoDoPrestador;
      }

      if (
        xmlSelected.objectXml["ans:mensagemTISS"]["ans:prestadorParaOperadora"][
          "ans:loteGuias"
        ]["ans:numeroLote"]._text != numeroDoProtocolo
      ) {
        xmlSelected.objectXml["ans:mensagemTISS"]["ans:prestadorParaOperadora"][
          "ans:loteGuias"
        ]["ans:numeroLote"]._text = numeroDoProtocolo;
      }

      if (
        xmlSelected.objectXml["ans:mensagemTISS"]["ans:cabecalho"][
          "ans:destino"
        ]["ans:registroANS"]._text != registroANS
      ) {
        xmlSelected.objectXml["ans:mensagemTISS"]["ans:cabecalho"][
          "ans:destino"
        ]["ans:registroANS"]._text = registroANS;
      }

      setArquives((prev) => {
        try {
          const updatedArquives = [...prev];
          const idxXml = prev.findIndex((xml) => xml.ID == idXml);
          updatedArquives[idxXml] = xmlSelected;
          toast({
            description: (
              <div className="flex items-center justify-between gap-2">
                <p>Dados salvos com sucesso!</p>
                <CheckCircle
                  size={16}
                  weight="fill"
                  className="text-green-400"
                />
              </div>
            ),
          });
          return updateArquives(updatedArquives);
        } catch (err) {
          toast({
            title: "Erro ao salvar detalhes do XML!",
            description: `${err}`,
            action: (
              <ToastAction altText="TryAgain">Tentar de novo</ToastAction>
            ),
          });
          return prev;
        }
      });
    }
  }

  function updateGuideDetails(
    idXml: string,
    idxGuide: number,
    {
      carteirinha,
      guiaDoPrestador,
      guiaDaOperadora,
      dataDaAutorizacao,
      dataDaValidadeDaSenha,
      procedimentos,
      expenses,
    }: FormGuideType
  ) {
    const idxArquive = arquives.findIndex((arquive) => arquive.ID === idXml);
    const guide =
      arquives[idxArquive] &&
      (arquives[idxArquive].objectXml["ans:mensagemTISS"][
        "ans:prestadorParaOperadora"
      ]["ans:loteGuias"]["ans:guiasTISS"]["ans:guiaSP-SADT"][
        idxGuide
      ] as GuiaSPSADT);
    if (
      guide["ans:dadosBeneficiario"]["ans:numeroCarteira"]._text != carteirinha
    ) {
      guide["ans:dadosBeneficiario"]["ans:numeroCarteira"]._text = carteirinha;
    }
    
    if (
      guide["ans:cabecalhoGuia"]["ans:numeroGuiaPrestador"]._text !=
      guiaDoPrestador
    ) {
      guide["ans:cabecalhoGuia"]["ans:numeroGuiaPrestador"]._text =
        guiaDoPrestador;
    }

    if (
      guide["ans:dadosAutorizacao"]["ans:numeroGuiaOperadora"]._text !=
      guiaDaOperadora
    ) {
      guide["ans:dadosAutorizacao"]["ans:numeroGuiaOperadora"]._text =
        guiaDaOperadora;
    }

    if (
      guide["ans:dadosAutorizacao"]["ans:dataAutorizacao"]._text !=
      dataDaAutorizacao
    ) {
      guide["ans:dadosAutorizacao"]["ans:dataAutorizacao"]._text =
        dataDaAutorizacao;
    }

    if (
      guide["ans:dadosAutorizacao"]["ans:dataValidadeSenha"] &&
      guide["ans:dadosAutorizacao"]["ans:dataValidadeSenha"]._text !=
        dataDaValidadeDaSenha
    ) {
      guide["ans:dadosAutorizacao"]["ans:dataValidadeSenha"]._text =
        dataDaValidadeDaSenha || "";
    }

    if (guide["ans:procedimentosExecutados"] && procedimentos) {
      guide["ans:procedimentosExecutados"]["ans:procedimentoExecutado"].map(
        (proc, idx) => {
          const {
            tabelaProcedimento,
            codigoProcedimento,
            descricaoProcedimento,
            dataProcedimento,
            quantidadeProcedimento,
            valorUnitarioProcedimento,
          } = procedimentos[idx];

          if (
            proc["ans:procedimento"]["ans:codigoTabela"]._text !=
            tabelaProcedimento
          ) {
            proc["ans:procedimento"]["ans:codigoTabela"]._text =
              tabelaProcedimento;
          }

          if (
            proc["ans:procedimento"]["ans:codigoProcedimento"]._text !=
            codigoProcedimento
          ) {
            proc["ans:procedimento"]["ans:codigoProcedimento"]._text =
              codigoProcedimento;
          }

          if (
            proc["ans:procedimento"]["ans:descricaoProcedimento"]._text !=
            descricaoProcedimento
          ) {
            proc["ans:procedimento"]["ans:descricaoProcedimento"]._text =
              descricaoProcedimento;
          }

          if (proc["ans:dataExecucao"]._text != dataProcedimento) {
            proc["ans:dataExecucao"]._text = dataProcedimento;
          }

          if (proc["ans:quantidadeExecutada"]._text != quantidadeProcedimento) {
            proc["ans:quantidadeExecutada"]._text = quantidadeProcedimento;
          }

          if (proc["ans:valorUnitario"]._text != valorUnitarioProcedimento) {
            proc["ans:valorUnitario"]._text = valorUnitarioProcedimento;
          }
          if (
            proc["ans:quantidadeExecutada"]._text != quantidadeProcedimento ||
            proc["ans:valorUnitario"]._text != valorUnitarioProcedimento
          ) {
            proc["ans:valorTotal"]._text = MultiQtdeValorUn(
              quantidadeProcedimento,
              valorUnitarioProcedimento
            );
          }
        }
      );
    }
    if (guide["ans:outrasDespesas"] && expenses) {
      guide["ans:outrasDespesas"]["ans:despesa"].map((desp, idx) => {
        const {
          tabelaExpense,
          codigoExpense,
          descricaoExpense,
          unidadeExpense,
          dataExpense,
          quantidadeExpense,
          valorUnitarioExpense,
        } = expenses[idx];

        if (
          desp["ans:servicosExecutados"]["ans:codigoTabela"]._text !=
          tabelaExpense
        ) {
          desp["ans:servicosExecutados"]["ans:codigoTabela"]._text =
            tabelaExpense;
        }

        if (
          desp["ans:servicosExecutados"]["ans:codigoProcedimento"]._text !=
          codigoExpense
        ) {
          desp["ans:servicosExecutados"]["ans:codigoProcedimento"]._text =
            codigoExpense;
        }

        if (
          desp["ans:servicosExecutados"]["ans:descricaoProcedimento"]._text !=
          descricaoExpense
        ) {
          desp["ans:servicosExecutados"]["ans:descricaoProcedimento"]._text =
            descricaoExpense;
        }

        if (
          desp["ans:servicosExecutados"]["ans:unidadeMedida"]._text !=
          unidadeExpense
        ) {
          desp["ans:servicosExecutados"]["ans:unidadeMedida"]._text =
            unidadeExpense;
        }
        if (
          desp["ans:servicosExecutados"]["ans:dataExecucao"]._text !=
          dataExpense
        ) {
          desp["ans:servicosExecutados"]["ans:dataExecucao"]._text =
            dataExpense;
        }

        if (
          desp["ans:servicosExecutados"]["ans:quantidadeExecutada"]._text !=
          quantidadeExpense
        ) {
          desp["ans:servicosExecutados"]["ans:quantidadeExecutada"]._text =
            quantidadeExpense;
        }

        if (
          desp["ans:servicosExecutados"]["ans:valorUnitario"]._text !=
          valorUnitarioExpense
        ) {
          desp["ans:servicosExecutados"]["ans:valorUnitario"]._text =
            valorUnitarioExpense;
        }
        if (
          desp["ans:servicosExecutados"]["ans:quantidadeExecutada"]._text !=
            quantidadeExpense ||
          desp["ans:servicosExecutados"]["ans:valorUnitario"]._text !=
            valorUnitarioExpense
        ) {
          desp["ans:servicosExecutados"]["ans:valorTotal"]._text =
            MultiQtdeValorUn(quantidadeExpense, valorUnitarioExpense);
        }
      });
    }

    setArquives((prev) => {
      try {
        const updatedArquives = [...prev];
        updatedArquives[idxArquive].objectXml["ans:mensagemTISS"][
          "ans:prestadorParaOperadora"
        ]["ans:loteGuias"]["ans:guiasTISS"]["ans:guiaSP-SADT"][idxGuide] =
          guide;
        toast({
          description: (
            <div className="flex items-center justify-between gap-2">
              <p>Dados salvos com sucesso!</p>
              <CheckCircle size={16} weight="fill" className="text-green-400" />
            </div>
          ),
        });
        return updateArquives(updatedArquives);
      } catch (err) {
        toast({
          title: "Erro ao salvar detalhes da guia!",
          description: `${err}`,
          action: <ToastAction altText="TryAgain">Tentar de novo</ToastAction>,
        });
        return prev;
      }
    });
  }

  function deleteGuides(idXml: string, idxToDelete: string[]) {
    setArquives((prev) => {
      const updatedArquives = [...prev];
      const idxGuide = updatedArquives.findIndex((xml) => xml.ID == idXml);
      const guidesUpdated =
        updatedArquives[idxGuide].objectXml["ans:mensagemTISS"][
          "ans:prestadorParaOperadora"
        ]["ans:loteGuias"]["ans:guiasTISS"]["ans:guiaSP-SADT"];

      idxToDelete.forEach((idxDelete, idx) => {
        guidesUpdated.splice(Number(idxDelete) - idx, 1);
      });

      try {
        toast({
          description: (
            <div className="flex items-center justify-between gap-2">
              <p>
                {idxToDelete.length > 1
                  ? "Guias removidas com sucesso!"
                  : "Guia removida com sucesso!"}{" "}
              </p>
              <CheckCircle size={16} weight="fill" className="text-green-400" />
            </div>
          ),
        });
        return updateArquives(updatedArquives);
      } catch (err) {
        toast({
          title: "Erro ao remover Guia!",
          description: `${err}`,
          action: <ToastAction altText="TryAgain">Tentar de novo</ToastAction>,
        });
        return prev;
      }
    });
  }

  function removeXml(idxXml: string, setIsDisabledBtnRemove: any) {
    setArquives((prev) => {
      const arquivesWithRemovedXml = prev.filter((xml) => xml.ID != idxXml);
      try {
        toast({
          description: (
            <div className="flex items-center justify-between gap-2">
              <p>XML removido com sucesso!</p>
              <CheckCircle size={16} weight="fill" className="text-green-400" />
            </div>
          ),
        });
        return updateArquives(arquivesWithRemovedXml);
      } catch (err) {
        toast({
          title: "Erro ao remover XML!",
          description: `${err}`,
          action: <ToastAction altText="TryAgain">Tentar de novo</ToastAction>,
        });
        return prev;
      }
    });
    setIsDisabledBtnRemove(false);
  }

  return (
    <ContextXml.Provider
      value={{
        arquives,
        AddNewArquive,
        updateGuideDetails,
        updateXmlDetails,
        removeXml,
        deleteGuides,
      }}
    >
      {children}
    </ContextXml.Provider>
  );
};
