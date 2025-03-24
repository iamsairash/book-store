import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemExist = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (!itemExist) {
        state.cartItems.push(action.payload);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product Added To Card",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire(
          "item already exits in cart, (quantity can be increase in cart section)"
        );
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
