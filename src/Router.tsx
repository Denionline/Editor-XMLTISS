import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { DefaultLayout } from "./layouts/default-layout";
import { ArquiveList } from "./pages/arquive-list";
import { ArquiveXml } from "./pages/arquive-xml/page";
import { GuideDetails } from "./pages/guide-details/page";

export const Router = createBrowserRouter([
  {
    path: "",
    element: <DefaultLayout />,
    children: [
      { path: "home", element: <Home /> },
      {
        path: "arquive-list",
        element: <ArquiveList />,
      },
      { path: "arquive-list/xml", element: <ArquiveXml /> },
      { path: "arquive-list/xml/guide", element: <GuideDetails /> },
    ],
  },
]);
