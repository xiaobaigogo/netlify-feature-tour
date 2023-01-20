import { createBrowserRouter, redirect, RouteObject } from "react-router-dom";
import { lazy } from "react";
import App from "../App";
import Home from "../components/home";

// const Home = lazy(() => import('../components/home'))
const routes:RouteObject[] = [
  {
    path: "/",
    // loader: () => redirect('/home'),
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
        index: true,
      },
      {
        path: "/major",
        element: <Home />,
        index: true,
      },
      {
        path: "/about",
        element: <Home />,
        index: true,
      },
    ],
  },
  // {
  //   path: "/home",
  //   element: <Home />,
  // },
]

const router = createBrowserRouter(
  routes
)

export {router, routes}

