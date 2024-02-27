import React from 'react'


import Pangsit1 from "../../assets/menu/pangsit/1product.jpg"
import Pangsit2 from "../../assets/menu/pangsit/2product.jpg"
import Pangsit3 from "../../assets/menu/pangsit/3product.jpg"
import Pangsit4 from "../../assets/menu/pangsit/4product.jpg"
import Pangsit5 from "../../assets/menu/pangsit/5product.jpg"
// import Pangsit6 from "../../assets/menu/pangsit/6product.jpg"


const Dimsum = () => {
    return (
        <>
            <div className="mx-auto px-5 py-2">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Pangsit1} />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Pangsit2} />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Pangsit3} />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Pangsit4} />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Pangsit5} />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={Pangsit1} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dimsum