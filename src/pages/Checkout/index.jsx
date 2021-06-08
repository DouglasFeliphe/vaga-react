import React, { useState, useEffect } from 'react';

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

    const [products, setProducts] = useState(productsMock);

    useEffect(() => {
    }, [products]);

    function handleClickRemoveProduct(_product) {
        const filteredProducts = products.filter(product => product.id !== _product.id)
        setProducts(filteredProducts)
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
                                2
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