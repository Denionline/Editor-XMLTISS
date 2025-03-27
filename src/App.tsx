import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { ContextXmlProvider } from "./context/ContextXml";
import { Router } from "./Router";
import { Buffer } from "buffer";

export function App() {
  if (!window.Buffer) {
    window.Buffer = Buffer;
  }
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ContextXmlProvider>
        <RouterProvider router={Router} />
      </ContextXmlProvider>
    </ThemeProvider>
  );
}
