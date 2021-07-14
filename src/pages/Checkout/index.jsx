import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../reducers/shoppingCartSlice";

import Menu from '../../components/Menu'
import TableProducts from '../../components/TableProducts'
import PriceLabel from '../../components/PriceLabel'
import EmptyCart from '../EmptyCart'

import { TableCell, TableRow, Button, IconButton, } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'

const columns = [
    'Produto',
    'Imagem',
    'Descrição',
    'Preço',
    'Quantidade',
]

function Checkout() {

    // redux
    const products = useSelector(state => state.shoppingCart.products)
    const total = useSelector(state => state.shoppingCart.total)
    const dispatch = useDispatch()

    useEffect(() => { }, [products]);


    function handleClickRemoveProduct(product) {
        dispatch(remove(product))
    }

    return (
        <>
            <Menu />
            {products.length ?
                < TableProducts
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
                        products.map((product) => (
                            <TableRow key={product.id} >
                                <TableCell component="th" scope="row">
                                    <strong>{product.title}</strong>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    <img src={product.image} width='30'></img>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {product.subHeader}
                                </TableCell>
                                <TableCell>
                                    <PriceLabel value={product.price} />
                                </TableCell>
                                <TableCell >
                                    {product.productQty}
                                </TableCell>
                                <TableCell colSpan={2}>
                                    <IconButton onClick={() => handleClickRemoveProduct(product)} aria-label="delete" >
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
                            <TableCell colSpan={5} align='right'>
                                <PriceLabel label='Total: ' value={total} isLargeSize />
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
                :
                <EmptyCart />
            }
        </>
    )
}

export default Checkout;