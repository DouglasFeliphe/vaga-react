import React from 'react';
import PropTypes from 'prop-types'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Rating from '@material-ui/lab/Rating';


function RatingLabel({ title, value }) {
    return (
        <Box
            component="fieldset"
            borderColor="transparent"
            mb={3}
        >
            <Typography component="legend">{title}</Typography>
            <Rating name="read-only" value={value} readOnly />
        </Box>
    )
}

RatingLabel.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number.isRequired,
};

export default RatingLabel;