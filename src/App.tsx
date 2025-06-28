import {Analytics} from "@vercel/analytics/react";
import {RouterProvider} from "react-router-dom";
import {ThemeProvider} from "./components/theme-provider";
import {ContextXmlProvider} from "./context/ContextXml";
import {Router} from "./Router";
import {Buffer} from "buffer";

export function App() {
	if (!window.Buffer) {
		window.Buffer = Buffer;
	}
	return (
		<>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<ContextXmlProvider>
					<RouterProvider router={Router} />
				</ContextXmlProvider>
			</ThemeProvider>
			<Analytics />
		</>
	);
}

// import axios from "axios";
// import {Button} from "./components/ui/button";
// const callApi = async () => {
// try {
// 	await axios
// 		.get("/api/server", {
// 			params: {user: "Daniel"},
// 		})
// 		.then((res) => console.log(res));
// } catch (err) {
// 	console.error(err);
// }
// try {
// 	await axios({
// 		method: "post",
// 		url: "/api/server",
// 		data: {
// 			name: "Daniel",
// 			email: "daniel@email.com",
// 		},
// 	}).then((res) => console.log(res));
// } catch (error) {
// 	console.error(error);
// }
// };
