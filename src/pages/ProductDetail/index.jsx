import React from 'react';
import { useLocation } from 'react-router-dom';

import Menu from '../../components/Menu'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

import Rating from '@material-ui/lab/Rating';

import { ShoppingCart } from '@material-ui/icons';


function ProductDetail() {

  const location = useLocation();

  const { image, title, description, ratingValue } = location.state

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
          flexDirection='column'
          width={500}
          height={300}
          ml={5}
        >
          <div >
            <h1>{title}</h1>
            <p>
              {description}
            </p>
          </div>

          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Avaliação</Typography>
            <Rating name="read-only" value={ratingValue} readOnly />
          </Box>

          <Button
            style={{ marginTop: 'auto', marginLeft: 'auto' }}
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