import React from 'react';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from '../../components/Menu';
import ProductCard from '../../components/ProductCard';

import img1 from './images/cadeira-gamer.jpg'
import img2 from './images/cooler1.jpg'
import img3 from './images/teclado.jpg'
import img4 from './images/watercooler.jpg'


function Products() {
    return (
        <>
            <Menu></Menu>
            <CssBaseline />
            <Box display="flex" m={2}>
                <ProductCard image={img4} />
                <ProductCard image={img3} />
                <ProductCard image={img2} />
                <ProductCard image={img1} />
            </Box>
        </>
    )
}

export default Products;