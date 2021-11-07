import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./reducers/shoppingCartSlice";
import productsReducer from "./reducers/productsSlice";
import userReducer from "./reducers/userSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    shoppingCart: shoppingCartReducer,
    user: userReducer,
  },
});
