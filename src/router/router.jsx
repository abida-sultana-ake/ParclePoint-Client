import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Rootlayout";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/Home/ContuctUs";
import About from "../pages/AboutUs/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
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
]);