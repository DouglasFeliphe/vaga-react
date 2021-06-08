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



const renderProductWithCard = (classes, handleClickProduct) => (
    <Box
        className={classes.section}
        display='flex'
        justifyContent='space-around'
        m={3}
    >
        {productsMock.map(product => (
            <ProductItemCard
                key={product.id}
                title={product.title}
                subHeader={product.subHeader}
                price={product.price}
                image={product.image}
                ratingValue={product.ratingValue}
                onClick={
                    () => handleClickProduct(product)
                }
            />
        ))}
    </Box>
)

const renderProductWithList = (classes, handleClickProduct) => (
    <Box className={classes.section} m={3} >
        <TableProducts

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
                        <TableCell >
                            <PriceLabel value={product.price} />
                        </TableCell>
                        <TableCell>
                            <RatingLabel value={product.ratingValue} />
                        </TableCell>
                        <TableCell colSpan={2}>
                            <Button onClick={() => handleClickProduct(product)} variant="contained" color="primary">
                                Ver
                    </Button>
                        </TableCell>
                    </TableRow>
                ))
            }

        />
    </Box>
)

function Products() {

    const classes = useStyles()
    const history = useHistory()

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
            },
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
                renderProductWithCard(classes, handleClickProduct)
                :
                renderProductWithList(classes, handleClickProduct)
            }

        </>
    )
}





export default Products;