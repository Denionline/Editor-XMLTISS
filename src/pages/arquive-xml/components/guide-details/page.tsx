import {ContextXml} from "@/context/ContextXml";
import {ConvertToReal, MultiQtdeValorUn} from "@/utils/Convert";
import {useContext, useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {Card, CardContent} from "@/components/ui/card";
import {ScrollArea} from "@/components/ui/scroll-area";
import {GuideForm} from "./components/guide-form";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {GuiaSPSADT} from "@/utils/XmlTypes";
import {Button} from "@/components/ui/button";
import {
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

interface GuideDetailsProps {
	idxGuide: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const formSchema = z.object({
	carteirinha: z.string(),
	guiaDoPrestador: z.string(),
	guiaDaOperadora: z.string(),
	dataDaAutorizacao: z.string().date(),
	dataDaValidadeDaSenha: z.string().date().optional(),
	procedimentos: z
		.array(
			z.object({
				tabelaProcedimento: z.string(),
				descricaoProcedimento: z.string(),
				codigoProcedimento: z.string(),
				dataProcedimento: z.string().date(),
				quantidadeProcedimento: z.string(),
				valorUnitarioProcedimento: z.string(),
			})
		)
		.optional(),
	expenses: z
		.array(
			z.object({
				tabelaExpense: z.string(),
				descricaoExpense: z.string(),
				codigoExpense: z.string(),
				dataExpense: z.string().date(),
				unidadeExpense: z.string(),
				quantidadeExpense: z.string(),
				valorUnitarioExpense: z.string(),
			})
		)
		.optional(),
});

export type FormGuideType = z.infer<typeof formSchema>;

export const GuideDetails = ({idxGuide}: GuideDetailsProps) => {
	const {arquives, updateGuideDetails} = useContext(ContextXml);
	const [searchParams] = useSearchParams();
	const idXml = searchParams.get("idXml");

	const arquiveXml =
		arquives && arquives.find((arquive) => arquive.ID === idXml);
	const guide =
		arquiveXml &&
		(arquiveXml.objectXml["ans:mensagemTISS"]["ans:prestadorParaOperadora"][
			"ans:loteGuias"
		]["ans:guiasTISS"]["ans:guiaSP-SADT"][Number(idxGuide)] as GuiaSPSADT);

	const [totals, setTotals] = useState({
		totalDespesas: 0,
		totalProcedimentos: 0,
		totalGuide: 0,
	});

	const form = useForm<FormGuideType>({
		resolver: zodResolver(formSchema),
	});

	const {handleSubmit, reset, formState} = form;

	function setDefaultValuesOnForm() {
		if (guide) {
			reset({
				carteirinha: guide["ans:dadosBeneficiario"]["ans:numeroCarteira"]._text,
				guiaDoPrestador:
					guide["ans:cabecalhoGuia"]["ans:numeroGuiaPrestador"]._text,
				guiaDaOperadora:
					guide["ans:dadosAutorizacao"]["ans:numeroGuiaOperadora"]._text,
				dataDaAutorizacao:
					guide["ans:dadosAutorizacao"]["ans:dataAutorizacao"]._text,
				dataDaValidadeDaSenha:
					guide["ans:dadosAutorizacao"]["ans:dataValidadeSenha"]?._text,
				procedimentos: guide["ans:procedimentosExecutados"]?.[
					"ans:procedimentoExecutado"
				].map((proc) => ({
					tabelaProcedimento:
						proc["ans:procedimento"]["ans:codigoTabela"]._text,
					descricaoProcedimento:
						proc["ans:procedimento"]["ans:descricaoProcedimento"]._text,
					codigoProcedimento:
						proc["ans:procedimento"]["ans:codigoProcedimento"]._text,
					dataProcedimento: proc["ans:dataExecucao"]._text,
					quantidadeProcedimento: proc["ans:quantidadeExecutada"]._text,
					valorUnitarioProcedimento: proc["ans:valorUnitario"]._text,
				})),
				expenses: guide["ans:outrasDespesas"]?.["ans:despesa"].map((desp) => ({
					tabelaExpense:
						desp["ans:servicosExecutados"]["ans:codigoTabela"]._text,
					descricaoExpense:
						desp["ans:servicosExecutados"]["ans:descricaoProcedimento"]._text,
					codigoExpense:
						desp["ans:servicosExecutados"]["ans:codigoProcedimento"]._text,
					dataExpense: desp["ans:servicosExecutados"]["ans:dataExecucao"]._text,
					unidadeExpense:
						desp["ans:servicosExecutados"]["ans:unidadeMedida"]._text,
					quantidadeExpense:
						desp["ans:servicosExecutados"]["ans:quantidadeExecutada"]._text,
					valorUnitarioExpense:
						desp["ans:servicosExecutados"]["ans:valorUnitario"]._text,
				})),
			});
		}
	}

	useEffect(() => {
		setDefaultValuesOnForm();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [guide]);

	function handleClickCancel() {
		setDefaultValuesOnForm();
	}

	function handleClickSubmit(data: any) {
		if (idXml) {
			updateGuideDetails(idXml, Number(idxGuide), data);
			setDefaultValuesOnForm();
		}
	}

	useEffect(() => {
		if (guide && guide["ans:procedimentosExecutados"]) {
			const totalProcedimentos =
				guide["ans:procedimentosExecutados"][
					"ans:procedimentoExecutado"
				].reduce((acc, proc) => {
					const valueProcedure = MultiQtdeValorUn(
						proc["ans:quantidadeExecutada"]._text,
						proc["ans:valorUnitario"]._text
					);
					return acc + Number(valueProcedure);
				}, 0) || 0;
			setTotals((prev) => ({
				...prev,
				totalProcedimentos,
			}));
		}

		if (guide && guide["ans:outrasDespesas"]) {
			const totalDespesas =
				guide["ans:outrasDespesas"]["ans:despesa"].reduce((acc, desp) => {
					const valueExpense = MultiQtdeValorUn(
						desp["ans:servicosExecutados"]["ans:quantidadeExecutada"]._text,
						desp["ans:servicosExecutados"]["ans:valorUnitario"]._text
					);
					return acc + Number(valueExpense);
				}, 0) || 0;
			setTotals((prev) => ({
				...prev,
				totalDespesas,
			}));
		}
		setTotals((prev) => ({
			...prev,
			totalGuide: prev.totalProcedimentos + prev.totalDespesas,
		}));
	}, [guide, arquives]);

	return (
		<DialogContent className="flex flex-col justify-between max-w-5xl h-5/6">
			<DialogHeader>
				<DialogTitle>Detalhes da Guia</DialogTitle>
			</DialogHeader>
			{guide && (
				<>
					<ScrollArea className="w-full text-primary px-6 mt-4">
						<GuideForm
							form={form}
							guide={guide}
							handleClickSubmit={handleClickSubmit}
						/>
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
							<Button variant="outline" onClick={handleClickCancel}>
								Cancelar
							</Button>
						</DialogClose>
						<Button
							variant="default"
							onClick={handleSubmit(handleClickSubmit)}
							disabled={!formState.isDirty}
						>
							Salvar
						</Button>
					</div>
				</>
			)}
		</DialogContent>
	);
};
