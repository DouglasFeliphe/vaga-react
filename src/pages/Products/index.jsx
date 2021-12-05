import * as React from "react";
import { memo } from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { generatePath, useHistory } from "react-router-dom";

import { Box, Switch, FormControlLabel, Button } from "@material-ui/core";

import Menu from "../../components/Menu";
import TableProducts from "../../components/TableProducts";
import ProductItem from "../../components/ProductItem";

import { useStyles } from "./styles";
import LoadingScreen from "../../components/LoadingScreen";

function Products() {
  const history = useHistory();
  const classes = useStyles();

  // redux
  const products = useSelector((state) => state.products.products);
  let inputSearchValue = useSelector(
    (state) => state.products.inputSearchValue
  );

  const [switchMode, setSwitchMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    console.log("products", products);
  }, [products]);

  function handleClickProduct(product) {
    const id = product.id;

    history.push(generatePath(`/products/:id`, { id }), {
      // location state
      id: product.id,
      image: product.image,
      title: product.title,
      description: product.description,
      price: product.price,
      discount: product.discount,
      ratingValue: product.ratingValue,
    });
  }

  return (
    <>
      <Menu />
      <FormControlLabel
        className={classes.switch}
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: 22,
        }}
        control={
          <Switch
            checked={switchMode}
            onChange={() => setSwitchMode(!switchMode)}
            name="modo"
            color="primary"
          />
        }
        label="Mudar Visualização"
      />
      {loading ? (
        <LoadingScreen />
      ) : (
        <Box>
          {switchMode ? (
            <Box
              className={classes.section}
              display="flex"
              flexWrap="wrap"
              justifyContent="space-around"
              m={3}
            >
              {renderProducts(
                "CARD",
                products,
                inputSearchValue,
                handleClickProduct
              )}
            </Box>
          ) : (
            <Box className={classes.section} m={3}>
              <TableProducts
                rows={renderProducts(
                  "LIST",
                  products,
                  inputSearchValue,
                  handleClickProduct
                )}
              ></TableProducts>
            </Box>
          )}
        </Box>
      )}
    </>
  );
}

/**
 *
 * @param {('CARD'|'LIST')} component
 * @param {*} products
 * @param {*} inputSearchValue
 * @param {*} handleClickProduct
 */
function renderProducts(
  component,
  products,
  inputSearchValue,
  handleClickProduct
) {
  return products
    .filter((product) => renderFilteredProducts(inputSearchValue, product))
    .map(
      (product) =>
        (component === "CARD" && (
          <ProductItem.Card
            key={product.id}
            product={product}
            handleClickProduct={() => handleClickProduct(product)}
          />
        )) ||
        (component === "LIST" && (
          <ProductItem.List
            key={product.id}
            product={product}
            handleClickProduct={() => handleClickProduct(product)}
          />
        ))
    );
}

function renderFilteredProducts(inputSearchValue, product) {
  if (inputSearchValue === "") {
    return product;
  } else if (
    product.title.toLowerCase().includes(inputSearchValue.toLowerCase())
  ) {
    return product;
  }
}

export default memo(Products);
