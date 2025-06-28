import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "./ui/sidebar";
import {ChevronUp, Home, List, LogOut, User2} from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {Button} from "./ui/button";
import {Dialog, DialogContent, DialogTitle} from "./ui/dialog";
import {Sign} from "./sign";
import {useState} from "react";

const data2SideItem = [
	{
		title: "Home",
		url: "/",
		icon: Home,
	},
	{
		title: "Lista de arquivos (.xml)",
		url: "/arquive-list",
		icon: List,
	},
];

export function AppSidebar() {
	const [isOpenSign, setIsOpenSign] = useState(false);

	function handleClickButton() {
		setIsOpenSign((prev) => (prev ? false : true));
	}

	return (
		<Sidebar collapsible="icon">
			<SidebarHeader />
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{data2SideItem.map((item) => {
								return (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton asChild>
											<a href={item.url}>
												<item.icon size={16} />
												<span>{item.title}</span>
											</a>
										</SidebarMenuButton>
									</SidebarMenuItem>
								);
							})}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<Dialog open={isOpenSign} onOpenChange={setIsOpenSign}>
					<DialogContent aria-describedby={undefined}>
						<DialogTitle />
						<Sign />
					</DialogContent>
				</Dialog>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton>
							<User2 /> Username
							<ChevronUp className="ml-auto" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						side="top"
						className="w-[--radix-popper-anchor-width]"
					>
						<DropdownMenuItem className="p-0">
							<Button
								variant="ghost"
								className="w-full justify-start"
								onClick={handleClickButton}
							>
								<span>Conta</span>
							</Button>
						</DropdownMenuItem>
						<DropdownMenuItem className="p-0" disabled>
							<Button variant="ghost" className="w-full justify-start">
								Tema
							</Button>
						</DropdownMenuItem>

						<DropdownMenuItem className="p-0" disabled>
							<Button
								variant="ghost"
								className="w-full justify-start text-destructive hover:bg-red-900"
							>
								<LogOut />
								<span>Sair</span>
							</Button>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarFooter>
		</Sidebar>
	);
}
