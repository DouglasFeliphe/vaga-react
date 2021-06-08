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

import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(product, price, quantity) {
    return { product, price, quantity };
}

// const rows = [
//     createData(
//         <>
//             <span>Cadeira Gamer</span>
//             <img src={img1}
//                 alt=''
//                 width={150}
//             />
//         </>
//         ,
//         159,
//         6.0
//     ),
//     createData(
//         <>
//             <span>Cadeira Gamer</span>
//             <img src={img1}
//                 alt=''
//                 width={150}
//             />
//         </>,
//         159,
//         6.0
//     )
// ];

export default function BasicTable({ rows }) {
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
                            <TableRow>
                                <TableCell>Produto</TableCell>
                                <TableCell>Imagem</TableCell>
                                <TableCell>Descrição</TableCell>
                                <TableCell>Quantidade</TableCell>
                                <TableCell>Preço</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
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
                                    <TableCell align='center'>
                                        <Slider
                                            defaultValue={1}
                                            aria-labelledby="discrete-slider"
                                            valueLabelDisplay="on"
                                            step={1}
                                            marks
                                            min={1}
                                            max={10}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <PriceLabel value={row.price} />
                                    </TableCell>
                                    <TableCell>
                                        <IconButton aria-label="delete" >
                                            <DeleteIcon
                                                fontSize="large"
                                                color='error'
                                            />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow >
                                <TableCell component="th" scope="row">
                                </TableCell>

                                <TableCell align='center'>
                                </TableCell>

                                <TableCell align='right'>
                                    <strong> Total: R$300.00</strong>
                                </TableCell>
                                <TableCell >
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<DeleteIcon />}
                                    >
                                        Finalizar Compra
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer >
            </Box >
        </>
    );
}
