import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { ContextXmlProvider } from "./context/ContextXml";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ContextXmlProvider>
        <RouterProvider router={Router}/>
      </ContextXmlProvider>
    </ThemeProvider>
  );
}
