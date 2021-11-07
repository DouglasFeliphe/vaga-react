import React from "react";
import { useHistory } from "react-router-dom";

import { Box, Typography, Button } from "@material-ui/core";
import RemoveShoppingCart from "@material-ui/icons/RemoveShoppingCart";

function Empty() {
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
      <RemoveShoppingCart />
      <Typography variant="h4">O carrinho está vazio.</Typography>
      <Box m={5}>
        <Typography align="center">
          Voce não adicionou nenhum produto no carrinho. Clique no botão abaixo
          para ver nossos produtos.
        </Typography>
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

export default Empty;
