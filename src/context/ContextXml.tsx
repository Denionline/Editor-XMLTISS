import { createContext, useState, useEffect } from "react";
import { GuiaSPSADT, ObjectXml, OutraDespesa, ProcedimentoExecutado } from "@/utils/XmlTypes";

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
    console.log(xmlInJson)
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

        if (guide["ans:procedimentosExecutados"] && 
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



      if (guide["ans:outrasDespesas"] && 
        !Array.isArray(
          guide["ans:outrasDespesas"]["ans:despesa"]
        )
      ) {
        const despesa = guide["ans:outrasDespesas"]["ans:despesa"] as OutraDespesa;
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
    console.log(newArquive);

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

  return (
    <ContextXml.Provider value={{ arquives, AddNewArquive }}>
      {children}
    </ContextXml.Provider>
  );
};
