import React from 'react'

import { TECarouselItem } from "tw-elements-react";

const Users = ({ id, usersImg, paragraf, className }) => {
    return (
        <>
            <TECarouselItem
                itemID={id}
                className={`relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none ${className} `}
            >
                <div className="flex justify-center h-[100vh]">
                    <div className="max-w-[66rem]">
                        <p className="text-2xl md:text-4xl w-full font-semibold mb-4 text-slate-900 text-center mt-10 bg-clip-text text-transparent bg-gradient-to-r from-[#ec008c] to-[#00b2d8]">
                            TESTIMINIAL
                        </p>
                        <div className='lg:flex justify-center items-center gap-10 text-xl text-slate-200 font-semibold'>
                            <img className="mx-auto mb-5 rounded-full w-[250] " src={usersImg} alt="" />
                            <p className='lg:w-[50rem] text-base font-thin px-4 text-slate-200'>{paragraf}</p>
                        </div>
                    </div>
                </div>
            </TECarouselItem>
        </>
    )
}

export default Users