import { configureStore } from "@reduxjs/toolkit";
import sepetReducer from "./marketSlices/basketSlices";
import shopSlices from "./marketSlices/shopSlices";

export const store = configureStore({
  reducer: {
    shop: shopSlices,
    basket: sepetReducer,
  },
});
