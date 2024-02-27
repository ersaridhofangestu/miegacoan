import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

const Loction = ({ locationToko, toko, href }) => {
    return (
        <>
            <div className="ml-5 px-5 py-4">
                <strong>{locationToko}</strong>
                <a href={href} className="flex items-center" >
                    <FaLocationDot />
                    {toko}
                </a>

            </div>
        </>
    )
}

export default Loction