import React from "react";
import { Box, Card, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

// import u1 from "./u1.jpg";
import u2 from "./u2.jpg";
import u3 from "./u3.jpg";
import u4 from "./u4.jpg";
import u5 from "./u5.jpg";
import u6 from "./u6.jpg";
import u7 from "./u7.jpg";
import u8 from "./u8.jpg";
import u9 from "./u9.jpg";
import u10 from "./u10.jpg";
import u11 from "./u11.jpg";

const TASK_LIST = [
  // {
  //   img: u1,
  //   title: "Šaty dělaj člověka",
  //   pts: 5,
  //   lang: "bodů",
  //   desc: "Popis místa",
  //   map: "https://goo.gl/maps/die91ojCGK6bVMoM8",
  // },
  {
    // rdy
    img: u2,
    title: "Poklona vládci",
    pts: 12,
    lang: "bodů",
    desc: "Popis místa",
    map: "https://goo.gl/maps/ZRVHXLxFe9QZH7AS9",
  },
  {
    // rdy
    img: u3,
    title: "Šamanův lektvar",
    pts: 7,
    lang: "bodů",
    desc: "Popis místa",
    map: "https://goo.gl/maps/rMpxc7JMWVQojmMr6",
  },
  {
    // rdy
    img: u4,
    title: "Kvóty EU",
    pts: 8,
    lang: "bodů",
    desc: "Popis místa",
    map: "https://goo.gl/maps/f38z4GwdYNSEbVYV8",
  },
  {
    // rdy
    img: u5,
    title: "Je to les? Není to les?",
    pts: 6,
    lang: "bodů",
    desc: "Popis místa",
    map: "https://goo.gl/maps/VpHuuacbG664GW3P8",
  },
  {
    // rdy
    img: u6,
    title: "Zlatý poklad",
    pts: "?",
    lang: "bodů",
    desc: "Popis místa",
    map: "https://goo.gl/maps/FyLmGMM4ox2UkhKm6",
  },
  {
    // rdy
    img: u7,
    title: "Zlato v hrdle",
    pts: 10,
    lang: "bodů",
    desc: "Popis místa",
    map: "https://goo.gl/maps/fDwVgN1A9HyUE5gA8",
  },
  {
    // rdy
    img: u8,
    title: "Sociální průzkum",
    pts: 8,
    lang: "bodů",
    desc: "Popis místa",
    map: "https://goo.gl/maps/dfh1PbW4i6xCFw1s7",
  },
  {
    // rdy
    img: u9,
    title: "Hřídlo rozkoše",
    pts: 4,
    lang: "body",
    desc: "Popis místa",
    map: "https://goo.gl/maps/hHSjRj9vMrmBqAHZ9",
  },
  {
    // rdy
    img: u10,
    title: "Přes hřebeny vln",
    pts: 5,
    lang: "bodů",
    desc: "Popis místa",
    map: "https://goo.gl/maps/Z7cnvwkRFosCTNQg6",
  },
  {
    // rdy
    img: u11,
    title: "Jako ryba ve vodě",
    pts: 15,
    lang: "bodů",
    desc: "Popis místa",
    map: "https://goo.gl/maps/jocPAUj6GC6Vq1ZU8",
  },
];

const Menu = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", paddingBottom: "1em" }}
      >
        <Typography
          variant={"h4"}
          sx={{
            fontWeight: "bold",
            color: "white",
            textShadow: "1px 1px 2px black",
            fontFamily: "AztecsFont",
            fontKerning: "none",
          }}
        >
          Seznam ukolu
        </Typography>
      </Box>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "70vh",
          overflowY: "auto",
          padding: "1em 0 2em 0",
        }}
      >
        <Grid container>
          {TASK_LIST.map((task, index) => (
            <Grid
              item
              xs={12}
              key={`${task.title}_${index}`}
              sx={{ padding: "0 0 1.1em 0" }}
            >
              <a style={{ textDecoration: "none" }} href={task.map}>
                <Card
                  sx={{
                    display: "flex",
                    gap: "1em",
                    padding: "0.5em",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ width: "50px", height: "50px", flex: "0.2" }}>
                    <img
                      src={task.img}
                      alt={task.img}
                      draggable="false"
                      dragstart="false"
                      width={"100%"}
                      height={"100%"}
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Box sx={{ flex: "0.9" }}>
                    <Typography
                      variant={"subtitle1"}
                      sx={{ fontWeight: "bold", padding: 0 }}
                    >
                      {task.title}
                    </Typography>
                    <Typography variant={"caption"}>{task.desc}</Typography>
                  </Box>
                  <Box
                    sx={{
                      flex: "0.3",
                      display: "flex",
                      gap: "0.3em",
                      alignItems: "baseline",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant={"subtitle1"}
                      sx={{ fontWeight: "bold" }}
                    >
                      {task.pts}
                    </Typography>
                    <Typography variant={"caption"} sx={{ fontWeight: "bold" }}>
                      {task.lang}
                    </Typography>
                  </Box>
                </Card>
              </a>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Menu;
