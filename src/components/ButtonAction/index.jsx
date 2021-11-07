import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function ButtonAction({ label, value, onClickDecrease, onClickIncrease }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" my={5}>
      <Typography>{label}</Typography>

      <Typography variant="h6" gutterBottom component="span">
        {value}
      </Typography>

      <ButtonGroup>
        <Button aria-label="reduce" onClick={onClickDecrease}>
          <RemoveIcon fontSize="small" />
        </Button>
        <Button aria-label="increase" onClick={onClickIncrease}>
          <AddIcon fontSize="small" />
        </Button>
      </ButtonGroup>
    </Box>
  );
}

ButtonAction.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onClickDecrease: PropTypes.func.isRequired,
  onClickIncrease: PropTypes.func.isRequired,
};

export default ButtonAction;
