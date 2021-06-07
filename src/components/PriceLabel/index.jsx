import React from 'react';
import PropTypes from 'prop-types'

import Box from '@material-ui/core/Box'

function PriceLabel({ value }) {
    return (
        <Box
            component='span'
            color='success.light'
            fontWeight='bold'
        >
            R$ {value}
        </Box>
    )
}

PriceLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

export default PriceLabel;