
import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
// import { FaLocationDot } from "react-icons/fa6";


const Address = ({ nameAddress, location, children }) => {
    const [activeElement, setActiveElement] = useState("");

    const handleClick = (value) => {
        if (value === activeElement) {
            setActiveElement("");
        } else {
            setActiveElement(value);
        }
    };
    return (
        <>
            <div>
                <div className="text-slate-700">
                    <h2 className="mb-0" id="headingOne">
                        <button
                            className={`${activeElement === `${location}` &&
                                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
                                } group relative flex w-full items-center text-slate-700 border-0 bg-transparent px-5 py-4 text-left transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none text-xl font-semibold`}
                            type="button"
                            onClick={() => handleClick(`${location}`)}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            {nameAddress}
                            <span
                                className={`${activeElement === `${location}`
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0`
                                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <TECollapse
                        show={activeElement === `${location}`}
                        className="!mt-0 !rounded-b-none !shadow-none"
                    >
                        {children}

                    </TECollapse>
                </div>
            </div >
        </>
    )
}

export default Address