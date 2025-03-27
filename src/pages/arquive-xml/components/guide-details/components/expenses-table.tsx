import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FormField, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OutraDespesa } from "@/utils/XmlTypes";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "../page";

interface ExpensesTableProps {
  expenses: OutraDespesa[] | OutraDespesa | undefined;
  form: UseFormReturn<z.infer<typeof formSchema>>;
}

export const ExpensesTable = ({ expenses, form }: ExpensesTableProps) => {
  const { control, watch } = form;
  return (
    <AccordionItem
      className="border rounded mb-4 overflow-x-auto"
      value="expenses"
    >
      <AccordionTrigger className="p-2 font-semibold">
        MATERIAIS E MEDICAMENTOS
      </AccordionTrigger>
      <AccordionContent>
        <Table className="w-full text-sm">
          <TableHeader>
            <TableRow>
              <TableHead>Tabela</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Código</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>UN</TableHead>
              <TableHead>Qtde</TableHead>
              <TableHead>Valor Unitário</TableHead>
              <TableHead>Valor Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.isArray(expenses) &&
              expenses.map((_mat, idx) => {
                const valorUnitarioExpense = watch(
                  `expenses.${idx}.valorUnitarioExpense`
                );
                const quantidadeExpense = watch(
                  `expenses.${idx}.quantidadeExpense`
                );

                const valorTotal = Number(
                  (
                    Number(quantidadeExpense) * Number(valorUnitarioExpense)
                  ).toFixed(2)
                );

                return (
                  <TableRow key={idx}>
                    <TableCell className="w-[5%]">
                      <FormField
                        control={control}
                        name={`expenses.${idx}.tabelaExpense`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              {field ? <Input {...field} /> : <Skeleton />}
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </TableCell>

                    <TableCell className="w-1/4">
                      <FormField
                        control={control}
                        name={`expenses.${idx}.descricaoExpense`}
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
                        name={`expenses.${idx}.codigoExpense`}
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
                        name={`expenses.${idx}.dataExpense`}
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

                    <TableCell className="w-[8%]">
                      <FormField
                        control={control}
                        name={`expenses.${idx}.unidadeExpense`}
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
                        name={`expenses.${idx}.quantidadeExpense`}
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
                        name={`expenses.${idx}.valorUnitarioExpense`}
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
