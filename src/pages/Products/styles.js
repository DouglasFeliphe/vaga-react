import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  section: {
    [theme.breakpoints.down("lg")]: {
      // width: "auto",
      // display: "flex",
      // flexDirection: "column",
      // justifyContent: "center",
      // alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  switch: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
