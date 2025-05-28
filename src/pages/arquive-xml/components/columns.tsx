import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {Dialog, DialogTrigger} from "@radix-ui/react-dialog";
import {ColumnDef} from "@tanstack/react-table";
import {GuideDetails} from "./guide-details/page";

export interface GuiaSPSADT_table {
	carteirinha: string;
	guiaDoPrestador: string;
	guiaDaOperadora: string;
	senha: string;
	dataDaAutorizacao: string;
	dataDaValidadeDaSenha: string;
}

export const columns: ColumnDef<{
	carteirinha: string | {_text: string | undefined};
	guiaDoPrestador: string | {_text: string | undefined};
	guiaDaOperadora: string | {_text: string | undefined};
	senha: string | {_text: string | undefined};
	dataDaAutorizacao: string | {_text: string | undefined};
	dataDaValidadeDaSenha: string | { _text: string | undefined };
}>[] = [
	{
		id: "select",
		header: ({table}) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({row}) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "carteirinha",
		header: "Carteirinha",
	},
	{
		accessorKey: "guiaDoPrestador",
		header: "Guia do prestador",
	},
	{
		accessorKey: "guiaDaOperadora",
		header: "Guia da operadora",
	},
	{
		accessorKey: "senha",
		header: "Senha",
	},
	{
		accessorKey: "dataDaAutorizacao",
		header: "Data da autorização",
	},
	{
	  accessorKey: "dataDaValidadeDaSenha",
	  header: "Data da validade da senha",
	},
	{
		id: "actions",
		cell: ({row}) => {
			return (
				<div className="flex justify-end">
					<Dialog>
						<DialogTrigger asChild>
							<Button variant={"outline"} className="bg-card">
								Abrir
							</Button>
						</DialogTrigger>
						<GuideDetails idxGuide={row.id} />
					</Dialog>
				</div>
			);
		},
	},
];
