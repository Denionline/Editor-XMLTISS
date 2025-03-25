import { ContextXml } from "@/context/ContextXml";
import { ConvertData, ConvertToReal } from "@/utils/Convert";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GuideForm } from "./components/guide-form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { GuiaSPSADT } from "@/utils/XmlTypes";

interface GuideDetailsProps {
  idGuide: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const formSchema = z.object({
  carteirinha: z.string(),
  guiaDoPrestador: z.string(),
  guiaDaOperadora: z.string(),
  dataDaAutorizacao: z.string(),
  dataDaValidadeDaSenha: z.string(),
  // procedimentos: z.array(
  //   z.object({
  //     tabelaProcedimento: z.string(),
  //     descricaoProcedimento: z.string(),
  //     codigoProcedimento: z.string(),
  //     dataProcedimento: z.string(),
  //     valorProcedimento: z.string(),
  //   })
  // ),
});

export const GuideDetails = ({ idGuide }: GuideDetailsProps) => {
  const { arquives } = useContext(ContextXml);
  const [searchParams] = useSearchParams();
  const idXml = searchParams.get("idXml");

  const arquiveXml =
    arquives && arquives.find((arquive) => arquive.ID === idXml);
  const [guide, setGuide] = useState(
    arquiveXml?.objectXml["ans:mensagemTISS"]["ans:prestadorParaOperadora"][
      "ans:loteGuias"
    ]["ans:guiasTISS"]["ans:guiaSP-SADT"][Number(idGuide)] as GuiaSPSADT
  );

  const [totals, setTotals] = useState({
    totalDespesas: 0,
    totalProcedimentos: 0,
    totalGuide: 0,
  });

  useEffect(() => {
    if (arquiveXml) {
      setGuide(
        arquiveXml?.objectXml["ans:mensagemTISS"]["ans:prestadorParaOperadora"][
          "ans:loteGuias"
        ]["ans:guiasTISS"]["ans:guiaSP-SADT"][Number(idGuide)] as GuiaSPSADT
      );
    }

    if (guide && guide["ans:procedimentosExecutados"]) {
      const totalProcedimentos =
        guide["ans:procedimentosExecutados"][
          "ans:procedimentoExecutado"
        ].reduce((acc, proc) => {
          return acc + Number(proc["ans:valorTotal"]._text);
        }, 0) || 0;
      setTotals((prev) => {
        return {
          ...prev,
          totalProcedimentos,
        };
      });
    }

    if (guide && guide["ans:outrasDespesas"]) {
      const totalDespesas =
        guide["ans:outrasDespesas"]["ans:despesa"].reduce((acc, desp) => {
          return (
            acc + Number(desp["ans:servicosExecutados"]["ans:valorTotal"]._text)
          );
        }, 0) || 0;
      setTotals((prev) => {
        return {
          ...prev,
          totalDespesas,
        };
      });
    }

    setTotals((prev) => {
      const totalGuide = prev.totalProcedimentos + prev.totalDespesas;
      return {
        ...prev,
        totalGuide,
      };
    });
  }, [arquiveXml, idGuide, guide]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      carteirinha: guide && guide["ans:dadosBeneficiario"]["ans:numeroCarteira"]._text,
      guiaDoPrestador:
      guide && guide["ans:cabecalhoGuia"]["ans:numeroGuiaPrestador"]._text,
      guiaDaOperadora:
      guide && guide["ans:dadosAutorizacao"]["ans:numeroGuiaOperadora"]._text,
      dataDaAutorizacao: ConvertData(
        guide && guide["ans:dadosAutorizacao"]["ans:dataAutorizacao"]._text
      ),
      dataDaValidadeDaSenha: ConvertData(
        guide && guide["ans:dadosAutorizacao"]["ans:dataValidadeSenha"]?._text
      ),
      // procedimentos: guide["ans:procedimentosExecutados"]?.[
      //   "ans:procedimentoExecutado"
      // ].map((proc) => {
      //   return {
      //     tabelaProcedimento:
      //       proc["ans:procedimento"]["ans:codigoTabela"]._text,
      //     descricaoProcedimento:
      //       proc["ans:procedimento"]["ans:descricaoProcedimento"]._text,
      //     codigoProcedimento:
      //       proc["ans:procedimento"]["ans:codigoProcedimento"]._text,
      //     dataProcedimento: ConvertData(proc["ans:dataExecucao"]._text),
      //     valorProcedimento: ConvertToReal(proc["ans:valorTotal"]._text),
      //   };
      // }),
    },
  });
  const { handleSubmit } = form;

  function handleClickSaveButton(data: any) {
    console.log(data);
  }

  return (
    <DialogContent className="flex flex-col justify-between max-w-5xl h-5/6">
      <DialogHeader>
        <DialogTitle>Detalhes da Guia</DialogTitle>
      </DialogHeader>
      {guide && (
        <>
          <ScrollArea className="w-full text-primary px-6 mt-4">
            <GuideForm form={form} guide={guide} />
            <Card>
              <CardContent className="flex flex-col px-5 py-3">
                {guide["ans:procedimentosExecutados"] && (
                  <div className="flex items-center justify-between">
                    <h3>Procedimentos</h3>
                    <p>{ConvertToReal(totals.totalProcedimentos)}</p>
                  </div>
                )}
                {guide["ans:outrasDespesas"] && (
                  <div className="flex items-center justify-between">
                    <h3>Despesas</h3>
                    <p>{ConvertToReal(totals.totalDespesas)}</p>
                  </div>
                )}
                <div className="flex items-center justify-between font-semibold mt-4">
                  <h3>Total da Guia</h3>
                  <p>{ConvertToReal(totals.totalGuide)}</p>
                </div>
              </CardContent>
            </Card>
          </ScrollArea>
          <div className="w-full flex justify-end gap-4 mt-2">
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button
              variant="default"
              onClick={handleSubmit(handleClickSaveButton)}
            >
              Salvar
            </Button>
          </div>
        </>
      )}
    </DialogContent>
  );
};
