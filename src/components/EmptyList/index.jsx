import React from "react";
import { useHistory } from "react-router-dom";

import { Box, Typography, Button } from "@material-ui/core";

function EmptyList({ title, description, Icon }) {
  const history = useHistory();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      mt={20}
      height={200}
    >
      {Icon}

      <Typography variant="h4">{title}</Typography>
      <Box m={5}>
        <Typography align="center">{description}</Typography>
      </Box>
      <Button
        onClick={() => history.push("/")}
        variant="contained"
        color="primary"
      >
        Ver Produtos
      </Button>
    </Box>
  );
}

export default EmptyList;
