import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem, ICartState } from "./types";
import { getCartFromLocalStorage } from "../../utils/getCartFromLocalStorage";

const initialState: ICartState = {
    cartItems: getCartFromLocalStorage()
};

export const cartSlise = createSlice({
	name: "filters",
	initialState,
	reducers: {
        addCartItem: (state, action: PayloadAction<ICartItem>) => {
            const findItem = state.cartItems.find(
                (obj) => obj.id === action.payload.id
            );

            if (findItem) {
                findItem.quantity++;
            } else {
                state.cartItems.push(action.payload);
            };
        },

        removeCartItem: (state, action: PayloadAction<string>) => {
            const findItem = state.cartItems.find(
                (obj) => obj.id === action.payload
            );

            if(!findItem) return;

            if (findItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(
                    (obj) => obj.id !== action.payload                );
            } else {
                findItem.quantity--;
            };
        },

        removeAllCartItem: (state, action: PayloadAction<string>) => {
            state.cartItems = state.cartItems.filter(
                (obj) => obj.id !== action.payload
            );
        },
        clearCartItems: (state) => {
            state.cartItems = [];
        },
	}
});

export const { addCartItem, removeCartItem, removeAllCartItem, clearCartItems } = cartSlise.actions;

export default cartSlise.reducer;