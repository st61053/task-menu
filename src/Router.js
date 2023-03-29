import React from "react";
import Menu from "./Menu";
import Quest from "./Quest";
import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

const ROUTER = [
  {
    path: "/hadrova-panenka",
    element: <Quest questKey={"hadrova-panenka"} />,
    errorElement: <>NE</>,
  },
  {
    path: "/diktator",
    element: <Quest questKey={"diktator"} />,
    errorElement: <>NE</>,
  },
  {
    path: "/panoramix",
    element: <Quest questKey={"panoramix"} />,
    errorElement: <>NE</>,
  },
  {
    path: "/greta-thunbergova",
    element: <Quest questKey={"greta-thunbergova"} />,
    errorElement: <>NE</>,
  },
  {
    path: "/forest-gump",
    element: <Quest questKey={"forest-gump"} />,
    errorElement: <>NE</>,
  },
  {
    path: "/mam-te-rada-jako-sul",
    element: <Quest questKey={"mam-te-rada-jako-sul"} />,
    errorElement: <>NE</>,
  },
  {
    path: "/slavik",
    element: <Quest questKey={"slavik"} />,
    errorElement: <>NE</>,
  },
  {
    path: "/jak-se-ti-zije",
    element: <Quest questKey={"jak-se-ti-zije"} />,
    errorElement: <>NE</>,
  },
  {
    path: "/pasak",
    element: <Quest questKey={"pasak"} />,
    errorElement: <>NE</>,
  },
];

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Menu />} />
        {ROUTER.map((route, id) => (
          <Route
            key={`route_${id}`}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </HashRouter>
  );
};

export default Router;
