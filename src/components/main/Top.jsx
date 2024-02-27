import React from "react";
import Image from "./Image";
import Button from "../button";

const Top = () => {
  return (
    <div className="relative block w-full h-auto px-[1rem] md:px-0 " >
      <div className="mx-auto max-w-[66rem] grid lg:grid-cols-2 md:gap-10 justify-center">
        <div className="py-10 md:py-20">
          <Image />
        </div>
        <div className="py-[4rem] flex flex-col gap-5 md:justify-start px-3 lg:px-0">
          <p className="text-2xl md:text-4xl w-full font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ec008c] to-[#00b2d8]">
            ABOUT
          </p>
          <p className="md:text-2xl w-full font-semibold text-slate-600">
            "Mie Gacoan" adalah merk dagang dari jaringan restoran mie pedas
            terkemuka di Indonesia, anak perusahaan PT Pesta Pora Abadi. Berdiri
            sejak 2016, kini menjadi market leader terutama di Jawa Timur, Jawa
            Tengah, Jawa Barat, dan Kepulauan Bali, dengan rencana ekspansi
            nasional. Dengan konsep bersantap modern dan harga terjangkau, "Mie
            Gacoan" telah meraih apresiasi tinggi dari puluhan ribu pelanggan
            setiap bulannya. Rasakan sensasi berbeda dan nikmati makanan lezat
            kami, hanya di "Mie Gacoan" - tempat makan favorit untuk mahasiswa,
            pelajar, dan keluarga. Ayo kunjungi dan rasakan pengalaman bersantap
            yang memikat!
          </p>
          <div className="-ml-0">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
