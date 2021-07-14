import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from './reducers/shoppingCartSlice'
import productsReducer from './reducers/productsSlice'

export default configureStore({
    reducer: {
        products: productsReducer,
        shoppingCart: shoppingCartReducer
    },
})