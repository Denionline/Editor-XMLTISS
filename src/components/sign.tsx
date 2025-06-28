import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

export const Sign = () => {
	return (
		<Tabs defaultValue="sign-in">
			<TabsList>
				<TabsTrigger value="sign-in">Entrar</TabsTrigger>
				<TabsTrigger value="sign-up">Cadastrar</TabsTrigger>
			</TabsList>
			<TabsContent value="sign-in">
				<Card className="border-0">
					<CardHeader>
						<CardTitle className="text-2xl">Entrar</CardTitle>
					</CardHeader>
					<CardContent className="grid gap-6">
						<div className="grid gap-3">
							<Label>E-mail</Label>
							<Input type="email" placeholder="exemplo@email.com" />
						</div>
						<div className="grid gap-3">
							<Label>Senha</Label>
							<Input type="password" />
						</div>
					</CardContent>
					<CardFooter>
						<Button>Save changes</Button>
					</CardFooter>
				</Card>
			</TabsContent>
			<TabsContent value="sign-up">
				<Card className="border-0">
					<CardHeader>
						<CardTitle className="text-2xl">Cadastrar</CardTitle>
					</CardHeader>
					<CardContent className="grid gap-6">
						<div className="grid gap-3">
							<Label>Nome</Label>
							<Input type="text" placeholder="Fulano da Silva"/>
						</div>
						<div className="grid gap-3">
							<Label>E-mail</Label>
							<Input type="email" placeholder="exemplo@email.com" />
						</div>
						<div className="grid gap-3">
							<Label>Defina uma senha</Label>
							<Input type="password" />
						</div>
						<div className="grid gap-3">
							<Label>Digite novamente a senha</Label>
							<Input type="password" />
						</div>
					</CardContent>
					<CardFooter>
						<Button>Cadastrar</Button>
					</CardFooter>
				</Card>
			</TabsContent>
		</Tabs>
	);
};
