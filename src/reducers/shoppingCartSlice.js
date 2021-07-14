import { createSlice } from '@reduxjs/toolkit'

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        products: [],
        qty: 0,
        total: 0
    },
    reducers: {
        add: (state, action) => {
            const new_product = action.payload
            state.products.push(new_product)
            state.qty += 1
            state.total += (new_product.price * new_product.productQty)
        },
        remove: (state, action) => {
            const product_removed = action.payload
            state.products = state.products.filter(product => product.id !== product_removed.id)
            state.qty -= 1
            state.total -= (product_removed.price * product_removed.productQty)
        }
    }
})

export const { add, remove, searchProductsByTerm } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer