import { createSlice } from "@reduxjs/toolkit";

export const basketSlices = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    addSepet: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addSepet } = basketSlices.actions;

export default basketSlices.reducer;
