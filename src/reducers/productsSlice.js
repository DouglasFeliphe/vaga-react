import { createSlice } from '@reduxjs/toolkit'
import { JSON_PRODUCTS } from '../mock/products'

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: JSON_PRODUCTS,
        inputSearchValue: ''
    },
    reducers: {
        searchProductsByTerm: (state, action) => {
            state.inputSearchValue = action.payload
        }
    }
})

export const { searchProductsByTerm } = productsSlice.actions

export default productsSlice.reducer
