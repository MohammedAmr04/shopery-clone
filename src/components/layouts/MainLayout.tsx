import { Outlet } from "react-router";
import { HeaderMainLayout } from "../shared";

const MainLayout = () => {
  return (
    <>
      <HeaderMainLayout />
      <Outlet />
    </>
  );
};

export default MainLayout;
