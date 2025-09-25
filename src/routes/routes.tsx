import { createBrowserRouter } from "react-router";
import SignUpForm from "../components/SignUpForm";

const routes = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUpForm/>
  },
]);
export default routes;