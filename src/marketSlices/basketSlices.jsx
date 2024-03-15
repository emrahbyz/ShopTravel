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

      console.log(product);
      const productItems = state.items.find((item) => {
        return item.id === product.id;
      });
      if (productItems) {
        productItems.quantity += product.quantity;
      } else {
        state.items.push({ ...product, quantity: product.quantity });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addSepet } = basketSlices.actions;

export default basketSlices.reducer;
