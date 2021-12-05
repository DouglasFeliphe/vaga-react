import { createSlice } from "@reduxjs/toolkit";
import { JSON_PRODUCTS } from "../mock/products";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: JSON_PRODUCTS,
    inputSearchValue: "",
    wishListQuantity: 0,
  },
  reducers: {
    searchProductsByTerm: (state, action) => {
      state.inputSearchValue = action.payload;
    },
    addToWishlist: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );

      product.isFavorite = true;
      // state.products = [...state.products, product];
      state.wishListQuantity += 1;
    },
    removeFromWishlist: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      product.isFavorite = false;
      state.wishListQuantity -= 1;
    },
  },
});

export const { searchProductsByTerm, addToWishlist, removeFromWishlist } =
  productsSlice.actions;

export default productsSlice.reducer;
