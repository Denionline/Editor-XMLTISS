import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../../components/ui/table";
import { ContextXml } from "@/context/ContextXml";
import { useContext, useState } from "react";
import { ConvertToReal } from "@/utils/Convert";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

export const TableXmlList = () => {
	const { arquives, deleteArquive, tranformObjetoToXml } = useContext(ContextXml);
	const [isDisabledBtnRemove, setIsDisabledBtnRemove] = useState(false);

	function handleClickToRemoveXml(idXml: string) {
		setIsDisabledBtnRemove(true);
		deleteArquive(idXml, setIsDisabledBtnRemove);
	}

	function handleClickBaixar(idXml: string) {
		tranformObjetoToXml(idXml);
	}

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Nome do arquivo</TableHead>
					<TableHead className="w-40">Número protocolo</TableHead>
					<TableHead className="w-40">Quantidade guias</TableHead>
					<TableHead className="w-40">Valor</TableHead>
					<TableHead className="w-52">Criado em</TableHead>
					<TableHead className="w-1"></TableHead>
					<TableHead className="w-1"></TableHead>
					<TableHead className="w-1"></TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{arquives?.length ? (
					arquives.map((row) => {
						return (
							<TableRow key={row.ID}>
								<TableCell>{row.details.arquiveName}</TableCell>
								<TableCell>
									{
										row.objectXml["ans:mensagemTISS"][
											"ans:prestadorParaOperadora"
										]["ans:loteGuias"]["ans:numeroLote"]._text
									}
								</TableCell>
								<TableCell>{row.details.guidesQuantity}</TableCell>
								<TableCell>
									{ConvertToReal(row.details.totalValue)}
								</TableCell>
								<TableCell>
									{Intl.DateTimeFormat("pt-BR").format(row.details.createdAt)}
								</TableCell>
								<TableCell>
									<Link to={`/arquive-list/xml?idXml=${row.ID}`}>
										<Button variant={"outline"} className="bg-card">
											Abrir
										</Button>
									</Link>
								</TableCell>
								<TableCell>
									<Button
										variant={"ghost"}
										className="bg-blue-800 hover:bg-blue-900"
										onClick={() => handleClickBaixar(row.ID)}
									>
										Baixar
									</Button>
								</TableCell>
								<TableCell>
									<Dialog>
										<DialogTrigger asChild>
											<Button
												variant={"destructive"}
												disabled={isDisabledBtnRemove}
											>
												Excluir
											</Button>
										</DialogTrigger>
										<DialogContent>
											<DialogHeader>
												<DialogTitle>
													Confirma a exclusão do arquivo?
												</DialogTitle>
											</DialogHeader>
											<DialogDescription className="my-6">
												<p>
													O arquivo {row.details.arquiveName} será excluído
													permanentemente.
												</p>
											</DialogDescription>
											<DialogFooter>
												<DialogClose asChild>
													<Button variant="outline">Cancelar</Button>
												</DialogClose>
												<Button onClick={() => handleClickToRemoveXml(row.ID)}>
													Sim
												</Button>
											</DialogFooter>
										</DialogContent>
									</Dialog>
								</TableCell>
							</TableRow>
						);
					})
				) : (
					<TableRow className="hover:bg-transparent">
						<TableCell colSpan={8} className="text-center h-24 text-xl">
							Não foram encontradas arquivos .xml
						</TableCell>
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
};
