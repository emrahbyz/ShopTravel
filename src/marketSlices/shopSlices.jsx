import { createSlice } from "@reduxjs/toolkit";

export const productsData = [
  {
    id: 1,
    name: "Ürün 1",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 1500.99,
    image:
      "https://productimages.hepsiburada.net/s/288/500/110000277635681.jpg",
    quantity: 0,
  },

  {
    id: 2,
    name: "Ürün 2",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 99.99,
    image:
      "https://productimages.hepsiburada.net/s/414/1500/110000442904979.jpg",
    quantity: 0,
  },
  {
    id: 3,
    name: "Ürün 3",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 179.99,
    image:
      "https://productimages.hepsiburada.net/s/777/1500/110000635895234.jpg",
    quantity: 0,
  },
  {
    id: 4,
    name: "Ürün 4",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 169.99,
    image:
      "https://productimages.hepsiburada.net/s/181/1500/110000144461595.jpg",
    quantity: 0,
  },
  {
    id: 5,
    name: "Ürün 5",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 64.99,
    image:
      "https://productimages.hepsiburada.net/s/233/1500/110000215943208.jpg",
    quantity: 0,
  },
  {
    id: 6,
    name: "Ürün 6",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 9999.99,
    image:
      "https://productimages.hepsiburada.net/s/127/1500/110000077439194.jpg",
    quantity: 0,
  },
  {
    id: 7,
    name: "Ürün 7",
    price: 89.99,
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://productimages.hepsiburada.net/s/417/1500/110000446681787.jpg",
    quantity: 0,
  },
];
const initialState = {
  productsData: productsData,
};

export const sepetSlices = createSlice({
  name: "shop",
  initialState: JSON.parse(localStorage.getItem("number")) || initialState,
  reducers: {
    addProduct: (state, action) => {
      const { id } = action.payload;

      const product = state.productsData.find((item) => item.id === id);

      if (product) {
        product.quantity += 1;
        localStorage.setItem("number", JSON.stringify(state));
      }
    },
    decrementProduct: (state, action) => {
      const { id } = action.payload;

      const product = state.productsData.find((item) => item.id === id);

      if (product && product.quantity > 0) {
        product.quantity -= 1;
        localStorage.setItem("number", JSON.stringify(state));
      }
    },
  },
});

export const { addProduct, decrementProduct } = sepetSlices.actions;

export default sepetSlices.reducer;
