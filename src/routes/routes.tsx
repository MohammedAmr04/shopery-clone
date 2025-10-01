import { createBrowserRouter } from "react-router";
import Error404 from "../components/error/Error404";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Error404/>
  },
]);
export default routes;