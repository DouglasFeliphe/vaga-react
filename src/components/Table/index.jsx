import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Slider from '@material-ui/core/Slider';
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

const renderTableRows = (rows) => (
    <>
        {rows.map((row) => (
            <TableRow key={row.id}>
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
                    <IconButton aria-label="delete" >
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

export default function BasicTable({ columns, rows, ActionContent }) {
    const classes = useStyles();

    return (
        <>
            <Box fontSize='h3.fontSize' mx={15}>
                Checkout
            </Box>
            <Box mx={15} >
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead >
                            {columns && renderTableColumns(columns)}
                        </TableHead>
                        <TableBody>
                            {renderTableRows(rows)}
                            {ActionContent}
                        </TableBody>
                    </Table>
                </TableContainer >
            </Box >
        </>
    );
}
