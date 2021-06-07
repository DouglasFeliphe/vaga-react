import React from 'react';
import { useLocation } from 'react-router-dom';

import Menu from '../../components/Menu'
import PriceLabel from '../../components/PriceLabel';
import RatingLabel from '../../components/RatingLabel';
import ButtonAction from '../../components/ButtonAction'

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { ShoppingCart } from '@material-ui/icons';



function ProductDetail() {

  const location = useLocation();

  const { image, title, description, price, ratingValue } = location.state

  return (
    <>
      <Menu></Menu>
      <Box fontSize="h3.fontSize" m={5}>
        Detalhes do Produto
        <hr />
      </Box>

      <Box display='flex' m={5} >

        <img src={image} alt="" width='500' height='500' />

        <Box
          display='flex'
          alignItems='flex-start'
          justifyContent='space-around'
          flexDirection='column'
          width={500}
          ml={5}
        >

          <h1>{title}</h1>

          <p>
            {description}
          </p>

          <PriceLabel value={price} />

          <RatingLabel title="Avaliação" value={ratingValue} />

          <ButtonAction label='Quantidade' />

          <Button
            variant="contained"
            color="secondary"
            startIcon={<ShoppingCart />}
          >
            Adicionar ao Carrinho
          </Button>

        </Box>
      </Box>
    </>
  )
}

export default ProductDetail;