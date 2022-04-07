import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toastr } from 'react-redux-toastr'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItemToCart(state, action) {
            // state.totalQuantity++;
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item._id === newItem._id);
            if (!existingItem) {
                state.items.push(newItem);
                state.totalQuantity++;
            } else {
                existingItem.quantity += newItem.quantity;
                existingItem.total += newItem.total;
            }
            // state.items.push(action.payload)
            // console.log(newItem)
            // const existingItem = state.items?.find((item) => item.id === newItem._id);
            // if (!existingItem) {
            //     state.item.push({
            //         // itemId: newItem.id,
            //         // price: newItem.price,
            //         ...newItem,
            //         quantity: 1
            //         // totalPrice: newItem.price,
            //         // name: newItem.title
            //     });
            // } else {
            //     existingItem.quantity++;
            //     // existingItem.totalPrice += newItem.price;
            // }
        },
        removeItemFromCart(state, action) {
            // state.totalQuantity--;
            const id = action.payload;
            // const existingItem = state.items.find((item) => item.id === id);
            // if (existingItem.quantity === 1) {
            state.items = state.items.filter((item) => item.id !== id);
            // } else {
            //   existingItem.quantity--;
            //   existingItem.totalPrice -= existingItem.price;
            // }
        }
    }
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;