import { useSearchParams } from "react-router-dom";
import { DataTable } from "./data-table";
import { useContext } from "react";
import { ContextXml } from "@/context/ContextXml";
import { columns } from "./columns";

export const ArquiveXml = () => {
  const { arquives } = useContext(ContextXml);
  const [searchParams] = useSearchParams();
  const idXml = searchParams.get("idXml");

  const arquiveXml =
    arquives && arquives.find((arquive) => arquive.ID === idXml);

  const xmlGuides =
    arquiveXml?.objectXml?.["ans:mensagemTISS"]?.[
      "ans:prestadorParaOperadora"
    ]?.["ans:loteGuias"]?.["ans:guiasTISS"]?.["ans:guiaSP-SADT"];

  const guidesToArray = Array.isArray(xmlGuides) ? xmlGuides : [xmlGuides];

  const guidesToTable = guidesToArray.map((guide) => {
    return {
      carteirinha:
        guide?.["ans:dadosBeneficiario"]?.["ans:numeroCarteira"]?._text || "",
      guiaDoPrestador:
        guide?.["ans:cabecalhoGuia"]?.["ans:numeroGuiaPrestador"]?._text || "",
      guiaDaOperadora:
        guide?.["ans:dadosAutorizacao"]?.["ans:numeroGuiaOperadora"]?._text ||
        "",
      senha: guide?.["ans:dadosAutorizacao"]?.["ans:senha"]?._text || "",
      dataDaAutorizacao: guide?.["ans:dadosAutorizacao"]?.[
        "ans:dataAutorizacao"
      ]?._text
        ? Intl.DateTimeFormat("pt-BR").format(
            new Date(
              guide["ans:dadosAutorizacao"][
                "ans:dataAutorizacao"
              ]._text.toString()
            )
          )
        : "",
      dataDaValidadeDaSenha: guide?.["ans:dadosAutorizacao"]?.[
        "ans:dataValidadeSenha"
      ]?._text
        ? Intl.DateTimeFormat("pt-BR").format(
            new Date(
              guide["ans:dadosAutorizacao"][
                "ans:dataValidadeSenha"
              ]._text.toString()
            )
          )
        : "",
    };
  });

  return (
    <div className="w-full px-10">
      <h1 className="text-3xl">{arquiveXml?.details.arquiveName}</h1>
      <DataTable columns={columns} data={guidesToTable} />
    </div>
  );
};
