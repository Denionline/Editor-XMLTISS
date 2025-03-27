import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogFooter,
} from "../components/ui/dialog";
import { TableXmlList } from "./components/table-xml-list";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useForm } from "react-hook-form";
import { xml2json } from "xml-js";
import { useContext, useState } from "react";
import { ContextXml } from "@/context/ContextXml";

export const ArquiveList = () => {
  const { register, handleSubmit, watch } = useForm();
  const { AddNewArquive } = useContext(ContextXml);

  const [isOpenNewXmlDialog, setIsOpenNewXmlDialog] = useState(false);

  function handleClickSubmit() {
    const inputFile = watch("xmlArquive")?.[0];
    const fileName = watch("xmlArquive")?.[0]?.name;

    if (!inputFile) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const xmlOfInput = event.target!.result;

      if (xmlOfInput instanceof ArrayBuffer) {
        const decoder = new TextDecoder("ISO-8859-1");
        const xmlDecodedAsString = decoder.decode(new Uint8Array(xmlOfInput));

        const xmlInJson = JSON.parse(
          xml2json(xmlDecodedAsString, {
            compact: true,
            ignoreComment: true,
            alwaysChildren: true,
          })
        );
        setIsOpenNewXmlDialog(false);
        AddNewArquive(xmlInJson, fileName);
      }
    };
    reader.readAsArrayBuffer(inputFile);
  }

  return (
    <div className="w-full p-6 flex flex-col gap-3">
      <div className="flex justify-between">
        <h1 className="text-3xl text-muted-foreground-foreground">
          Lista de arquivos (.xml)
        </h1>
        <Dialog open={isOpenNewXmlDialog} onOpenChange={setIsOpenNewXmlDialog}>
          <DialogTrigger asChild>
            <Button onClick={() => setIsOpenNewXmlDialog(true)}>
              Novo arquivo
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="mb-2">
              <DialogTitle>Novo arquivo</DialogTitle>
            </DialogHeader>
            <form className="w-full">
              <Input
                id="xmlFile"
                type="file"
                accept=".xml"
                {...register("xmlArquive", { required: true })}
              />
            </form>
            <DialogFooter>
              <Button
                variant={"outline"}
                onClick={() => setIsOpenNewXmlDialog(false)}
              >
                Cancelar
              </Button>
              <Button type="submit" onClick={handleSubmit(handleClickSubmit)}>
                Salvar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <TableXmlList />
    </div>
  );
};
