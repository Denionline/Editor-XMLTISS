import { Button } from "./ui/button";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "./ui/dialog";

interface CheckNewFieldProps {
	title: string;
	description?: string;
	sendResponse: (response: boolean) => void;
}

export const CheckNewField = ({title, sendResponse}: CheckNewFieldProps) => {
	return (
		<Dialog>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
				</DialogHeader>
				<div>
					<Button onClick={() => sendResponse(true)}>Sim</Button>
					<Button onClick={() => sendResponse(false)}>Não</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
};
