import { Outlet } from "react-router-dom";
import { SidebarLayout } from "./sidebar-layout";

export const DefaultLayout = () => {
  return (
    <div className="bg-background w-full flex justify-center">
      <SidebarLayout children={<Outlet />} />	
    </div>
  );
};
