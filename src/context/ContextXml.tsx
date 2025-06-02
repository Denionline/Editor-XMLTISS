import {createContext, ReactNode, useEffect, useReducer} from "react";
import {GuiaSPSADT, ObjectXmlType} from "@/utils/XmlTypes";
import {FormGuideType} from "@/pages/arquive-xml/components/guide-details/page";
import {useToast} from "@/hooks/use-toast";
import {CheckCircle} from "@phosphor-icons/react";
import {ToastAction} from "@/components/ui/toast";
import {FormXmlType} from "@/pages/arquive-xml/page";
import {Object2Xml} from "@/utils/Objetct2Xml";
import {arquivesReducer, ArquiveType} from "@/reducer/arquive/reducer";
import {
	addNewArquiveAction,
	deleteArquiveAction,
	deleteGuidesAction,
	updateGuideDetailsAction,
	updateXmlDetailsAction,
} from "@/reducer/arquive/actions";
import {CheckNewField} from "@/components/CheckNewField";
import {CheckFieldObject} from "@/utils/CheckFieldObject";

export interface ContextXmlType {
	arquives: ArquiveType[] | undefined;
	AddNewArquive: (xmlInJson: ObjectXmlType, fileName: string) => void;
	updateXmlDetails: (idArquive: string, data: FormXmlType) => void;
	updateGuideDetails: (
		idArquive: string,
		idxGuide: number,
		data: FormGuideType
	) => void;
	deleteArquive: (idxXml: string, setIsDisabledBtnRemove: any) => void;
	deleteGuides: (idArquive: string, guides: string[]) => void;
	tranformObjetoToXml: (idArquive: string) => void;
}

export const ContextXml = createContext({} as ContextXmlType);

interface ContextProviderProps {
	children: ReactNode;
}

export const ContextXmlProvider = ({children}: ContextProviderProps) => {
	const [arquives, dispatch] = useReducer(
		arquivesReducer,
		[],
		(initialState) => {
			const arquivesOnStorage = localStorage.getItem("editor_xml_tiss_v1");
			if (arquivesOnStorage) {
				return JSON.parse(arquivesOnStorage);
			}
			return initialState;
		}
	);
	const {toast} = useToast();

	useEffect(() => {
		localStorage.setItem("editor_xml_tiss_v1", JSON.stringify(arquives));
	}, [arquives]);

	function AddNewArquive(xmlInJson: ObjectXmlType, fileName: string) {
		const newArquive = {
			ID: new Date().getTime().toString(),
			objectXml: xmlInJson,
			details: {
				createdAt: new Date(),
				arquiveName: fileName,
				guidesQuantity: 0,
				totalValue: "0",
			},
		} as ArquiveType;
		dispatch(addNewArquiveAction(newArquive));
	}

	function updateXmlDetails(idArquive: string, formValues: FormXmlType) {
		try {
			dispatch(updateXmlDetailsAction(idArquive, formValues));
			toast({
				description: (
					<div className="flex items-center justify-between gap-2">
						<p>Dados salvos com sucesso!</p>
						<CheckCircle size={16} weight="fill" className="text-green-400" />
					</div>
				),
			});
		} catch (err) {
			toast({
				title: "Erro ao salvar detalhes do XML!",
				description: `${err}`,
				action: <ToastAction altText="TryAgain">Tentar de novo</ToastAction>,
			});
		}
	}

	function updateGuideDetails(
		idArquive: string,
		idxGuide: number,
		formValues: FormGuideType
	) {
		const guide = arquives.find((arquive) => arquive.ID == idArquive)
			?.objectXml["ans:mensagemTISS"]["ans:prestadorParaOperadora"][
			"ans:loteGuias"
		]["ans:guiasTISS"]["ans:guiaSP-SADT"][idxGuide] as GuiaSPSADT;
		if (CheckFieldObject({guide, formValues})) {
			console.log("");
		}
		try {
			dispatch(updateGuideDetailsAction(idArquive, idxGuide, formValues));
			toast({
				description: (
					<div className="flex items-center justify-between gap-2">
						<p>Dados salvos com sucesso!</p>
						<CheckCircle size={16} weight="fill" className="text-green-400" />
					</div>
				),
			});
		} catch (err) {
			toast({
				title: "Erro ao salvar detalhes da guia!",
				description: `${err}`,
				action: <ToastAction altText="TryAgain">Tentar de novo</ToastAction>,
			});
		}
	}

	function deleteGuides(idArquive: string, idxGuides: string[]) {
		try {
			dispatch(deleteGuidesAction(idArquive, idxGuides));
			toast({
				description: (
					<div className="flex items-center justify-between gap-2">
						<p>
							{idxGuides.length > 1
								? "Guias removidas com sucesso!"
								: "Guia removida com sucesso!"}{" "}
						</p>
						<CheckCircle size={16} weight="fill" className="text-green-400" />
					</div>
				),
			});
		} catch (err) {
			toast({
				title: "Erro ao remover Guia!",
				description: `${err}`,
				action: <ToastAction altText="TryAgain">Tentar de novo</ToastAction>,
			});
		}
	}

	function deleteArquive(idArquive: string, setIsDisabledBtnRemove: any) {
		try {
			dispatch(deleteArquiveAction(idArquive));
			toast({
				description: (
					<div className="flex items-center justify-between gap-2">
						<p>XML removido com sucesso!</p>
						<CheckCircle size={16} weight="fill" className="text-green-400" />
					</div>
				),
			});
		} catch (err) {
			toast({
				title: "Erro ao remover XML!",
				description: `${err}`,
				action: <ToastAction altText="TryAgain">Tentar de novo</ToastAction>,
			});
		}
		setIsDisabledBtnRemove(false);
	}

	function tranformObjetoToXml(idArquive: string) {
		const arquiveSelected = arquives.find(
			(arquive) => arquive.ID === idArquive
		);
		if (arquiveSelected) {
			Object2Xml(arquiveSelected);
		}
	}

	function addNewFieldOnObject() {
		
	}

	function handleCheckComponent() {}

	return (
		<ContextXml.Provider
			value={{
				arquives,
				AddNewArquive,
				updateGuideDetails,
				updateXmlDetails,
				deleteArquive,
				deleteGuides,
				tranformObjetoToXml,
			}}
		>
			{children}
			<CheckNewField />
		</ContextXml.Provider>
	);
};
