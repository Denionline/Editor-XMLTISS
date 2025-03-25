import { Accordion } from "@radix-ui/react-accordion";
import { ExpensesTable } from "./expenses-table";
import { ProceduresTable } from "./procedures-table";
import { GuiaSPSADT } from "@/utils/XmlTypes";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormValuesType } from "../page";
import { UseFormReturn } from "react-hook-form";
import { Skeleton } from "@/components/ui/skeleton";

interface GuideFormProps {
  guide: GuiaSPSADT;
  form: UseFormReturn<FormValuesType>;
}

export const GuideForm = ({ guide, form }: GuideFormProps) => {
  const { control } = form;

  return (
    <Form {...form}>
      <form>
        <div className="flex flex-col md:flex-row mx-1">
          <FormField
            control={control}
            name="guiaDoPrestador"
            render={({ field }) => (
              <FormItem className="w-6/12">
                <FormLabel className="font-semibold">
                  Guia do prestador
                </FormLabel>
                <FormControl>
                  {field ? <Input {...field} /> : <Skeleton />}
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="guiaDaOperadora"
            render={({ field }) => (
              <FormItem className="ml-1 w-6/12">
                <FormLabel className="font-semibold">
                  Guia da operadora
                </FormLabel>
                <FormControl>
                  {field ? <Input {...field} /> : <Skeleton />}
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col md:flex-row">
          <FormField
            control={control}
            name="carteirinha"
            render={({ field }) => (
              <FormItem className="ml-1 mt-2 flex-1">
                <FormLabel className="font-semibold">Carteirinha</FormLabel>
                <FormControl>
                  {field ? <Input {...field} /> : <Skeleton />}
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="dataDaAutorizacao"
            render={({ field }) => (
              <FormItem className="ml-1 mt-2">
                <FormLabel className="font-semibold">
                  Data da Autorização
                </FormLabel>
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
          <FormField
            control={control}
            name="dataDaValidadeDaSenha"
            render={({ field }) => (
              <FormItem className="ml-1 mt-2 mr-2">
                <FormLabel className="font-semibold">
                  Data da validade da senha
                </FormLabel>
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
        </div>

        <Accordion type="single" collapsible className="mt-4">
          {guide["ans:procedimentosExecutados"] && (
            <ProceduresTable
              form={form}
              procedures={
                guide["ans:procedimentosExecutados"]?.[
                  "ans:procedimentoExecutado"
                ]
              }
            />
          )}
          {guide["ans:outrasDespesas"] && (
            <ExpensesTable
              expenses={guide["ans:outrasDespesas"]?.["ans:despesa"]}
              form={form}
            />
          )}
        </Accordion>
      </form>
    </Form>
  );
};
