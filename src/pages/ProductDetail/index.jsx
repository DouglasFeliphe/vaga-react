import React from 'react';
import Menu from '../../components/Menu'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import img1 from '../../images/cadeira-gamer.jpg'


function ProductDetail() {
  return (
    <>
      <Menu></Menu>
      <Box fontSize="h3.fontSize" m={5}>
        Detalhes do produto
        <hr />
      </Box>

      <Box display='flex' m={5} >

        <img src={img1} alt="" width='500' height='500' />

        <Box
          display='flex'
          alignItems='flex-start'
          flexDirection='column'
          width={500}
          height={300}
        >
          <div >
            <h1>Titulo</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam quisquam cum eum vero illum molestias dolorum?
              Nam repellendus veniam cupiditate rem fuga id quod commodi nemo omnis quae?
              Blanditiis, eius?
            </p>
          </div>

          <Button
            style={{ marginTop: 'auto', marginLeft: 'auto' }}
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
          >
            Adicionar ao Carrinho
          </Button>

        </Box>
      </Box>
    </>
  )
}

export default ProductDetail;