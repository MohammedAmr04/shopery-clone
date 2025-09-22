import { createBrowserRouter } from "react-router";
import SignUp from "../components/SignUp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <SignUp/>
  },
]);
export default routes;