import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ConvertData, ConvertToReal } from "@/utils/Convert";
import { OutraDespesa } from "@/utils/XmlTypes";

interface ExpensesTableProps {
  expenses: OutraDespesa[] | OutraDespesa | undefined;
}

export const ExpensesTable = ({ expenses }: ExpensesTableProps) => {
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
              <TableHead className="p-2">Tabela</TableHead>
              <TableHead className="p-2">Descrição</TableHead>
              <TableHead className="p-2">Código</TableHead>
              <TableHead className="p-2">Data</TableHead>
              <TableHead className="p-2">UN</TableHead>
              <TableHead className="p-2">Qtde</TableHead>
              <TableHead className="p-2">Valor Unitário</TableHead>
              <TableHead className="p-2">Valor Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.isArray(expenses) &&
              expenses.map((mat, idx) => (
                <TableRow key={idx}>
                  <TableCell className="p-2">
                    {mat["ans:servicosExecutados"]["ans:codigoTabela"]._text}
                  </TableCell>
                  <TableCell className="p-2">
                    {
                      mat["ans:servicosExecutados"]["ans:descricaoProcedimento"]
                        ._text
                    }
                  </TableCell>
                  <TableCell className="p-2">
                    {
                      mat["ans:servicosExecutados"]["ans:codigoProcedimento"]
                        ._text
                    }
                  </TableCell>
                  <TableCell className="p-2">
                    {ConvertData(
                      mat["ans:servicosExecutados"]["ans:dataExecucao"]._text
                    )}
                  </TableCell>
                  <TableCell className="p-2">
                    {mat["ans:servicosExecutados"]["ans:unidadeMedida"]._text}
                  </TableCell>
                  <TableCell className="p-2">
                    {
                      mat["ans:servicosExecutados"]["ans:quantidadeExecutada"]
                        ._text
                    }
                  </TableCell>
                  <TableCell className="p-2">
                    {ConvertToReal(
                      mat["ans:servicosExecutados"]["ans:valorUnitario"]._text
                    )}
                  </TableCell>
                  <TableCell className="p-2">
                    {ConvertToReal(
                      mat["ans:servicosExecutados"]["ans:valorTotal"]?._text
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </AccordionContent>
    </AccordionItem>
  );
};
