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

import img1 from '../../images/cadeira-gamer.jpg'
import img2 from '../../images/cooler1.jpg'
import img3 from '../../images/teclado.jpg'
import img4 from '../../images/watercooler.jpg'

import { useStyles } from './styles'

const products = [
    {
        id: 1,
        title: "Watercooler Gamer",
        subHeader: "lorem ipsum lorem ipsum",
        price: 300.00,
        image: img4,
        ratingValue: 2
    },
    {
        id: 2,
        title: "Cadeira Gamer",
        subHeader: "lorem ipsum lorem ipsum",
        price: 300.00,
        image: img1,
        ratingValue: 2
    },
    {
        id: 3,
        title: "Cooler Gamer",
        subHeader: "lorem ipsum lorem ipsum",
        price: 300.00,
        image: img2,
        ratingValue: 2
    },
    {
        id: 4,
        title: "Teclado Gamer",
        subHeader: "lorem ipsum lorem ipsum",
        price: 300.00,
        image: img3,
        ratingValue: 2
    },

]

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

    const [loading, setLoading] = useState(false);
    const label = 'Modo Lista'




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
                        checked={loading}
                        onChange={() => setLoading(!loading)}
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

                {products.map(product =>
                    loading ?
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