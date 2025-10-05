import { createBrowserRouter } from "react-router";
import Error404 from "../components/error/Error404";
import { MainLayout } from "../components";
import HomePage from "../pages/HomePage";
import SignUp from "../components/auth/SignUpForm";
import Login from "../components/auth/LoginForm";
import Contact from "../pages/ContactPage";


const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error404/>,
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <div>Shop Page</div> },
      { path: "pages", element: <div>Pages Page</div> },
      { path: "blog", element: <div>Blog Page</div> },
      { path: "about-us", element: <div>About Us Page</div> },
      { path: "login", element: <Login /> },
      { path: "sign-up", element: <SignUp /> },
      {path:"contact", element:<Contact/>}
    ],
  },

]);

export default routes;
