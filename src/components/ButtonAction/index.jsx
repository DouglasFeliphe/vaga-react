import React, { useState } from 'react';
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function ButtonAction() {

    const [count, setCount] = useState(0);

    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            my={5}
        >

            <Typography>
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

export default ButtonAction;