import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { add } from '../../reducers/shoppingCartSlice'

import Menu from '../../components/Menu'
import PriceLabel from '../../components/PriceLabel';
import RatingLabel from '../../components/RatingLabel';
import ButtonAction from '../../components/ButtonAction'

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { ShoppingCart } from '@material-ui/icons';


function ProductDetail() {

  const [productQty, setProductQty] = useState(0);
  const dispatch = useDispatch()

  const history = useHistory()
  const location = useLocation();
  const { id, image, title, description, price, ratingValue } = location.state

  const userIsLogged = true

  function handleIncreaseQty() {
    setProductQty(productQty + 1)
  }

  function handleDecreaseQty() {
    setProductQty(Math.max(productQty - 1, 0))
  }

  function handleButtonAddCartClick() {
    if (userIsLogged) {
      const product = {
        id,
        image,
        title,
        description,
        price,
        productQty,
        ratingValue
      }

      dispatch(add(product))
      history.push('/checkout')

    } else
      history.push('/login')
  }

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

          <ButtonAction
            label='Quantidade'
            value={productQty}
            onClickIncrease={handleIncreaseQty}
            onClickDecrease={handleDecreaseQty}
          />

          <Button
            onClick={handleButtonAddCartClick}
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