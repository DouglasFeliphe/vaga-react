import React from "react";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import ReactBodymovin from "react-bodymovin";
import animation from "./1818-success-animation.json";

export default function ConfirmationPayment() {
  const history = useHistory();

  const bodymovinOptions = {
    loop: false,
    speed: 0.1,
    autoplay: true,
    prerender: true,
    animationData: animation,
  };

  return (
    <>
      {/* <Menu /> */}

      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        // bgcolor='success.main'
        mt={22}
        height={400}
      >
        {/* <Icon style={{ color: green[500], fontSize: 88 }}>check</Icon> */}

        <ReactBodymovin options={bodymovinOptions} />

        <Typography variant="h4" color="#FFFFFF">
          Pagamento Concluído!
        </Typography>

        <Typography>Parabens, voce concluiu seu pagamento</Typography>

        {/* <PriceLabel style={{fontSize: 44}} value='3.000' isLargeSize /> */}

        <Button
          onClick={() => history.push("/")}
          variant="contained"
          color="secondary"
          aria-label="delete"
        >
          Ok
        </Button>
      </Box>
    </>
  );
}
