import React, { lazy } from "react";
import { RouteObject } from "react-router";
const Home = lazy(() => import("@/pages/home"));
const About = lazy(() => import("@/pages/about"));
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
];

export default routes;
