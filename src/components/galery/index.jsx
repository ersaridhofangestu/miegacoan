import React, { useState } from "react";
import {
    TETabs,
    TETabsContent,
    TETabsItem,
    TETabsPane,
} from "tw-elements-react";

import Dimsum from "../../assets/hightlight/dimsum.png"
import DimsumColor from "../../assets/hightlight/dimsumColor.png"

import All from "../../assets/hightlight/menu.png"
import AllColor from "../../assets/hightlight/menuColor.png"

import Mie from "../../assets/hightlight/ramen.png"
import MieColor from "../../assets/hightlight/ramenColor.png"

import Drink from "../../assets/hightlight/poinsettia.png"
import DrinkColor from "../../assets/hightlight/poinsettiaColor.png"


import Alls from "./all"
import Dimsums from "./dimsum";
import Drinks from "./drink"
import Foods from "./foot";

export default function Galery() {
    const [colorsActive, setColorsActive] = useState({
        tab2: "tab1",
    });

    const handleColorsClick = (value) => {
        if (value === colorsActive) {
            return;
        }
        setColorsActive({ ...colorsActive, ...value });
    };

    return (
        <div className="w-full bg-slate-950 py-20 border-b border-transparent">
            <div className="max-w-[66rem] mx-auto border-b border-transparent" name="galery">
                <p className='text-2xl md:text-4xl text-center w-full font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ec008c] to-[#00b2d8]'
                >
                    GALERY
                </p>
                <p className='md:text-2xl w-full text-center font-semibold text-slate-600'>
                    "Terselip Kenikmatan Rahasia di Setiap Gigitan, Temukan Sensasi yang Tak Terlupakan!"
                </p>
                <TETabs>
                    <div className="mx-auto flex justify-around">
                        <TETabsItem
                            onClick={() => handleColorsClick({ ...colorsActive, tab2: "tab1" })}
                            active={colorsActive.tab2 === "tab1"}
                            color="secondary"
                        >
                            <div className="flex lg:gap-3 items-center justify-center">
                                {colorsActive.tab2 !== "tab1" ?
                                    (<img src={All} alt="" width={20} />)
                                    :
                                    (<img src={AllColor} alt="" width={20} />)}
                                All
                            </div>
                        </TETabsItem>
                        <TETabsItem
                            onClick={() => handleColorsClick({ ...colorsActive, tab2: "tab2" })}
                            active={colorsActive.tab2 === "tab2"}
                            color="secondary"
                        >
                            <div className="flex lg:gap-3 items-center justify-center">
                                {colorsActive.tab2 !== "tab2" ?
                                    (<img src={Mie} alt="" width={20} />)
                                    :
                                    (<img src={MieColor} alt="" width={20} />)} Noodles
                            </div>
                        </TETabsItem>
                        <TETabsItem
                            onClick={() => handleColorsClick({ ...colorsActive, tab2: "tab3" })}
                            active={colorsActive.tab2 === "tab3"}
                            color="secondary"
                        >
                            <div className="flex lg:gap-3 items-center justify-center">
                                {colorsActive.tab2 !== "tab3" ?
                                    (<img src={Drink} alt="" width={20} />)
                                    :
                                    (<img src={DrinkColor} alt="" width={20} />)} Drink
                            </div>
                        </TETabsItem>
                        <TETabsItem
                            onClick={() => handleColorsClick({ ...colorsActive, tab2: "tab4" })}
                            active={colorsActive.tab2 === "tab4"}
                            color="secondary"
                        >
                            <div className="flex lg:gap-3 items-center justify-center">
                                {colorsActive.tab2 !== "tab4" ?
                                    (<img src={Dimsum} alt="" width={20} />)
                                    :
                                    (<img src={DimsumColor} alt="" width={20} />)}
                                Dimsum
                            </div>
                        </TETabsItem>
                    </div>
                </TETabs>
                <TETabsContent>
                    <div className="w-full border-b border-transparent">
                        <TETabsPane show={colorsActive.tab2 === "tab1"}>
                            <Alls />
                        </TETabsPane>
                        <TETabsPane show={colorsActive.tab2 === "tab2"}>
                            <Foods />
                        </TETabsPane>
                        <TETabsPane show={colorsActive.tab2 === "tab3"}>
                            <Drinks />
                        </TETabsPane>
                        <TETabsPane show={colorsActive.tab2 === "tab4"}>
                            <Dimsums />
                        </TETabsPane>
                    </div>
                </TETabsContent>
            </div>
        </div>
    );
}