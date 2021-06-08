import * as React from 'react';
import { useState } from 'react';
import { generatePath, useHistory } from 'react-router-dom'

import { Box, Switch, FormControlLabel } from '@material-ui/core';
import Menu from '../../components/Menu';
import TableProducts from '../../components/TableProducts';
import ProductItemCard from '../../components/ProductItemCard';
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
        <TableProducts rows={productsMock} onClick={handleClickProduct} />
    </Box>
)

function Products() {

    const classes = useStyles()
    const history = useHistory()

    const [switchMode, setswitchMode] = useState(false);

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
                        onChange={() => setswitchMode(!switchMode)}
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