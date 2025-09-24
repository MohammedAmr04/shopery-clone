import { createBrowserRouter } from "react-router";
import SignUp from "../components/SignUp";
import Login from "../components/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/Signup",
    element: <SignUp/>
  }
]);
export default routes;