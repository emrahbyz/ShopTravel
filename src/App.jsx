import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsBasket2 } from "react-icons/bs";

import SliderComp from "./components/SliderComp";
import Shop from "./components/Shop";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="flex justify-between">
        <h1 className="text-5xl font-medium tracking-widest m-6  font-mono">
          Shop Travel
        </h1>
        <h1 className="text-4xl flex items-center font-medium  underline  font-mono m-6">
          <p className="mr-4 cursor-pointer"> Sepetim</p>{" "}
          <BsBasket2 className="cursor-pointer" />
        </h1>
      </div>

      <SliderComp />
      <Shop />
    </div>
  );
};

export default App;
