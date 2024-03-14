import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.shop);

  return (
    <div className=" p-8 flex flex-wrap items-center gap-16 m-1  ">
      {items.map((item) => {
        return (
          <div className="border-2 rounded-xl p-14  relative ">
            <p className="mb-6 text-2xl "> {item.name} </p>
            <img
              className="w-[150px] hover:scale-110 transition-all ease-linear "
              src={item.image}
            />
            <p className="w-[250px] mt-2"> {item.description} </p>

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
