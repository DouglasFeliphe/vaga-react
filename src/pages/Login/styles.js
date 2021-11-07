import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    // background: theme.palette.primary.main,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    border: 0,
    borderRadius: 3,
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  player: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  title: {
    marginBottom: 44,
  },
  textField: {
    overflow: "hidden",
    // marginTop: 22,
    marginBottom: 11,
    // transition: theme.transitions.create(["border-color", "box-shadow"]),
    // "&:hover": {
    //   color: theme.palette.success.main,
    // },
    // "&$focused": {
    //   borderColor: theme.palette.secondary.main,
    // },
  },
  button: {
    marginTop: 44,
  },
  section: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 0,
    },
  },
}));
