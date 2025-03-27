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
import { ProcedimentoExecutado } from "@/utils/XmlTypes";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "../page";
import { Skeleton } from "@/components/ui/skeleton";

interface ProceduresTableProps {
  procedures: ProcedimentoExecutado[] | ProcedimentoExecutado | undefined;
  form: UseFormReturn<z.infer<typeof formSchema>>;
}

export const ProceduresTable = ({ procedures, form }: ProceduresTableProps) => {
  const { control, watch } = form;
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
              <TableHead className="p-2 text-left">Qtde</TableHead>
              <TableHead className="p-2 text-left">Valor Unitário</TableHead>
              <TableHead className="p-2 text-left">Valor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.isArray(procedures) &&
              procedures.map((_proc, idx) => {
                const valorUnitario = watch(
                  `procedimentos.${idx}.valorUnitarioProcedimento`
                );
                const quantidadeProcedimento = watch(
                  `procedimentos.${idx}.quantidadeProcedimento`
                );

                const valorTotal = Number(
                  (
                    Number(quantidadeProcedimento) * Number(valorUnitario)
                  ).toFixed(2)
                );
                return (
                  <TableRow key={idx}>
                    <TableCell className="w-[6%]">
                      <FormField
                        control={control}
                        name={`procedimentos.${idx}.tabelaProcedimento`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              {field ? <Input {...field} /> : <Skeleton />}
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </TableCell>

                    <TableCell className="w-2/5">
                      <FormField
                        control={control}
                        name={`procedimentos.${idx}.descricaoProcedimento`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              {field ? <Input {...field} /> : <Skeleton />}
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </TableCell>

                    <TableCell className="w-[12%]">
                      <FormField
                        control={control}
                        name={`procedimentos.${idx}.codigoProcedimento`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              {field ? <Input {...field} /> : <Skeleton />}
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </TableCell>

                    <TableCell>
                      <FormField
                        control={control}
                        name={`procedimentos.${idx}.dataProcedimento`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              {field ? (
                                <Input
                                  {...field}
                                  type="date"
                                  value={field.value ? field.value : ""}
                                />
                              ) : (
                                <Skeleton />
                              )}
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </TableCell>

                    <TableCell className="w-[6%]">
                      <FormField
                        control={control}
                        name={`procedimentos.${idx}.quantidadeProcedimento`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              {field ? <Input {...field} /> : <Skeleton />}
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </TableCell>

                    <TableCell className="w-[12%]">
                      <FormField
                        control={control}
                        name={`procedimentos.${idx}.valorUnitarioProcedimento`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              {field ? <Input {...field} /> : <Skeleton />}
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </TableCell>

                    <TableCell className="w-[13%]">
                      {valorTotal ? (
                        <Input value={valorTotal} disabled />
                      ) : (
                        <Skeleton />
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </AccordionContent>
    </AccordionItem>
  );
};
