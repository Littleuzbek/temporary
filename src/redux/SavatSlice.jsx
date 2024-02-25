import { createSlice } from "@reduxjs/toolkit";

const SavatSlice = createSlice({
  name: "savat",
  initialState: {
    items: [],
    totalPrice: 0,
    totalQuantity: 0
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        state.totalPrice += Number(newItem.price);
        state.totalQuantity++
      } else {
        state.items.push({
          id: newItem.id,
          description: newItem.description,
          img: newItem.img,
          price: Number(newItem.price),
          quantity: 1,
        });
        state.totalQuantity++
        state.totalPrice += Number(newItem.price);
      }
    },
    removeItem(state, action) {
      const productId = action.payload;

      const existingItem = state.items.find(item => item.id === productId)

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== productId);
        state.totalPrice -= existingItem.price;
        state.totalQuantity--
      } else {
        existingItem.quantity--;
        state.totalPrice -= existingItem.price;
        state.totalQuantity--
      }
    },
  },
});

export const SavatActions = SavatSlice.actions;

export default SavatSlice;
