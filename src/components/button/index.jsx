import React from "react";
import { Link } from "react-scroll";

const Button = ({ text = "Pesan Sekarang" }) => {
  return (
    <>
      <Link
        to="order"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className="btn__pesan mx-auto mt-3">
        {text}
      </Link>
    </>
  );
};

export default Button;
