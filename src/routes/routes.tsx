import { createBrowserRouter } from "react-router";
import { MainLayout } from "../components";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);
export default routes;
