import React from 'react';
import PropTypes from 'prop-types'

import Box from '@material-ui/core/Box'

function PriceLabel({ label, value, isLargeSize }) {
    return (
        <Box
            component={isLargeSize ? 'h3' : 'span'}
            color='success.light'
            fontWeight='bold'
        >
            {label && <span>{label}</span>}

            R$ { value}
        </Box >
    )
}

PriceLabel.propTypes = {
    label: PropTypes.string,
    value: PropTypes.number.isRequired,
    isLargeSize: PropTypes.bool,
};

export default PriceLabel;