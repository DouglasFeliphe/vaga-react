import * as React from 'react';
import { useState } from 'react';
import { generatePath, useHistory } from 'react-router-dom'

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch';
import Menu from '../../components/Menu';
import ProductItemCard from '../../components/ProductItemCard';
import ProductItemList from '../../components/ProductItemList';

import { useStyles } from './styles'

import { productsMock } from '../../mock/products'

const renderProductsWithListMod = (product, handleClickProduct) => (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    </List>
)

const renderProductsWithCardMod = (product, handleClickProduct) => (
    <></>
)

function Products() {

    const classes = useStyles()
    const history = useHistory()

    const [switchMode, setswitchMode] = useState(false);

    function handleClickProduct(id, image, title, description, price, ratingValue) {
        history.push(
            generatePath(`/products/:id`, { id }),
            {  // location state
                image,
                title,
                description,
                price,
                ratingValue
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

            <Box
                className={classes.section}
                display="flex"
                flexWrap='wrap'
                justifyContent='space-around'
                alignItems='center'
                m={3}
            >

                {productsMock.map(product =>
                    switchMode ?
                        <ProductItemCard
                            key={product.id}
                            title={product.title}
                            subHeader={product.subHeader}
                            price={product.price}
                            image={product.image}
                            ratingValue={product.ratingValue}
                            onClick={() => handleClickProduct(
                                product.id,
                                product.image,
                                product.title,
                                product.subHeader,
                                product.price,
                                product.ratingValue
                            )}
                        />
                        :
                        <ProductItemList
                            key={product.id}
                            title={product.title}
                            subHeader={product.subHeader}
                            price={product.price}
                            image={product.image}
                            ratingValue={product.ratingValue}
                            onClick={() => handleClickProduct(
                                product.id,
                                product.image,
                                product.title,
                                product.subHeader,
                                product.price,
                                product.ratingValue
                            )}
                        />
                )}


            </Box>
        </>
    )
}





export default Products;