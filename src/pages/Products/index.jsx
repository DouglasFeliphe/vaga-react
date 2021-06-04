import React from 'react';
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from '../../components/Menu';
import ProductCard from '../../components/ProductCard';

import img1 from '../../images/cadeira-gamer.jpg'
import img2 from '../../images/cooler1.jpg'
import img3 from '../../images/teclado.jpg'
import img4 from '../../images/watercooler.jpg'

import { useStyles } from './styles'

const products = [
    {
        title: "Watercooler Gamer",
        subHeader: "lorem ipsum lorem ipsum",
        image: img4,
        ratingValue: 2
    },
    {
        title: "Cadeira Gamer",
        subHeader: "lorem ipsum lorem ipsum",
        image: img1,
        ratingValue: 2
    },
    {
        title: "Cooler Gamer",
        subHeader: "lorem ipsum lorem ipsum",
        image: img2,
        ratingValue: 2
    },
    {
        title: "Teclado Gamer",
        subHeader: "lorem ipsum lorem ipsum",
        image: img3,
        ratingValue: 2
    },

]

function Products() {

    const classes = useStyles();

    return (
        <>
            <Menu />
            <Box
                className={classes.section}
                display="flex"
                justifyContent='space-around'
                m={3}
            >
                {renderProducts}
            </Box>
        </>
    )
}

const renderProducts = products.map(product => (
    <Link to='product_detail'>
        <ProductCard
            title={product.title}
            subHeader={product.subHeader}
            image={product.image}
            ratingValue={product.ratingValue} />
    </Link>
));

export default Products;