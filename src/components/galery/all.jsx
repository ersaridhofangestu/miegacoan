import React from 'react'

import Mie1 from "../../assets/menu/makanan/1product.jpg"
import Mie2 from "../../assets/menu/makanan/2product.jpg"
// import Mie3 from "../../assets/menu/makanan/3product.jpg"
import Mie4 from "../../assets/menu/makanan/4product.png"
import Mie5 from "../../assets/menu/makanan/5product.jpg"

// import Pangsit1 from "../../assets/menu/pangsit/1product.jpg"
import Pangsit2 from "../../assets/menu/pangsit/2product.jpg"
import Pangsit3 from "../../assets/menu/pangsit/3product.jpg"
import Pangsit4 from "../../assets/menu/pangsit/4product.jpg"
// import Pangsit5 from "../../assets/menu/pangsit/5product.jpg"
import Pangsit6 from "../../assets/menu/pangsit/6product.jpg"

import Minuman1 from "../../assets/menu/minuman/1product.jpg"
import Minuman2 from "../../assets/menu/minuman/2product.jpg"
import Minuman3 from "../../assets/menu/minuman/3product.jpg"
import Minuman4 from "../../assets/menu/minuman/4product.jpg"


const All = () => {
    return (
        <>
            <div className="mx-auto px-5 py-2">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Mie1}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Pangsit3} />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Minuman1} />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Mie2} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Pangsit2} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Minuman4} />
                        </div>
                    </div>
                </div>
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Mie5}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Pangsit6} />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Minuman3} />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Pangsit4} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Mie4} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Minuman2} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default All