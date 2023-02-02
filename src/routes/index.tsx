import { createBrowserRouter, redirect, RouteObject } from "react-router-dom";
import { lazy } from "react";
import App from "../App";
import Home from "../pages/home";

const Major = lazy(() => import('@/pages/major'))
const About = lazy(() => import("@/pages/about"));
const routes: RouteObject[] = [
  {
    path: "/",
    // loader: () => redirect('/home'),
    element: <App />,
    children: [
      {
        // path: "/home",
        element: <Home />,
        index: true,
      },
      {
        path: "/major",
        element: <Major />,
        index: true,
      },
      {
        path: "/about",
        element: <About />,
        index: true,
      },
    ],
  },
  // {
  //   path: "/home",
  //   element: <Home />,
  // },
];

const router = createBrowserRouter(
  routes
)

export {router, routes}

