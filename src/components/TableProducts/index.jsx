import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { Box, Paper, IconButton, Slider } from '@material-ui/core'


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function TableProducts({ title, columns, rows, ActionContent }) {
    const classes = useStyles();

    return (
        <>
            {title &&
                <Box fontSize='h3.fontSize' mx={15}>
                    {title}
                </Box>
            }

            <Box mx={15} >
                <TableContainer component={Paper}>
                    <Table
                        className={classes.table}
                        aria-label="simple table"
                    >
                        <TableHead >
                            {columns}
                        </TableHead>
                        <TableBody>
                            {rows}
                            {ActionContent}
                        </TableBody>
                    </Table>
                </TableContainer >
            </Box >
        </>
    );
}

TableProducts.propTypes = {
    title: PropTypes.string,
    columns: PropTypes.element,
    rows: PropTypes.array.isRequired,
    ActionContent: PropTypes.object,
};

export default TableProducts
