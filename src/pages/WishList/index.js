import React, { memo } from "react";
import { useSelector } from "react-redux";
// import { add } from "../../reducers/shoppingCartSlice";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import Menu from "../../components/Menu";
import TableProducts from "../../components/TableProducts";
import PriceLabel from "../../components/PriceLabel";
import EmptyList from "../../components/EmptyList";
import RatingLabel from "../../components/RatingLabel";

import { TableCell, TableRow, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Favorite from "@material-ui/icons/FavoriteBorderTwoTone";
import { ShoppingCart } from "@material-ui/icons";

const columns = [
  "Produto",
  "Imagem",
  "Descrição",
  "Preço",
  "Avaliação",
  "Ações",
];

function Alert(props) {
  return <MuiAlert elevation={6} variant="standard" {...props} />;
}

function WishList() {
  // const dispatch = useDispatch();
  // list of products in the wishlist from the redux store (state)
  const wishList = useSelector((state) =>
    state.products.products.filter((product) => product.isFavorite)
  );
  console.log("wishList", wishList);

  // Snackbar
  // const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setState({ ...state, open: false });
  }

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  async function handleClickRemoveProduct(product) {
    // await dispatch(remove(product));
  }

  // async function handleClickAddToCart(newState, product) {
  //   await dispatch(add(product));
  //   setState({ open: true, ...newState });
  // }

  return (
    <>
      <Menu />
      {open && (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          key={vertical + horizontal}
        >
          <Alert onClose={handleClose} severity="success">
            This is a success message!
          </Alert>
        </Snackbar>
      )}
      <>
        {wishList.length ? (
          <TableProducts
            title="Lista de Desejos"
            columns={
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell key={index}>{column}</TableCell>
                ))}
                <TableCell colSpan={2}></TableCell>
              </TableRow>
            }
            rows={wishList.map((product) => (
              <TableRow key={product.id}>
                <TableCell component="th" scope="row">
                  <strong>{product.title}</strong>
                </TableCell>
                <TableCell component="th" scope="row">
                  <img src={product.image} alt={product.title} width="30"></img>
                </TableCell>
                <TableCell component="th" scope="row">
                  {product.description.length > 100
                    ? product.description.substring(0, 100) + "..."
                    : product.description}
                </TableCell>
                <TableCell>
                  <PriceLabel
                    value={product.price}
                    discount={product.discount}
                  />
                </TableCell>
                <TableCell>
                  <RatingLabel value={product.ratingValue} />
                </TableCell>
                <TableCell colSpan={2}>
                  <IconButton
                    onClick={() => handleClickRemoveProduct(product)}
                    aria-label="remove from wishlist"
                  >
                    <DeleteIcon fontSize="large" color="error" />
                  </IconButton>
                  <IconButton
                    onClick={handleClick({
                      vertical: "top",
                      horizontal: "right",
                    })}
                    aria-label="add to cart"
                  >
                    <ShoppingCart
                      fontSize="large"
                      style={{ color: "yellowgreen" }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            ActionContent={<></>}
          ></TableProducts>
        ) : (
          <EmptyList
            Icon={<Favorite />}
            title="A lista de desejos está vazia."
            description="Voce não adicionou nenhum produto na lista de desejos. Clique no botão abaixo para ver nossos produtos."
          />
        )}
      </>
    </>
  );
}

export default memo(WishList);
