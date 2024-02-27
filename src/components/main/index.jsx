import React from "react";
import Top from "./Top";
import Mid from "./Mid";
import Bottom from "./Bottom";

const Main = () => {
  return (
    <div className="relative bg-slate-950 w-full py-20">
      <div name="about">
        <Top />
        <Mid />
        <Bottom />
      </div>
    </div >
  );
};

export default Main;
