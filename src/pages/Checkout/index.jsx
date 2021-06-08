import React from 'react';

import TableProducts from '../../components/TableProducts'
import { TableCell, TableRow, Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import Menu from '../../components/Menu'
import PriceLabel from '../../components/PriceLabel'

import { productsMock } from '../../mock/products'

const columns = [
    'Produto',
    'Imagem',
    'Descrição',
    'Preço',
    'Quantidade',
]

function Checkout() {

    function handleClickRemoveProduct(product) {
        alert(': ', product.id)
    }

    return (
        <>
            <Menu />
            <TableProducts
                title='Checkout'
                columns={
                    <TableRow>
                        {columns.map((column, index) => (
                            <TableCell key={index}>{column}</TableCell>
                        ))}
                        <TableCell colSpan={2}></TableCell>
                    </TableRow>
                }
                rows={
                    productsMock.map((product) => (
                        <TableRow key={product.id} >
                            <TableCell component="th" scope="row">
                                <strong>{product.title}</strong>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <img src={product.image} width='100'></img>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {product.subHeader}
                            </TableCell>
                            <TableCell>
                                <PriceLabel value={product.price} />
                            </TableCell>
                            <TableCell >
                                2
                            </TableCell>
                            <TableCell colSpan={2}>
                                <IconButton onClick={handleClickRemoveProduct} aria-label="delete" >
                                    <DeleteIcon
                                        fontSize="large"
                                        color='error'
                                    />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))
                }
                ActionContent={
                    <TableRow>
                        <TableCell colSpan={6} align='right'>
                            <strong>Total: R$300.00</strong>
                        </TableCell>
                        <TableCell  >
                            <Button
                                variant="contained"
                                color="secondary"
                            >
                                Finalizar Compra
                            </Button>
                        </TableCell>
                    </TableRow>
                }
            />
        </>
    )
}

export default Checkout;