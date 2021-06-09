import * as React from 'react';
import { useState } from 'react';
import { generatePath, useHistory } from 'react-router-dom'

import { Box, Switch, FormControlLabel, Button } from '@material-ui/core';
import { TableRow, TableCell } from '@material-ui/core';
import Menu from '../../components/Menu';
import TableProducts from '../../components/TableProducts';
import ProductItemCard from '../../components/ProductItemCard';
import PriceLabel from '../../components/PriceLabel';
import RatingLabel from '../../components/RatingLabel';

import { useStyles } from './styles'
import { productsMock } from '../../mock/products'


const renderProductWithCard = (product, handleClickProduct) => (
    < ProductItemCard
        key={product.id}
        title={product.title}
        subHeader={product.subHeader}
        price={product.price}
        image={product.image}
        ratingValue={product.ratingValue}
        onClick={() => handleClickProduct(product)}
    />
)


const renderProductWithList = (product, handleClickProduct) => (
    < TableRow key={product.id} >
        <TableCell component="th" scope="row">
            <strong>{product.title}</strong>
        </TableCell>
        <TableCell component="th" scope="row">
            <img src={product.image} width='200'></img>
        </TableCell>
        <TableCell component="th" scope="row">
            {product.subHeader}
        </TableCell>
        <TableCell >
            <PriceLabel value={product.price} />
        </TableCell>
        <TableCell>
            <RatingLabel title='Avaliação' value={product.ratingValue} />
        </TableCell>
        <TableCell colSpan={2}>
            <Button onClick={() => handleClickProduct(product)} variant="contained" color="primary">
                Ver
            </Button>
        </TableCell>
    </ TableRow >
)

function Products() {

    const history = useHistory()
    const classes = useStyles()

    const [products, setProducts] = useState(productsMock);
    const [switchMode, setSwitchMode] = useState(false);

    function handleClickProduct(product) {
        const id = product.id

        history.push(
            generatePath(`/products/:id`, { id }),
            {  // location state
                image: product.image,
                title: product.title,
                description: product.description,
                price: product.price,
                ratingValue: product.ratingValue
            }
        )
    }

    return (
        <>
            <Menu />
            <FormControlLabel
                sx={{
                    display: 'block',
                    margin: 22
                }}
                control={
                    <Switch
                        checked={switchMode}
                        onChange={() => setSwitchMode(!switchMode)}
                        name="modo"
                        color="primary"
                    />
                }
                label='Mudar Visualização'
            />

            {switchMode ?
                <Box
                    className={classes.section}
                    display='flex'
                    flexWrap='wrap'
                    justifyContent='space-around'
                    m={3}
                >
                    {products.map(product =>
                        renderProductWithCard(product, handleClickProduct))
                    }
                </Box>
                :
                <Box className={classes.section} m={3} >
                    <TableProducts
                        rows={
                            products.map(product =>
                                renderProductWithList(product, handleClickProduct))
                        }
                    >
                    </TableProducts>
                </Box>
            }
        </>
    )
}

export default Products;