import { createSlice } from "@reduxjs/toolkit";

export const productsData = [
  {
    id: 1,
    name: "Ürün 1",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 1500.99,
    image:
      "https://productimages.hepsiburada.net/s/288/500/110000277635681.jpg",
  },

  {
    id: 2,
    name: "Ürün 2",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 99.99,
    image:
      "https://productimages.hepsiburada.net/s/414/1500/110000442904979.jpg",
  },
  {
    id: 3,
    name: "Ürün 3",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 179.99,
    image:
      "https://productimages.hepsiburada.net/s/777/1500/110000635895234.jpg",
  },
  {
    id: 4,
    name: "Ürün 4",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 169.99,
    image:
      "https://productimages.hepsiburada.net/s/181/1500/110000144461595.jpg",
  },
  {
    id: 5,
    name: "Ürün 5",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 64.99,
    image:
      "https://productimages.hepsiburada.net/s/233/1500/110000215943208.jpg",
  },
  {
    id: 6,
    name: "Ürün 6",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 9999.99,
    image:
      "https://productimages.hepsiburada.net/s/127/1500/110000077439194.jpg",
  },
  {
    id: 7,
    name: "Ürün 7",
    price: 89.99,
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://productimages.hepsiburada.net/s/417/1500/110000446681787.jpg",
  },
];

export const sepetSlices = createSlice({
  name: "shop",
  initialState: productsData,
  reducers: {
    //
  },
});

export const {} = sepetSlices.actions;

export default sepetSlices.reducer;
