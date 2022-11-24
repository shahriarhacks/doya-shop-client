import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Blog from "../pages/others/Blog";
import Catagories from "../pages/shared/Catagories";
import Contact from "../pages/shared/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/categories",
        element: <Catagories />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
