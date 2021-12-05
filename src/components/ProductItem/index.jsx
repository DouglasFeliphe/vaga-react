import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";
import PriceLabel from "../PriceLabel";
import RatingLabel from "../RatingLabel";
import { TableRow, TableCell } from "@material-ui/core";

import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../reducers/productsSlice";

import { useStyles } from "./styles";

function ProductItem() {
  // redux
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  async function handleFavoriteProduct(productId) {
    console.log("handleFavoriteProduct", productId);
    if (isFavorite) {
      dispatch(removeFromWishlist(productId));
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
      await dispatch(addToWishlist(productId));
      alert("Product added to wishlist");
    }
  }

  return [handleFavoriteProduct, isFavorite];
}

const CardItem = ({ product, handleClickProduct }) => {
  const classes = useStyles();
  const priceNumber = parseInt(product.price);
  console.log("priceNumber", priceNumber);

  const [handleFavoriteProduct] = ProductItem();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title="Paella dish"
      />

      <CardHeader title={product.title} description={product.description} />

      <CardContent>
        <PriceLabel value={priceNumber} discount={product.discount} />
      </CardContent>

      <RatingLabel title="Avaliação" value={product.ratingValue} />

      <Box display="flex" justifyContent="flex-start">
        <CardActions>
          <Button onClick={() => handleFavoriteProduct(product.id)}>
            <Icon color={product.isFavorite ? "secondary" : "disabled"}>
              favorite
            </Icon>
          </Button>
          <Button
            onClick={handleClickProduct}
            variant="contained"
            color="primary"
          >
            Ver
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

const ListItem = ({ product, handleClickProduct }) => {
  const [handleFavoriteProduct] = ProductItem();
  const priceNumber = parseFloat(product.price);
  return (
    <TableRow key={product.id}>
      <TableCell component="th" scope="row">
        <strong>{product.title}</strong>
      </TableCell>
      <TableCell component="th" scope="row">
        <img src={product.image} alt={product.title} width="200"></img>
      </TableCell>
      <TableCell component="th" scope="row">
        {product.description}
      </TableCell>
      <TableCell>
        <PriceLabel value={priceNumber} discount={product.discount} />
      </TableCell>
      <TableCell>
        <RatingLabel title="Avaliação" value={product.ratingValue} />
      </TableCell>
      <TableCell>
        <Button onClick={() => handleFavoriteProduct(product.id)}>
          <Icon color={product.isFavorite ? "secondary" : "disabled"}>
            favorite
          </Icon>
        </Button>
      </TableCell>
      <TableCell colSpan={2}>
        <Button
          onClick={() => handleClickProduct(product)}
          variant="contained"
          color="primary"
        >
          Ver
        </Button>
      </TableCell>
    </TableRow>
  );
};

ProductItem.Card = CardItem;
ProductItem.List = ListItem;

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  ratingValue: PropTypes.number.isRequired,
};

export default ProductItem;
