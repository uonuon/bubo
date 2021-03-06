import React from "react";
import { Header } from "./components/Header";
import { Cards } from "./components/Cards";
import SmoothScroll from "smooth-scroll";
import "./App.css";

import { Container, Typography, useMediaQuery } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { TEXT_BROWN } from "./constants/colors";
import clsx from "clsx";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";


const App = () => {
  const classes = useStyles();
  const isSmScreenAndSmaller = useMediaQuery(theme.breakpoints.down("sm"));
  const isXsScreenAndSmaller = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div
        className={
          isXsScreenAndSmaller
            ? clsx(classes.bananasBackground, "xs-bananas-background")
            : isSmScreenAndSmaller
            ? clsx(classes.bananasBackground, "small-bananas-background")
            : classes.bananasBackground
        }
      >
        <Container
          p={2}
          maxWidth="sm"
          component="main"
          className={clsx(classes.heroContent, "container")}
        >
          <Typography
            component="h1"
            variant="h4"
            align="center"
            className={classes.heroTitle}
            gutterBottom
          >
          Help Save Bubo City
          </Typography>
          <Typography
            variant="h6"
            align="center"
            className={classes.heroContent}
            component="p"
            gutterBottom
          >
          Do you have what it takes to ace the ghastly missions that awaits you? In Bubo city, the first craftable NFTs game on stacks, you will claw your way through the unknown, fight frightful enemies, and save the city with the help of CUTE Bubo citizens.
          </Typography>
          <Typography
            variant="h6"
            align="center"
            className={classes.heroContent}
            component="p"
          >
          Your heroic journey starts now!
          </Typography>
        </Container>

        <div className={classes.cardsContainer}>
          <Cards />
        </div>
      </div>
      <Roadmap />
      <Footer />
    </ThemeProvider>
  );
};

export default App;



export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "#FEF6D8",
      minHeight: "100vh",
      position: "relative",
      paddingBottom: 247,
    },
  },
  bananasBackground: {
    "&::before": {
      content: "' '",
      position: "fixed",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      willChange: "transform",
      backgroundImage: "url('bananas.svg')",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPositionY: "25%",
      zIndex: "-1",
    },
    "&.small-bananas-background": {
      "&::before": {
        backgroundImage: "url('bananas-muted.svg')",
        backgroundSize: "cover",
      },
    },
    "&.xs-bananas-background": {
      "&::before": {
        backgroundImage: "url('bananas-muted.svg')",
        backgroundSize: "contain",
      },
    },
  },
  heroTitle: {
    color: TEXT_BROWN,
    flexGrow: 1,
    fontWeight: "600",
    // marginTop: 100,
    marginTop: 0,
  },
  heroContent: {
    color: TEXT_BROWN,
    fontFamily: "Open Sans",
    marginTop: theme.spacing(2.5),
    "&.container": {
      marginTop: 0,
      paddingTop: theme.spacing(11),
    },
  },
  cardsContainer: {
    maxWidth: 1072,
    // maxWidth: 1040,
    width: "100%",
    margin: "0 auto",
    marginTop: 120,
    paddingBottom: 50,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "Open Sans", "serif"].join(","),
  },
});