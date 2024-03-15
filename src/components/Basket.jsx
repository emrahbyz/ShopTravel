import React from "react";
import { useSelector } from "react-redux";
const Basket = () => {
  const carts = useSelector((state) => state.basket.items);

  const total = carts
    .reduce((acc, items) => {
      return acc + items.quantity * items.price;
    }, 0)
    .toFixed(2);

  const totalPrice = (item) => {
    return (item ? item.price * item.quantity : 0).toFixed(2);
  };

  return (
    <div className=" ">
      {carts.map((item, key) => {
        return (
          <div
            className=" flex  flex-col items-center justify-center border-2 rounded-xl p-8 relative "
            key={key}
          >
            <img
              className=" w-[150px]   hover:scale-110 transition-all ease-linear "
              src={item.image}
            />
            <p className="mt-6 text-xl font-medium "> Adet : {item.quantity}</p>
            <p className="w-[250px] mt-2 text-center text-xl">
              {" "}
              {item.description}
            </p>
            <div className="absolute bottom-4 right-12 text-2xl underline">
              Ürünün Toplam Tutarı : {totalPrice(item)}
            </div>
          </div>
        );
      })}
      <div className="absolute right-12 p-4 text-4xl underline">
        Toplam Ürün Tutarı :{total}
      </div>
    </div>
  );
};

export default Basket;
