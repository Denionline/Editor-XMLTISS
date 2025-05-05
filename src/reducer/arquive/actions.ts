import { FormXmlType } from "@/pages/arquive-xml/page";
import { ArquiveType } from "./reducer";
import { FormGuideType } from "@/pages/arquive-xml/components/guide-details/page";

export enum ActionTypes {
  ADD_NEW_ARQUIVE = "ADD_NEW_ARQUIVE",
  UPDATE_TOTAL_VALUE_ARQUIVE = "UPDATE_TOTAL_VALUE_ARQUIVE",
  UPDATE_XML_DETAILS = "UPDATE_XML_DETAILS",
  UPDATE_GUIDE_DETAILS = "UPDATE_GUIDE_DETAILS",
  DELETE_GUIDES = "DELETE_GUIDES",
  DELETE_ARQUIVE = "DELETE_ARQUIVE",
}

export function addNewArquiveAction(newArquive: ArquiveType) {
  return {
    type: ActionTypes.ADD_NEW_ARQUIVE,
    payload: {
      newArquive,
    },
  };
}

export function updateXmlDetailsAction(
  idArquive: string,
  formValues: FormXmlType
) {
  return {
    type: ActionTypes.UPDATE_XML_DETAILS,
    payload: {
      idArquive,
      formValues,
    },
  };
}

export function updateGuideDetailsAction(
  idArquive: string,
  idxGuide: number,
  formValues: FormGuideType
) {
  return {
    type: ActionTypes.UPDATE_GUIDE_DETAILS,
    payload: {
      idArquive,
      idxGuide,
      formValues,
    },
  };
}

export function deleteGuidesAction(idArquive: string, idxGuides: string[]) {
  return {
    type: ActionTypes.DELETE_GUIDES,
    payload: {
      idArquive,
      idxGuides,
    },
  };
}

export function deleteArquiveAction(idArquive: string) {
  return {
    type: ActionTypes.DELETE_ARQUIVE,
    payload: {
      idArquive,
    },
  };
}
