import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
export const basketSlices = createSlice({
  name: "basket",
  initialState: JSON.parse(localStorage.getItem("cart")) || initialState,
  reducers: {
    addSepet: (state, action) => {
      const product = action.payload;
      const productItems = state.items.find((item) => {
        return item.id === product.id;
      });
      if (productItems) {
        productItems.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addSepet } = basketSlices.actions;

export default basketSlices.reducer;
