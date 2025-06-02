import {ActionTypes} from "./actions";
import {produce} from "immer";

import {
	GuiaSPSADT,
	ObjectXmlType,
	OutraDespesa,
	ProcedimentoExecutado,
} from "@/utils/XmlTypes";
import {MultiQtdeValorUn} from "@/utils/Convert";
import {
	CalcTotalValueArquive,
	CalcTotalValueGuide,
} from "@/utils/CalcTotalValues";

export interface ArquiveType {
	ID: string;
	objectXml: ObjectXmlType;
	details: {
		createdAt: Date;
		arquiveName: string;
		guidesQuantity: number;
		totalValue: string;
	};
}

export function arquivesReducer(state: ArquiveType[], action: any) {
	switch (action.type) {
		case ActionTypes.ADD_NEW_ARQUIVE: {
			const newArquive = action.payload.newArquive;
			const guides = newArquive.objectXml["ans:mensagemTISS"][
				"ans:prestadorParaOperadora"
			]["ans:loteGuias"]["ans:guiasTISS"]["ans:guiaSP-SADT"] as GuiaSPSADT[];

			if (!Array.isArray(guides)) {
				newArquive.objectXml["ans:mensagemTISS"]["ans:prestadorParaOperadora"][
					"ans:loteGuias"
				]["ans:guiasTISS"]["ans:guiaSP-SADT"] = [guides];
			}
			const guidesOnArray = guides.map((guide) => {
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
			return produce(state, (draft) => {
				draft.push({
					...newArquive,
					details: {
						...newArquive.details,
						totalValue: CalcTotalValueArquive(newArquive),
						guidesQuantity: guides.length,
					},
					objectXml: {
						...newArquive.objectXml,
						["ans:mensagemTISS"]: {
							...newArquive.objectXml["ans:mensagemTISS"],
							["ans:prestadorParaOperadora"]: {
								...newArquive.objectXml["ans:mensagemTISS"][
									"ans:prestadorParaOperadora"
								],
								["ans:loteGuias"]: {
									...newArquive.objectXml["ans:mensagemTISS"][
										"ans:prestadorParaOperadora"
									]["ans:loteGuias"],
									["ans:guiasTISS"]: {
										...newArquive.objectXml["ans:mensagemTISS"][
											"ans:prestadorParaOperadora"
										]["ans:loteGuias"]["ans:guiasTISS"],
										["ans:guiaSP-SADT"]: guidesOnArray,
									},
								},
							},
						},
					},
				});
			});
		}
		case ActionTypes.UPDATE_XML_DETAILS: {
			const {nomeDoArquivo, codigoDoPrestador, numeroDoProtocolo, registroANS} =
				action.payload.formValues;

			const idxArquive = state.findIndex(
				(arquive) => arquive.ID == action.payload.idArquive
			);
			return produce(state, (draft) => {
				const xmlSelected = draft[idxArquive];
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
						xmlSelected.objectXml["ans:mensagemTISS"][
							"ans:prestadorParaOperadora"
						]["ans:loteGuias"]["ans:numeroLote"]._text != numeroDoProtocolo
					) {
						xmlSelected.objectXml["ans:mensagemTISS"][
							"ans:prestadorParaOperadora"
						]["ans:loteGuias"]["ans:numeroLote"]._text = numeroDoProtocolo;
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
				}
			});
		}
		case ActionTypes.UPDATE_GUIDE_DETAILS: {
			const {
				carteirinha,
				guiaDoPrestador,
				guiaDaOperadora,
				senha,
				dataDaAutorizacao,
				dataDaValidadeDaSenha,
				procedimentos,
				expenses,
			} = action.payload.formValues;

			const idxArquive = state.findIndex(
				(arquive) => arquive.ID === action.payload.idArquive
			);
			const isNecessaryToUpdateTotalValues = {
				procedures: false,
				expenses: false,
			};
			const guideOriginal =
				state[idxArquive] &&
				state[idxArquive].objectXml["ans:mensagemTISS"][
					"ans:prestadorParaOperadora"
				]["ans:loteGuias"]["ans:guiasTISS"]["ans:guiaSP-SADT"][
					action.payload.idxGuide
				];
			const guide = JSON.parse(JSON.stringify(guideOriginal)) as GuiaSPSADT;
			if (
				guide["ans:dadosBeneficiario"]["ans:numeroCarteira"]._text !=
				carteirinha
			) {
				guide["ans:dadosBeneficiario"]["ans:numeroCarteira"]._text =
					carteirinha;
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

			if (guide["ans:dadosAutorizacao"]["ans:senha"] &&
				guide["ans:dadosAutorizacao"]["ans:senha"]._text !=
				senha
			) {
				guide["ans:dadosAutorizacao"]["ans:senha"]._text =
					senha;
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

						if (
							proc["ans:quantidadeExecutada"]._text != quantidadeProcedimento
						) {
							proc["ans:quantidadeExecutada"]._text = quantidadeProcedimento;
							isNecessaryToUpdateTotalValues.procedures = true;
						}

						if (proc["ans:valorUnitario"]._text != valorUnitarioProcedimento) {
							proc["ans:valorUnitario"]._text = valorUnitarioProcedimento;
							isNecessaryToUpdateTotalValues.procedures = true;
						}
						if (isNecessaryToUpdateTotalValues.procedures) {
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
						isNecessaryToUpdateTotalValues.expenses = true;
					}

					if (
						desp["ans:servicosExecutados"]["ans:valorUnitario"]._text !=
						valorUnitarioExpense
					) {
						desp["ans:servicosExecutados"]["ans:valorUnitario"]._text =
							valorUnitarioExpense;
						isNecessaryToUpdateTotalValues.expenses = true;
					}
					if (isNecessaryToUpdateTotalValues.expenses) {
						desp["ans:servicosExecutados"]["ans:valorTotal"]._text =
							MultiQtdeValorUn(quantidadeExpense, valorUnitarioExpense);
					}
				});
			}

			return produce(state, (draft) => {
				if (
					isNecessaryToUpdateTotalValues.procedures ||
					isNecessaryToUpdateTotalValues.procedures
				) {
					guide["ans:valorTotal"]["ans:valorTotalGeral"]._text =
						CalcTotalValueGuide(guide);
					draft[idxArquive].details.totalValue = CalcTotalValueArquive(
						draft[idxArquive]
					);
				}
				draft[idxArquive].objectXml["ans:mensagemTISS"][
					"ans:prestadorParaOperadora"
				]["ans:loteGuias"]["ans:guiasTISS"]["ans:guiaSP-SADT"][
					action.payload.idxGuide
				] = guide;
			});
		}
		case ActionTypes.DELETE_GUIDES: {
			const idxArquive = state.findIndex(
				(xml) => xml.ID == action.payload.idArquive
			);
			const guidesDelete: string[] = action.payload.idxGuides;
			return produce(state, (draft) => {
				guidesDelete.forEach((idxDelete, idx) => {
					draft[idxArquive].objectXml["ans:mensagemTISS"][
						"ans:prestadorParaOperadora"
					]["ans:loteGuias"]["ans:guiasTISS"]["ans:guiaSP-SADT"].splice(
						Number(idxDelete) - idx,
						1
					);
				});
				draft[idxArquive].details.totalValue = CalcTotalValueArquive(
					draft[idxArquive]
				);
			});
		}
		case ActionTypes.DELETE_ARQUIVE: {
			const idxArquive = state.findIndex(
				(arquive) => arquive.ID === action.payload.idArquive
			);
			return produce(state, (draft) => {
				draft.splice(idxArquive, 1);
			});
		}
		default:
			return state;
	}
}

export {ActionTypes};
