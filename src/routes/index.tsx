import { createBrowserRouter, RouteObject } from "react-router-dom";
import { lazy } from "react";
import App from "../App";
import Home from "../pages/home";

const Major = lazy(() => import('@/pages/major'))
const About = lazy(() => import("@/pages/about"));
const Course = lazy(() => import("@/pages/course"));
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
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/course",
        element: <Course />,
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

