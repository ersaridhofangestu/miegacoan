import React from 'react'

const Header = ({children}) => {
    return (
        <>
            <p className="mx-auto font-semibold text-3xl md:4xl xl:text-5xl border-b-4 border-[#00b2d8] w-[9.5rem] text-[#ec008c]">
                {children}
            </p>
        </>
    )
}

export default Header