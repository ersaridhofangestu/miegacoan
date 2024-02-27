import React from 'react'

import Mie1 from "../../assets/menu/makanan/1product.jpg"
import Mie2 from "../../assets/menu/makanan/2product.jpg"
import Mie3 from "../../assets/menu/makanan/3product.jpg"
import Mie4 from "../../assets/menu/makanan/4product.png"
import Mie5 from "../../assets/menu/makanan/5product.jpg"

const Foods = () => {
    return (
        <>
            <div className="mx-auto px-5 py-2">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Mie1} />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Mie2} />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Mie3} />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Mie4} />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Mie5} />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Foods