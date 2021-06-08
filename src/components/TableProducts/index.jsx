import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { Box, Paper, IconButton, Slider } from '@material-ui/core'
import PriceLabel from '../PriceLabel'
import ButtonAction from '../ButtonAction'

import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const renderTableColumns = (columns) => (
    <TableRow>
        {columns.map((column, index) => (
            <TableCell key={index}>{column}</TableCell>
        ))}
        <TableCell colSpan={2}></TableCell>
    </TableRow>
)

const renderTableRows = (rows, onClick) => (
    <>
        {rows.map((row) => (
            <TableRow key={row.id} >
                <TableCell component="th" scope="row">
                    <strong>{row.title}</strong>
                </TableCell>
                <TableCell component="th" scope="row">
                    <img src={row.image} width='100'></img>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.subHeader}
                </TableCell>
                <TableCell >
                    2
                 </TableCell>
                <TableCell>
                    <PriceLabel value={row.price} />
                </TableCell>
                <TableCell colSpan={2}>
                    <IconButton onClick={onClick} aria-label="delete" >
                        <DeleteIcon
                            fontSize="large"
                            color='error'
                        />
                    </IconButton>
                </TableCell>
            </TableRow>
        ))
        }
    </>
)

function TableProducts({ title, columns, rows, onClick, ActionContent }) {
    const classes = useStyles();

    function handleButtonClick (product) {
        
    }

    return (
        <>
            {title &&
                <Box fontSize='h3.fontSize' mx={15}>
                    {title}
                </Box>
            }

            <Box mx={15} >
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead >
                            {columns && renderTableColumns(columns)}
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
    columns: PropTypes.array,
    rows: PropTypes.object.isRequired,
    ButtonAction: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    ActionContent: PropTypes.object,
};

export default TableProducts
