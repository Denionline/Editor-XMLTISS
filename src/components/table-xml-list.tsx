import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { ContextXml } from "@/context/ContextXml";
import { useContext } from "react";

export const TableXmlList = () => {

  const { arquives } = useContext(ContextXml);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome do arquivo</TableHead>
          <TableHead className="w-40">Valor</TableHead>
          <TableHead className="w-40">Quantidade de guias</TableHead>
          <TableHead className="w-52">Criado em</TableHead>
          <TableHead className="w-1"></TableHead>
          <TableHead className="w-1"></TableHead>
          <TableHead className="w-1"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {arquives && arquives.map((row) => {
          return (
            <TableRow key={row.ID}>
              <TableCell>{row.details.arquiveName}</TableCell>
              <TableCell>
                {row.details.TotalValueXml && row.details.TotalValueXml.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TableCell>
              <TableCell>{row.details.guidesQuantity}</TableCell>
              <TableCell>{Intl.DateTimeFormat('pt-BR').format(row.details.createdAt)}</TableCell>
              <TableCell>
                <Link to={`/arquive-list/xml?idXml=${row.ID}`}>
                    <Button variant={'outline'} className="bg-card">
                        Abrir
                    </Button>
                </Link>
              </TableCell>
              <TableCell>
                <Button variant={'ghost'} className="bg-blue-800 hover:bg-blue-900">
                    Baixar
                </Button>
              </TableCell>
              <TableCell>
                <Button variant={'destructive'}>
                    Excluir
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
