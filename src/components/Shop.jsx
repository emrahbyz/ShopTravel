import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, decrementProduct } from "../marketSlices/shopSlices";
import { addSepet } from "../marketSlices/basketSlices";

const Shop = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.shop.productsData);

  const decrement = (item) => {
    dispatch(decrementProduct(item));
  };
  const increment = (item) => {
    dispatch(addProduct(item));
  };
  const addBasket = (item) => {
    dispatch(addSepet(item));
  };
  return (
    <div className="  p-2 flex flex-wrap items-center gap-16 m-36 justify-center ">
      {items.map((item, key) => {
        return (
          <div className="border-2 rounded-xl p-16 relative  " key={key}>
            <p className="mb-6 text-2xl ml-16 font-medium"> {item.name} </p>

            <img
              className=" w-[150px] hover:scale-110 transition-all ease-linear ml-6  "
              src={item.image}
            />
            <p className="w-[250px] mt-2"> {item.description} </p>

            <div className="flex justify-center mt-6 text-2xl gap-6 mr-6">
              <p onClick={() => decrement(item)} className="cursor-pointer">
                -
              </p>
              <p> {item.quantity} </p>
              <p onClick={() => increment(item)} className="cursor-pointer">
                +
              </p>
            </div>

            <button
              onClick={() => addBasket(item)}
              className="border-2 rounded-xl p-2 absolute right-1 bottom-2 hover:scale-95 transition-all ease-linear"
            >
              Sepete Ekle
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
