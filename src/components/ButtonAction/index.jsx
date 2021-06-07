import React, { useState } from 'react';
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function ButtonAction({ label }) {

    const [count, setCount] = useState(0);

    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            my={5}
        >
            <Typography>
                {label}
            </Typography>

            <Typography variant="h6" gutterBottom component="span">
                {count}
            </Typography>

            <ButtonGroup>
                <Button
                    aria-label="reduce"
                    onClick={() => {
                        setCount(Math.max(count - 1, 0));
                    }}
                >
                    <RemoveIcon fontSize="small" />
                </Button>
                <Button
                    aria-label="increase"
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    <AddIcon fontSize="small" />
                </Button>
            </ButtonGroup>
        </Box>
    )
}

ButtonAction.propTypes = {
    label: PropTypes.string.isRequired,
};

export default ButtonAction;