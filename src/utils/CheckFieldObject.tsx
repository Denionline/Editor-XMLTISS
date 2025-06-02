import {FormGuideType} from "@/pages/arquive-xml/components/guide-details/page";
import {GuiaSPSADT} from "./XmlTypes";

interface CheckFieldObjectProps {
	guide: GuiaSPSADT;
	formValues: FormGuideType;
}

export const CheckFieldObject = ({
	guide,
	formValues,
}: CheckFieldObjectProps) => {
	const {senha, dataDaValidadeDaSenha} = formValues;

	if (senha && !guide["ans:dadosAutorizacao"]["ans:senha"]) {
		return true;
	}
	if (
		dataDaValidadeDaSenha &&
		!guide["ans:dadosAutorizacao"]["ans:dataValidadeSenha"]
	) {
		return true;
	}
	return false;
};
