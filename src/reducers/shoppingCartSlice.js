import { createSlice } from '@reduxjs/toolkit'

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        products: [],
        qty: 0
    },
    reducers: {
        add: (state, action) => {
            state.products.push(action.payload)
            state.qty += 1
        },
        remove: (state, action) => {
            const product_id = action.payload
            state.products = state.products.filter(product => product.id !== product_id)
            state.qty -= 1
        }
    }
})

export const { add, remove } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer