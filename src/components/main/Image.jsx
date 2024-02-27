import React from "react";
import Image1 from "../../assets/ourOutlets/SOLO2.jpg";
import Image2 from "../../assets/ourOutlets/BANDUNG1.jpg";
import Image3 from "../../assets/ourOutlets/SEMARANG1.jpg";
import Image4 from "../../assets/ourOutlets/CIREBON.jpg";

const Image = () => {
  return (
    <div className="mx-auto grid items-center grid-cols-2 gap-5">
      <img src={Image1} className="mt-10 rounded w-full" alt="" />
      <img src={Image2} className="rounded w-full" alt="" />
      <img src={Image3} className="rounded w-full" alt="" />
      <img src={Image4} className="-mt-10 rounded w-full" alt="" />
    </div>
  );
};

export default Image;
