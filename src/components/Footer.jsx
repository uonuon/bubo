import React from "react";
import {
  Box,
  Button,
  Container,
  createTheme,
  makeStyles,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { BUTTON_YELLOW, TWITTER_BLUE } from "../constants/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: TWITTER_BLUE,
    },
    secondary: {
      main: BUTTON_YELLOW,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  discordLink: {
    width: 116,
  },
  footer: {
    backgroundColor: "#000",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerContent: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(12),
  },
  footerText: {
    color: "#fff",
    textAlign: "center",
    marginTop: theme.spacing(3),
    fontFamily: "Open Sans",
  },
  link: {
    textTransform: "none",
    fontFamily: "Open Sans",
    fontWeight: "600",
    fontSize: 16,
    boxShadow: "none",
    borderRadius: 8,
    height: 38,
    margin: "0 8px",
  },
  twitterLogo: {
    marginRight: 8,
  },
  twitterLink: {
    width: 164,
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <footer className={classes.footer}>
        <Container p={2} maxWidth="sm">
          <Box className={classes.footerContent}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box>
                <Button
                  href="https://discord.gg/TscZwJ7jbX"
                  color="secondary"
                  variant="contained"
                  className={[classes.link, classes.discordLink].join(" ")}
                >
                  Join us
                </Button>
              </Box>
              <Box>
                <Button
                  href="https://twitter.com/bubo.gg"
                  color="primary"
                  variant="contained"
                  className={[classes.link, classes.twitterLink].join(" ")}
                >
                  <img
                    alt="Twitter logo"
                    src="/twitter.svg"
                    className={classes.twitterLogo}
                  />
                  @bubo.gg
                </Button>
              </Box>
            </Box>
            <Box>
              <Typography variant="body2" className={classes.footerText}>
                bubo.gg is a community-run initiative, and is not directly
                affiliated nor under the management of Solana bubo Business
              </Typography>
            </Box>
          </Box>
        </Container>
      </footer>
    </ThemeProvider>
  );
}

// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     '@global': {
//       ul: {
//         margin: 0,
//         padding: 0,
//         listStyle: 'none',
//       },
//     },
//     appBar: {
//       borderBottom: `1px solid ${theme.palette.divider}`,
// 			marginBottom: '100px',
//     },
//     toolbar: {
//     	flexWrap: 'wrap',
//     },
//     toolbarTitle: {
// 			padding: `5px`,
//       flexGrow: 1,
//     },
// 		link: {
// 			margin: theme.spacing(1, 1.5),
// 		},
// }));

// export function Footer() {
//     const classes = useStyles();

//     return (
//       <React.Fragment>
//         {/* Footer */}
//         <Container maxWidth="md" component="footer" className={classes.footer}>
//             <Grid container spacing={4} justifyContent="space-evenly">
//             {footers.map((footer) => (
//                 <Grid item xs={6} sm={3} key={footer.title}>
//                 <Typography variant="h6" color="textPrimary" gutterBottom>
//                     {footer.title}
//                 </Typography>
//                 <ul>
//                     {footer.description.map((item) => (
//                     <li key={item}>
//                         <Link href="#" variant="subtitle1" color="textSecondary">
//                         {item}
//                         </Link>
//                     </li>
//                     ))}
//                 </ul>
//                 </Grid>
//             ))}
//             </Grid>
//             <Box mt={5}>
//             <Copyright />
//             </Box>
//         </Container>
//         {/* End footer */}
//       </React.Fragment>
//     );
//   }
