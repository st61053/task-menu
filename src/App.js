import list_bg2 from "./list_bg2.jpg";

import React from "react";
import { Box } from "@mui/material";

function App({children}) {
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
        {children}
      </Box>
    </Box>
  );
}

export default App;
