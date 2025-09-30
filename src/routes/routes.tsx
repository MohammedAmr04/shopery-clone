import { createBrowserRouter } from "react-router";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Contact from "../pages/Contact";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default routes;
