import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";

function PriceLabel({ label, value, isLargeSize, discount }) {
  let validValue;
  if (typeof value === "string") {
    validValue = parseInt(value);
    validValue = (validValue / 12).toFixed(2);
  } else {
    validValue = (value / 12).toFixed(2);
  }

  console.log("validValue", typeof validValue);
  return (
    <>
      <Box
        component={isLargeSize ? "h4" : "span"}
        color="success.light"
        fontWeight="bold"
      >
        {label && <span>{label}</span>}
        R${value}
        {discount > 0 && (
          <Box component="span" color="error.light" fontWeight="bold">
            (-{discount}%)
          </Box>
        )}
      </Box>
      <Box color="text.secondary">
        12x <strong>R$ {validValue}</strong> sem juros
      </Box>
    </>
  );
}

PriceLabel.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number.isRequired,
  isLargeSize: PropTypes.bool,
};

export default PriceLabel;
