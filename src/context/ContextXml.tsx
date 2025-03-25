import { createContext, useState, useEffect } from "react";
import {
  GuiaSPSADT,
  ObjectXml,
  OutraDespesa,
  ProcedimentoExecutado,
} from "@/utils/XmlTypes";
import { FormValuesType } from "@/pages/guide-details/page";

export interface ArquiveType {
  ID: string;
  objectXml: ObjectXml;
  details: {
    createdAt: Date;
    arquiveName: string;
    guidesQuantity: number;
    TotalValueXml: number | undefined;
  };
}

export interface ContextXmlType {
  arquives: ArquiveType[] | undefined;
  AddNewArquive: (xmlInJson: ObjectXml, fileName: string) => void;
  UpdateGuideDetails: (
    idXml: string,
    idxGuide: number,
    data: FormValuesType
  ) => void;
}

export const ContextXml = createContext({} as ContextXmlType);

export const ContextXmlProvider = ({ children }: any) => {
  const [arquives, setArquives] = useState<ArquiveType[]>([]);

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

  function AddNewArquive(xmlInJson: ObjectXml, fileName: string) {
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
        guidesQuantity: guides.length || 1,
        TotalValueXml: CalcValueTotalInXml(xmlInJson),
      },
    };

    const updatedArquives = [...arquives, newArquive];
    setArquives(updatedArquives);
    localStorage.setItem("editor_xml_tiss_v1", JSON.stringify(updatedArquives));
  }

  const CalcValueTotalInXml = (xmlInJson: ObjectXml) => {
    const guides = xmlInJson["ans:mensagemTISS"]["ans:prestadorParaOperadora"][
      "ans:loteGuias"
    ]["ans:guiasTISS"]["ans:guiaSP-SADT"] as GuiaSPSADT[];

    if (Array.isArray(guides)) {
      const totalValue =
        guides &&
        guides.reduce((acumulator, guide) => {
          const value = Number(
            guide["ans:valorTotal"]["ans:valorTotalGeral"]["_text"]
          );
          return acumulator + Number(value);
        }, 0);
      return totalValue;
    }
    return Number(guides["ans:valorTotal"]["ans:valorTotalGeral"]["_text"]);
  };

  useEffect(() => {
    if (arquives.length) {
      localStorage.setItem("editor_xml_tiss_v1", JSON.stringify(arquives));
    }
  }, [arquives]);

  function UpdateGuideDetails(
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
    }: FormValuesType
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

    if (guide["ans:procedimentosExecutados"]) {
      guide["ans:procedimentosExecutados"]["ans:procedimentoExecutado"].map(
        (proc, idx) => {
          const {
            tabelaProcedimento,
            codigoProcedimento,
            descricaoProcedimento,
            dataProcedimento,
            quantidadeProcedimento,
            valorUnitarioProcedimento,
            valorProcedimento,
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

          if (
            proc["ans:quantidadeExecutada"]._text !=
            quantidadeProcedimento
          ) {
            proc["ans:quantidadeExecutada"]._text =
              quantidadeProcedimento;
          }

          if (
            proc["ans:valorUnitario"]._text !=
            valorUnitarioProcedimento
          ) {
            proc["ans:valorUnitario"]._text =
              valorUnitarioProcedimento;
          }
          if (
            proc["ans:valorTotal"]._text !=
            valorUnitarioProcedimento
          ) {
            proc["ans:valorTotal"]._text =
              codigoProcedimento;
          }
        }
      );
    }

    setArquives((prev) => {
      const updatedArquives = [...prev];
      updatedArquives[idxArquive].objectXml["ans:mensagemTISS"][
        "ans:prestadorParaOperadora"
      ]["ans:loteGuias"]["ans:guiasTISS"]["ans:guiaSP-SADT"][idxGuide] = guide;
      return updatedArquives;
    });
  }

  return (
    <ContextXml.Provider
      value={{ arquives, AddNewArquive, UpdateGuideDetails }}
    >
      {children}
    </ContextXml.Provider>
  );
};
