import React from 'react'

import Minuman1 from "../../assets/menu/minuman/1product.jpg"
import Minuman2 from "../../assets/menu/minuman/2product.jpg"
import Minuman3 from "../../assets/menu/minuman/3product.jpg"
import Minuman4 from "../../assets/menu/minuman/4product.jpg"

const Drink = () => {
    return (
        <>
            <div className="mx-auto px-5 py-2">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Minuman1} />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Minuman2} />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Minuman3} />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Minuman4} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Drink