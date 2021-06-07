import React from 'react';
import { generatePath, useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import Menu from '../../components/Menu';
import ProductCard from '../../components/ProductCard';

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

function Products() {

    const classes = useStyles()
    const history = useHistory()


    function handleClickProduct(id, image, title, description, ratingValue) {
        history.push(
            generatePath(`/products/:id`, { id }),
            {  // location state
                image,
                title,
                description,
                ratingValue
            },
        )
    }

    return (
        <>
            <Menu />
            <Box
                className={classes.section}
                display="flex"
                justifyContent='space-around'
                m={3}
            >
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        subHeader={product.subHeader}
                        price={product.price}
                        image={product.image}
                        ratingValue={product.ratingValue}
                        onClick={
                            () => handleClickProduct(
                                product.id,
                                product.image,
                                product.title,
                                product.subHeader,
                                product.ratingValue
                            )}
                    />
                ))}
            </Box>
        </>
    )
}





export default Products;