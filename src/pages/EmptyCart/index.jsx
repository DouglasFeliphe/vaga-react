import React from 'react';
import { Link } from 'react-router-dom'

import { Box, Typography, Button } from '@material-ui/core'
import RemoveShoppingCart from '@material-ui/icons/RemoveShoppingCart'

function Empty() {
    return (
        <Box
            display='flex'
            flexDirection='column'
            justifyContent='space-around'
            alignItems='center'
            mt={20}
            height={200}
        >
            <RemoveShoppingCart />
            <Typography variant='h4'  >
                O carrinho está vazio.
            </Typography>
            <Typography >
                Voce não adicionou nenhum produto no carrinho.
                Clique no botão abaixo para ver nossos produtos.
            </Typography>
            <Button
                variant="contained"
                color="primary"
            >
                <Link to='/'>
                    Ver Produtos
                </Link>
            </Button>
        </Box>
    )
}

export default Empty;