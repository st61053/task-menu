import React from "react";
import { Box, Card, Grid, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import u1 from "./u1.jpg";
import u2 from "./u2.jpg";
import u3 from "./u3.jpg";
import u4 from "./u4.jpg";
import u5 from "./u5.jpg";
import u6 from "./u6.jpg";
import u7 from "./u7.jpg";
import u8 from "./u8.jpg";
import u9 from "./u9.jpg";

const Quest = ({ questKey }) => {
  const QUEST_LIST = [
    {
      key: "hadrova-panenka",
      img: u1,
      title: "Šaty dělaj člověka",
      pts: 5,
      lang: "bodů",
      quest:
        "Co to máte na sobě? Takhle nikdo nepozná, že jste domorodci! Rychle běžte a oblečte se do barvy svého národa, nezapomeňte na válečné pomalování. Řiďte se pravidlem píseckých prostitutek - čím více je vidět, tím lépe. Bohové milují, když se nebojíte svou příslušnost vyjádřit co možná nejokatěji.",
    },
    {
      key: "diktator",
      img: u2,
      title: "Poklona vládci",
      pts: 10,
      lang: "bodů",
      quest:
        "Váš vládce, váš pán, vaše světlo a naděje. On je tvůj bůh a ty jsi jeho poddaný. Vymyslete a zahrajte rituální obřad pro svého vládce. Aby óóó vašeho vládce uctívali i místní obyvatelé, pokuste se je konvertovat a zapojte do obřadu alespoň další  3 náhodné místní obyvatele. Za každou duší místního navíc naroste bohům zpět jeden vypadlý vlas, což někteří z nich náležitě ocení. ",
    },
    {
      key: "panoramix",
      img: u3,
      title: "Šamanův lektvar",
      pts: 3,
      lang: "body",
      quest:
        "Šaman ovládá pradávné a magické síly, jež se vymykají hranicím lidského chápání. Váš šaman nechť navštíví místní stravovací zařízení, ve které pořídí minimálně 3 tekuté ingredience, různé barvy a chuti, avšak čím více ingrediencí, tím více chuti a pradávné síly, již bohové jistě ocení. Z nich namíchá magický povzbuzující lektvar a dá okusit každému ze svého kmene, aby ho tak obdaroval jeho nadpozemskými schopnostmi.",
    },
    {
      key: "greta-thunbergova",
      img: u4,
      title: "Kvóty EU",
      pts: 7,
      lang: "bodů",
      quest:
        "Jedna z věcí, které se na tomto skoro až nepřátelském území nikdo nevyhne a je jedno jestli jsi pes, automobil, malý podnikatel, jenž je páteří společnosti a nebo přivandrovalec exotického původu. Aby nedošlo k vaší deportaci, musíte ukázat, že váš pobyt na území EU nebude na škodu. Zaznamenejte jak provádíte dobrý skutek ku prospěchu někoho z tamních obyvatel. Čím bude dobrý skutek lepší, tím více se bohům vrátí síly a větší chuť a připravenost na milostné hrátky za závěsy ložnice budou míti.",
    },
    {
      key: "forest-gump",
      img: u5,
      title: "Je to les? Není to les?",
      pts: 8,
      lang: "bodů",
      quest:
        " Bylo by dobré zjistit, jestli se v okolí nenachází nějaký hájek, který by se dal přejmenovat na hájek bohů. Spočítej, kolik stromů se nachází v místě nazývaném Palackého sady a zamysli se nad tím, jestli by se dal označit za les, či ne, popřípadě jak jinak by se takový stromový útvar dal označit. Strom spočítáš tak, že ho celý kolem dokola obejmeš, klidně i ve více lidech, když to bude třeba. ",
    },
    {
      key: "mam-te-rada-jako-sul",
      img: u6,
      title: "Zlatý poklad",
      pts: 4,
      lang: "body",
      quest:
        "Hej vy, pssst! Teďka pěkně potichu a nikomu ani muk. Někde ve městě se nachází zlatý poklad. Nikdo ho však již dlouhá léta neviděl. Vy však vypadáte, že byste mohli mít na zlato čuch. A taky byste ho mohli potřebovat podle toho jak směšně vypadáte. Zjistěte jakou podobu bájný zlatý poklad má a kde se to nachází.",
    },
    {
      key: "slavik",
      img: u7,
      title: "Zlato v hrdle",
      pts: 2,
      lang: "body",
      quest:
        "Umění je beze sporu důležitá část každé kultury. Krásně zapěná óda pohladí leckterého boha na duši. Slož píseň oslavující krásy zdejšího kraje a za doprovodu vlastně vyrobených hudebních nástrojů ji předveď na veřejném prostranství. Bez potlesku se nevracej. Čím větší potlesk tím větší sláva óóó bohů, která povede k jejich štědrosti.",
    },
    {
      key: "jak-se-ti-zije",
      img: u8,
      title: "Sociální průzkum",
      pts: 1,
      lang: "bod",
      quest:
        "Je důležité místním obyvatelům Písku porozumět a nahlédnout do jejich prostých srdcí. Natočte sérii krátkých rozhovorů s místními obyvateli, nejlépe z různých věkových skupin a položte jim pár otázek směřující na jejich život v Písku, spokojenost s ním a zda mají nějaké ponětí o existenci vaší dávné civilizace.",
    },
    {
      key: "pasak",
      img: u9,
      title: "Hřídlo rozkoše",
      pts: 5,
      lang: "bodů",
      quest:
        "I vaši ztracení vládci mají své touhy a je možné, že v případě nalezení budou zvědaví na nějaký tip ohledně místního sortimentu služeb choulostivého charakteru. Bude jim stačit znát pouze adresu, telefonní kontakt, otevírací dobu a ceník nabízených služeb.",
    },
  ];

  const FAKE_QUEST = {
    img: u9,
    title: "Akorád že vůbec",
    pts: 0,
    lang: "bodů",
    quest:
      "Ty sis opravdu myslel, že nás vyzraješ? Za tohle na tebe budou Bohové naštvaní!",
  };

  const QUEST =
    QUEST_LIST.find((quest) => quest.key === questKey) || FAKE_QUEST;

  return (
    <Card
      sx={{
        overflowY: "auto",
        padding: "2em",
      }}
    >
      <Grid container spacing={"2em"}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            height: "10vh",
            alignItems: "center",
            gap: "1em",
          }}
        >
          <Box sx={{ width: "100px", height: "100px", flex: "0.2" }}>
            <img
              src={QUEST.img}
              alt={QUEST.img}
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
              {QUEST.title}
            </Typography>
            <Box
              sx={{
                flex: "0.9",
                display: "flex",
                gap: "0.3em",
                alignItems: "baseline",
              }}
            >
              <Typography variant={"subtitle2"} sx={{ fontWeight: "bold" }}>
                {QUEST.pts}
              </Typography>
              <Typography variant={"caption"}>{QUEST.lang}</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sx={{height: "55vh"}}>
          <Divider />
          <Typography sx={{padding: "1em 0", textAlign: "justify"}} variant={"body1"}>{QUEST.quest}</Typography>
        </Grid>
        <Grid item xs={12} sx={{display: "flex", justifyContent: "flex-end"}}>
          <Divider />
          <Button sx={{display: "flex", alignItems: "center"}} variant="outlined" color="inherit" startIcon={<ArrowBackIosNewIcon />}>
              Menu
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Quest;
