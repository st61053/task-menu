import list_bg2 from './list_bg2.jpg';
import u1 from './u1.jpg';
import u2 from './u2.jpg';
import u3 from './u3.jpg';
import u4 from './u4.jpg';
import u5 from './u5.jpg';
import u6 from './u6.jpg';
import u7 from './u7.jpg';
import u8 from './u8.jpg';
import u9 from './u9.jpg';
import { Box, Card, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";


const TASK_LIST = [
  {
    img: u1,
    title: "Šaty dělaj člověka",
    pts: 5,
    desc: "Popis místa",
    map: "https://goo.gl/maps/die91ojCGK6bVMoM8"
  },
  {
    img: u2,
    title: "Poklona vládci",
    pts: 10,
    desc: "Popis místa",
    map: "https://goo.gl/maps/die91ojCGK6bVMoM8"
  },
  {
    img: u3,
    title: "Šamanův lektvar",
    pts: 3,
    desc: "Popis místa",
    map: "https://goo.gl/maps/die91ojCGK6bVMoM8"
  },
  {
    img: u4,
    title: "Kvóty EU",
    pts: 7,
    desc: "Popis místa",
    map: "https://goo.gl/maps/die91ojCGK6bVMoM8"
  },
  {
    img: u5,
    title: "Je to les? Není to les?",
    pts: 8,
    desc: "Popis místa",
    map: "https://goo.gl/maps/die91ojCGK6bVMoM8"
  },
  {
    img: u6,
    title: "Zlatý poklad",
    pts: 4,
    desc: "Popis místa",
    map: "https://goo.gl/maps/die91ojCGK6bVMoM8"
  },
  {
    img: u7,
    title: "Zlato v hrdle",
    pts: 2,
    desc: "Popis místa",
    map: "https://goo.gl/maps/die91ojCGK6bVMoM8"
  },
  {
    img: u8,
    title: "Sociální průzkum",
    pts: 1,
    desc: "Popis místa",
    map: "https://goo.gl/maps/die91ojCGK6bVMoM8"
  },
  {
    img: u9,
    title: "Hřídlo rozkoše",
    pts: 5,
    desc: "Popis místa",
    map: "https://goo.gl/maps/die91ojCGK6bVMoM8"
  },
]

function App() {
  return (
    <Box sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img
        src={list_bg2}
        alt='bgImage'
        draggable="false"
        dragstart="false"
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: -1
        }} />

      <Box sx={{ width: "50em", maxWidth: "85%", backgroundColor: "transparent" }}>
        <Box sx={{ display: "flex", justifyContent: "center", paddingBottom: "1em" }}>
          <Typography variant={"h4"} sx={{ fontWeight: "bold", color: "white", textShadow: "1px 1px 2px black", fontFamily: "Comic Sans MS" }}>
            Seznam úkolů
          </Typography>
        </Box>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", height: "70vh", overflowY: "auto", padding: "1em 0 2em 0" }}>
          <Grid container>
            {TASK_LIST.map((task, index) => (
              <Grid item xs={12} key={`${task.title}_${index}`} sx={{ padding: "0 0 1.1em 0" }}>
                <a style={{ textDecoration: "none" }} href={task.map}>
                  <Card sx={{ display: "flex", gap: "1em", padding: "0.5em", alignItems: "center" }}>
                    <Box sx={{ width: "50px", height: "50px", flex: "0.2", }}>
                      <img
                        src={task.img}
                        alt={task.img}
                        draggable="false"
                        dragstart="false"
                        width={"100%"}
                        height={"100%"}
                        style={{
                          objectFit: "contain",
                        }} />
                    </Box>
                    <Box sx={{flex: "0.9"}}>
                      <Typography variant={"subtitle1"} sx={{ fontWeight: "bold", padding: 0 }}>
                        {task.title}
                      </Typography>
                      <Typography variant={"caption"}>
                        {task.desc}
                      </Typography>
                    </Box>
                    <Typography variant={"h6"} sx={{ flex: "0.2", fontWeight: "bold", textAlign: "center" }}>
                      {task.pts}
                    </Typography>
                  </Card>
                </a>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
