import { ArquiveType } from "@/reducer/arquive/reducer";
import { json2xml } from "xml-js";

export const Object2Xml = ({ details, objectXml }: ArquiveType) => {
  const objectText = JSON.stringify(objectXml);
  const xmlContent = json2xml(objectText, {
    compact: true,
    ignoreComment: true,
    spaces: 4,
  });
  const arquiveXmlBlob = new Blob([xmlContent], { type: "application/xml" });
  const urlBlob = window.URL.createObjectURL(arquiveXmlBlob);
  const linkDownload = document.createElement("a");
  linkDownload.href = urlBlob;
  linkDownload.download = details.arquiveName;
  document.body.appendChild(linkDownload);
  linkDownload.click();
  document.body.removeChild(linkDownload);
  window.URL.revokeObjectURL(urlBlob);
};
