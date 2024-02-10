import { createSlice } from "@reduxjs/toolkit";

const cartIntialState = {
    changed: false,
    cartItems: [],
    totalQuantity: 0,
    subTotal: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartIntialState,
    reducers: {
        replaceCart(state, action) {
            state.cartItems = action.payload.cartItems;
            state.totalQuantity = action.payload.totalQuantity;
            state.subTotal = action.payload.subTotal;
        },
        setCartChanged(state, payload) {
            state.changed = payload;
        },
        addToCart(state, action) {
            state.totalQuantity++;
            state.changed = true;
            const product = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (product >= 0) {
                state.cartItems[product].quantity += 1;
            } else {
                state.cartItems.push(action.payload);
            }
        },
        clearCart(state) {
            state.changed = false;
            state.cartItems = [];
            state.totalQuantity = 0;
            state.subTotal = 0;
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;