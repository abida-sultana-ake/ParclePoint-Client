import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Rootlayout";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/Home/ContuctUs";
import About from "../pages/AboutUs/About";
import Login from "../pages/Authentication/Login";
import Error from "../pages/Error/Error";
import AuthLayout from "../layouts/AuthLayout";
import Registration from "../pages/Authentication/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/contact",
        Component: ContactUs,
      },
      {
        path: "/about",
        Component: About,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Registration,
      },
    ],
  },
]);