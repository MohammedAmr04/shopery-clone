import { createBrowserRouter } from "react-router";
import { MainLayout } from "../components";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Contact from "../pages/Contact";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <div>Shop Page</div> },
      { path: "pages", element: <div>Pages Page</div> },
      { path: "blog", element: <div>Blog Page</div> },
      { path: "about-us", element: <div>About Us Page</div> },
      { path: "login", element: <LoginPage /> },
      { path: "sign-up", element: <SignUpPage /> },
    ],
  },
]);

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
