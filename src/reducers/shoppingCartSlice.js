import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    products: [],
    qty: 0,
    total: 0,
  },
  reducers: {
    setShoppingCart: (state, action) => {
      state.products = action.payload.products;
      state.qty = action.payload.qty;
      state.total = action.payload.total;
    },
    setQty: (state, action) => {
      state.qty = action.payload;
    },
    add: (state, action) => {
      const new_product = action.payload;
      state.products.push(new_product);
      state.qty += 1;
      state.total += new_product.price * new_product.productQty;
    },
    remove: (state, action) => {
      const product_removed = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== product_removed.id
      );
      state.qty -= 1;
      state.total -= product_removed.price * product_removed.productQty;
    },
    clearShoppingCart: (state, action) => {
      state.products = [];
      state.qty = 0;
      state.total = 0;
    },
  },
});

export const {
  setShoppingCart,
  setQty,
  add,
  remove,
  searchProductsByTerm,
  clearShoppingCart,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
