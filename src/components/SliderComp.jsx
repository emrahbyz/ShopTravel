import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="  ">
      <Slider {...settings}>
        <div className="!flex items-cente mr-6 border-4 border-b-cyan-700 mt-8 p-4 ">
          <div>
            <div className="text-5xl  flex items-center justify-center -tracking-tighter ">
              Öne Çıkan Ürünler
            </div>
            <div>
              <h3 className="flex items-center justify-center">
                <img
                  className="w-[240px]"
                  src="https://productimages.hepsiburada.net/s/503/500/110000557306706.jpg"
                  alt=""
                />
              </h3>
            </div>

            <div className="text-lg my-4 text-center -tracking-tighter">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              provident asperiores repellendus perferendis, soluta itaque
              exercitationem illo iusto, inventore voluptatibus pariatur aliquid
              sequi. Neque numquam rem saepe libero est eaque.
              <button className="border-2 ml-12 rounded-full p-1 bg-slate-50  text-2xl  -tracking-tighter hover:scale-95">
                Ürünü İncele
              </button>
            </div>
          </div>
        </div>
        <div className="!flex items-cente mr-6 border-4 border-b-cyan-700 mt-8 p-4  ">
          <div>
            <div className="text-5xl  flex items-center justify-center -tracking-tighter  ">
              Öne Çıkan Ürünler
            </div>
            <div>
              <h3 className="flex items-center justify-center ">
                <img
                  className="w-[240px]"
                  src="https://productimages.hepsiburada.net/s/127/1500/110000077439194.jpg"
                  alt=""
                />
              </h3>
            </div>

            <div className="text-lg my-4 text-center -tracking-tighter">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              provident asperiores repellendus perferendis, soluta itaque
              exercitationem illo iusto, inventore voluptatibus pariatur aliquid
              sequi. Neque numquam rem saepe libero est eaque.
              <button className="border-2 ml-12 rounded-full p-1 bg-slate-50  text-2xl  -tracking-tighter hover:scale-95">
                Ürünü İncele
              </button>
            </div>
          </div>
        </div>

        <div className="!flex items-cente mr-6 border-4 border-b-cyan-700 mt-8 p-4 ">
          <div>
            <div className="text-5xl  flex items-center justify-center -tracking-tighter ">
              Öne Çıkan Ürünler
            </div>
            <div>
              <h3 className="flex items-center justify-center">
                <img
                  className="w-[240px]"
                  src=" https://productimages.hepsiburada.net/s/202/500/110000173377540.jpg"
                  alt=""
                />
              </h3>
            </div>

            <div className="text-lg my-4 text-center -tracking-tighter">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              provident asperiores repellendus perferendis, soluta itaque
              exercitationem illo iusto, inventore voluptatibus pariatur aliquid
              sequi. Neque numquam rem saepe libero est eaque.
              <button className="border-2 ml-12 rounded-full p-1 bg-slate-50  text-2xl  -tracking-tighter hover:scale-95">
                Ürünü İncele
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
