import Main from "../../Layouts/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import About from "../../Pages/Home/About/About";
import Allgifts from "../../Pages/Home/Allgifts/Allgifts";
import ContactForm from "../../Pages/Home/Home/ContactForm/ContactForm";
import Home from "../../Pages/Home/Home/Home";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
     {
       path: "/",
       element: <Home></Home>,
     },
     {
          path: "/contact",
          element: <ContactForm></ContactForm>
     },
     {
          path: "/about",
          element: <About></About>
     },
     {
          path: "/product",
          element: <Allgifts></Allgifts>
     },
]
  },
]);
export default router;
