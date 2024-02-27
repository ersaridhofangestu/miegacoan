import React from "react";
import Cards from "./Cards";
import Image1 from "../../assets/menu/makanan/2product.jpg";
import Image2 from "../../assets/menu/pangsit/2product.jpg";
import Image3 from "../../assets/menu/minuman/2product.jpg";

const Mid = () => {
  return (
    <>
      <div className="w-full p-[1rem] py-10">
        <div className="max-w-[66rem] mx-auto">
          <p className="font-semibold text-2xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-[#ec008c] to-[#00b2d8]">
            Paling laris
          </p>
          <p className="text-center pt-2 pb-7 mx-auto md:text-2xl w-full font-semibold text-slate-600">
            "Kelezatan yang tak terlupakan dalam setiap suapan. Temukan rasa
            yang baru dan penuh kejutan."
          </p>
          <div className="lg:grid lg:grid-cols-3 pt-5 justify-between gap-3  lg:gap-10">
            <Cards
              img={Image1}
              name="Mie Suit"
              paragraf="Tidak ada yang bisa mengalahkan kenikmatan sepiring mie yang
              lezat. Yuk, coba dan rasakan sendiri!"
            />
            <Cards
              img={Image2}
              name="Lumpia Uang"
              paragraf="Nikmati kelezatan lumpia goreng yang renyah di luar dan lembut di dalam, siap memanjakan lidah Anda!"
            />
            <Cards
              img={Image3}
              name="Es Gobak Sodor"
              paragraf="Paduan segar berbagai potongan buah segar, jelly lembut, dan es serut yang pasti menyegarkan tenggorokan!"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mid;
