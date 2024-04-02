import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import LandingPageSignInOne from "pages/LandingPageSignInOne";
import Home from "./pages/LandingPageSignInOne/index.jsx"

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "landingpagesigninone",
      element: <LandingPageSignInOne />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
