import {Link, useSearchParams} from "react-router-dom";
import {DataTable} from "./components/data-table";
import {useContext, useEffect} from "react";
import {ContextXml} from "@/context/ContextXml";
import {columns} from "./components/columns";
import {useForm} from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Skeleton} from "@/components/ui/skeleton";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
// import {isValid} from "date-fns";

const formSchema = z.object({
	nomeDoArquivo: z.string(),
	codigoDoPrestador: z.string(),
	numeroDoProtocolo: z.string(),
	registroANS: z.string(),
	versaoXML: z.string(),
	valorXML: z.string(),
});

export type FormXmlType = z.infer<typeof formSchema>;

export const ArquiveXml = () => {
	const {arquives, updateXmlDetails} = useContext(ContextXml);
	const [searchParams] = useSearchParams();
	const idXml = searchParams.get("idXml");

	const form = useForm<FormXmlType>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			nomeDoArquivo: "",
			codigoDoPrestador: "",
			numeroDoProtocolo: "",
			registroANS: "",
			versaoXML: "",
			valorXML: "",
		},
	});

	const {control, reset, formState, handleSubmit} = form;

	const arquiveXml =
		arquives && arquives.find((arquive) => arquive.ID === idXml);

	function setDefaultValuesOnForm() {
		if (arquiveXml) {
			reset({
				nomeDoArquivo: arquiveXml?.details.arquiveName || "",
				codigoDoPrestador:
					arquiveXml?.objectXml["ans:mensagemTISS"]["ans:cabecalho"][
						"ans:origem"
					]["ans:identificacaoPrestador"]["ans:codigoPrestadorNaOperadora"]
						._text || "",
				numeroDoProtocolo:
					arquiveXml?.objectXml["ans:mensagemTISS"][
						"ans:prestadorParaOperadora"
					]["ans:loteGuias"]["ans:numeroLote"]._text || "",
				registroANS:
					arquiveXml?.objectXml["ans:mensagemTISS"]["ans:cabecalho"][
						"ans:destino"
					]["ans:registroANS"]._text || "",
				versaoXML:
					arquiveXml?.objectXml["ans:mensagemTISS"]["ans:cabecalho"][
						"ans:Padrao"
					]?._text ||
					arquiveXml?.objectXml["ans:mensagemTISS"]["ans:cabecalho"][
						"ans:versaoPadrao"
					]?._text ||
					"",
				valorXML: arquiveXml?.details.totalValue,
			});
		}
	}

	function handleClickCancel() {
		setDefaultValuesOnForm();
	}

	useEffect(() => {
		setDefaultValuesOnForm();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [arquiveXml, arquives]);

	const xmlGuides =
		arquiveXml?.objectXml?.["ans:mensagemTISS"]?.[
			"ans:prestadorParaOperadora"
		]?.["ans:loteGuias"]?.["ans:guiasTISS"]?.["ans:guiaSP-SADT"];

	const guidesToArray = Array.isArray(xmlGuides) ? xmlGuides : [xmlGuides];

	const guidesToTable = guidesToArray.map((guide) => {
		return {
			carteirinha:
				guide?.["ans:dadosBeneficiario"]?.["ans:numeroCarteira"]?._text || "",
			guiaDoPrestador:
				guide?.["ans:cabecalhoGuia"]?.["ans:numeroGuiaPrestador"]?._text || "",
			guiaDaOperadora:
				guide?.["ans:dadosAutorizacao"]?.["ans:numeroGuiaOperadora"]?._text ||
				"",
			senha: guide?.["ans:dadosAutorizacao"]?.["ans:senha"]?._text || "",
			dataDaAutorizacao: guide?.["ans:dadosAutorizacao"]?.[
				"ans:dataAutorizacao"
			]?._text
				? Intl.DateTimeFormat("pt-BR").format(
						new Date(
							guide["ans:dadosAutorizacao"][
								"ans:dataAutorizacao"
							]._text.toString()
						)
				  )
				: "",
			dataDaValidadeDaSenha: guide?.["ans:dadosAutorizacao"]?.[
				"ans:dataValidadeSenha"
			]?._text
				? new Date(
						guide?.["ans:dadosAutorizacao"]?.[
							"ans:dataValidadeSenha"
						]?._text?.toString()
				  ).toLocaleDateString("pt-BR")
				: "",
		};
	});

	function handleClickSubmit(data: any) {
		if (idXml) {
			updateXmlDetails(idXml, data);
			reset();
		}
	}

	return (
		<>
			<Button asChild variant="link">
				<Link to="/arquive-list">Voltar</Link>
			</Button>
			<div className="w-full px-10 mt-4">
				<Form {...form}>
					<form onSubmit={handleSubmit(handleClickSubmit)}>
						<button
							type="submit"
							style={{display: "none"}}
							aria-hidden="true"
						/>
						<FormField
							control={control}
							name="nomeDoArquivo"
							render={({field}) => (
								<FormItem>
									<FormLabel className="font-semibold">
										Nome do arquivo
									</FormLabel>
									<FormControl>
										{field ? (
											<Input {...field} className="text-3xl py-6" />
										) : (
											<Skeleton />
										)}
									</FormControl>
								</FormItem>
							)}
						/>
						<div className="grid grid-cols-3 gap-2 my-4">
							<FormField
								control={control}
								name="codigoDoPrestador"
								render={({field}) => (
									<FormItem>
										<FormLabel className="font-semibold">
											Código do Prestador
										</FormLabel>
										<FormControl>
											{field ? <Input {...field} /> : <Skeleton />}
										</FormControl>
									</FormItem>
								)}
							/>

							<FormField
								control={control}
								name="numeroDoProtocolo"
								render={({field}) => (
									<FormItem>
										<FormLabel className="font-semibold">
											Número do Protocolo
										</FormLabel>
										<FormControl>
											{field ? <Input {...field} /> : <Skeleton />}
										</FormControl>
									</FormItem>
								)}
							/>

							<FormField
								control={control}
								name="registroANS"
								render={({field}) => (
									<FormItem>
										<FormLabel className="font-semibold">
											Registro ANS
										</FormLabel>
										<FormControl>
											{field ? <Input {...field} /> : <Skeleton />}
										</FormControl>
									</FormItem>
								)}
							/>
						</div>

						<div className="grid grid-cols-2 gap-2">
							<FormField
								control={control}
								name="versaoXML"
								render={({field}) => (
									<FormItem>
										<FormLabel className="font-semibold">
											Versão do arquivo XML
										</FormLabel>
										<FormControl>
											{field ? <Input {...field} disabled /> : <Skeleton />}
										</FormControl>
									</FormItem>
								)}
							/>
							<FormField
								control={control}
								name="valorXML"
								render={({field}) => (
									<FormItem>
										<FormLabel className="font-semibold">
											Valor total do XML
										</FormLabel>
										<FormControl>
											{field ? <Input {...field} disabled /> : <Skeleton />}
										</FormControl>
									</FormItem>
								)}
							/>
						</div>
						{formState.isDirty && (
							<div className="w-full flex justify-end items-center gap-4 mt-6">
								<Button variant="outline" onClick={handleClickCancel}>
									Cancelar
								</Button>
								<Button type="submit">Salvar</Button>
							</div>
						)}
					</form>
				</Form>
				<h2 className="text-2xl mt-4">Guias</h2>
				<DataTable columns={columns} data={guidesToTable} />
			</div>
		</>
	);
};
