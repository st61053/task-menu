import list_bg2 from "./list_bg2.jpg";

import React from "react";
import { Box } from "@mui/material";
import Menu from "./Menu";
import Quest from "./Quest";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    errorElement: <></>,
  },
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

]);

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={list_bg2}
        alt="bgImage"
        draggable="false"
        dragstart="false"
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: -1,
        }}
      />

      <Box
        sx={{ width: "50em", maxWidth: "85%", backgroundColor: "transparent" }}
      >
          <RouterProvider router={ROUTER} />
      </Box>
    </Box>
  );
}

export default App;
