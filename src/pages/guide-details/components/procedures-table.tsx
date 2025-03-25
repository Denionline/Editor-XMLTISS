import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ConvertData, ConvertToReal } from "@/utils/Convert";
import { ProcedimentoExecutado } from "@/utils/XmlTypes";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "../page";

interface ProceduresTableProps {
  procedures: ProcedimentoExecutado[] | ProcedimentoExecutado | undefined;
  form: UseFormReturn<z.infer<typeof formSchema>>;
}

export const ProceduresTable = ({ procedures, form }: ProceduresTableProps) => {
  return (
    <AccordionItem className="border rounded mb-4" value="procedures">
      <AccordionTrigger className="p-2 font-semibold">
        PROCEDIMENTOS
      </AccordionTrigger>
      <AccordionContent>
        <Table className="w-full text-sm">
          <TableHeader>
            <TableRow>
              <TableHead className="p-2 text-left">Tabela</TableHead>
              <TableHead className="p-2 text-left">Descrição</TableHead>
              <TableHead className="p-2 text-left">Código</TableHead>
              <TableHead className="p-2 text-left">Data</TableHead>
              <TableHead className="p-2 text-left">Valor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.isArray(procedures) &&
              procedures.map((proc, idx) => (
                <TableRow key={idx}>
                  <FormField
                    control={form.control}
                    name={`procedimentos.${idx}.tabelaProcedimento`}
                    render={({ field }) => (
                      <FormItem className="ml-1 mt-2">
                        <FormControl>
                          <Input
                            {...field}
                            value={
                              typeof field.value === "string" ? field.value : ""
                            }
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  {/* <TableCell className="p-2">
                    {proc["ans:procedimento"]["ans:codigoTabela"]._text}
                  </TableCell> */}
                  <TableCell className="p-2">
                    {
                      proc["ans:procedimento"]["ans:descricaoProcedimento"]
                        ._text
                    }
                  </TableCell>
                  <TableCell className="p-2">
                    {proc["ans:procedimento"]["ans:codigoProcedimento"]._text}
                  </TableCell>
                  <TableCell className="p-2">
                    {ConvertData(proc["ans:dataExecucao"]._text)}
                  </TableCell>
                  <TableCell className="p-2">
                    {ConvertToReal(proc["ans:valorTotal"]._text)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </AccordionContent>
    </AccordionItem>
  );
};
