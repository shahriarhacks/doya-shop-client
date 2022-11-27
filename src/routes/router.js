import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Root from "../layout/Root";
import About from "../pages/about/About";
import Advertise from "../pages/Advertise/Advertise";
import AddCategory from "../pages/dashboard/Admin/AddCategory";
import AllBuyers from "../pages/dashboard/Admin/AllBuyers";
import AllSellers from "../pages/dashboard/Admin/AllSellers";
import AllUsers from "../pages/dashboard/Admin/AllUsers";
import ManageCategory from "../pages/dashboard/Admin/ManageCategory";
import PurchasedProduct from "../pages/dashboard/Buyers/PurchasedProduct";
import Wishlist from "../pages/dashboard/Buyers/Wishlist";
import AddPhone from "../pages/dashboard/Seller/AddPhone";
import AllBuyer from "../pages/dashboard/Seller/AllBuyer";
import ManagePhone from "../pages/dashboard/Seller/ManagePhone";
import Home from "../pages/home/Home";
import Login from "../pages/login-register/Login";
import Register from "../pages/login-register/Register";
import Blog from "../pages/others/Blog";
import Catagories from "../pages/shared/Catagories";
import Contact from "../pages/shared/Contact";
import ErrorRoute from "../pages/shared/ErrorRoute";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorRoute />,
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
        path: "/ads",
        element: <Advertise />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorRoute />,
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/history",
        element: <PurchasedProduct />,
      },
      {
        path: "/dashboard/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/dashboard/add-phones",
        element: (
          <SellerRoute>
            <AddPhone />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/manage-phones",
        element: (
          <SellerRoute>
            <ManagePhone />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/ur-buyers",
        element: (
          <SellerRoute>
            <AllBuyer />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/add-category",
        element: (
          <AdminRoute>
            <AddCategory />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-category",
        element: (
          <AdminRoute>
            <ManageCategory />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-sellers",
        element: (
          <AdminRoute>
            <AllSellers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-buyers",
        element: (
          <AdminRoute>
            <AllBuyers />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
