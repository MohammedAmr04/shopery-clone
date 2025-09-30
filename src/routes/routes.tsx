import { createBrowserRouter } from "react-router";
import Faq from "../components/faqs/Faq";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Faq/>
  },
]);
export default routes;