import {ArquiveType} from "@/reducer/arquive/reducer";
import {GuiaSPSADT} from "./XmlTypes";

export const CalcTotalValueArquive = (arquive: ArquiveType) => {
	const guides = arquive.objectXml["ans:mensagemTISS"][
		"ans:prestadorParaOperadora"
	]["ans:loteGuias"]["ans:guiasTISS"]["ans:guiaSP-SADT"] as GuiaSPSADT[];

	const guidesUpdated = guides.map((guide) => {
		const totalProcedures =
			guide["ans:procedimentosExecutados"]?.[
				"ans:procedimentoExecutado"
			].reduce((accProc, proc) => {
				const totalProcedure = Number(proc["ans:valorTotal"]._text);
				return accProc + totalProcedure;
			}, 0) || 0;

		const totalExpenses =
			guide["ans:outrasDespesas"]?.["ans:despesa"].reduce((accExp, exp) => {
				const totalExpense = Number(
					exp["ans:servicosExecutados"]["ans:valorTotal"]
				);
				return accExp + totalExpense;
			}, 0) || 0;
		return {
			...guide,
			["ans:valorTotal"]: {
				...guide["ans:valorTotal"],
				["ans:valorTotalGeral"]: {
					...guide["ans:valorTotal"]["ans:valorTotalGeral"],
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
	return totalValueXml.toFixed(2);
};

export const CalcTotalValueGuide = (guide: GuiaSPSADT) => {
	const totalProcedures =
		guide["ans:procedimentosExecutados"]?.["ans:procedimentoExecutado"].reduce(
			(accProc, proc) => {
				const totalProcedure = Number(proc["ans:valorTotal"]._text);
				return accProc + totalProcedure;
			},
			0
		) || 0;

	const totalExpenses =
		guide["ans:outrasDespesas"]?.["ans:despesa"].reduce((accExp, exp) => {
			const totalExpense = Number(
				exp["ans:servicosExecutados"]["ans:valorTotal"]
			);
			return accExp + totalExpense;
		}, 0) || 0;
	guide["ans:valorTotal"]["ans:valorTotalGeral"]._text = (
		totalProcedures + totalExpenses
	).toFixed(2);

	const totalValueXml = totalProcedures + totalExpenses;
	return totalValueXml.toFixed(2);
};
