import React from "react";
import { CircularProgress, Box } from "@material-ui/core";

export default function LoadingScreen() {
  return (
    <Box
      height="100vh"
      //   border={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  );
}
