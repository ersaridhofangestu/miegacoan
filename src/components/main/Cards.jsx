import React from "react";
import { Link } from "react-scroll";
const Cards = ({ img, name, paragraf }) => {
  return (
    <>
      <div className="card">
        <img src={img} alt="halllo" className="object" />
        <div className="card__content text-white/90">
          <p className="card__title">{name}</p>
          <p className="card__description">{paragraf}</p>
          <Link to="order"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="menu__buy">
            Beli sekarang!
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cards;
