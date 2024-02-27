import React from "react";

const Hamburger = ({ onChange, checked }) => {
  return (
    <>
      <input type="checkbox" id="checkbox" checked={checked} onChange={onChange} />
      <label htmlFor="checkbox" className="toggle">
        <div className="bar bar__top"></div>
        <div className="bar bar__middle"></div>
        <div className="bar bar__bottom"></div>
      </label>
    </>
  );
};

export default Hamburger;
