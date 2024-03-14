import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.shop);

  return (
    <div className="  p-2 flex flex-wrap items-center gap-16 m-36 justify-center ">
      {items.map((item) => {
        return (
          <div className="border-2 rounded-xl p-16 relative  ">
            <p className="mb-6 text-2xl ml-16 font-medium"> {item.name} </p>

            <img
              className=" w-[150px] hover:scale-110 transition-all ease-linear ml-6  "
              src={item.image}
            />
            <p className="w-[250px] mt-2"> {item.description} </p>

            <div className="flex justify-center mt-6 text-2xl gap-6 mr-6">
              <p className="cursor-pointer">-</p>
              <p>0</p>
              <p className="cursor-pointer">+</p>
            </div>

            <button className="border-2 rounded-xl p-2 absolute right-1 bottom-2 hover:scale-95 transition-all ease-linear">
              Sepete Ekle
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
