import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import background from "../../assets/hightlight/HEADER.jpg";
import brends from "../../assets/logo/logo-full.png";
import Text1 from "../../assets/text/tagline-1.png";
import Text2 from "../../assets/text/tagline-2.png";
import Text3 from "../../assets/text/tagline-3.png";
import Button from "../button";

export default function hiro() {
  return (
    <>
      <TECarousel
      name="home"
        showControls
        showIndicators
        crossfade
        className="w-full h-[100vh]"
        style={{
          backgroundImage: `url(${background})`,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "multiply",
        }}
        ride="carousel"
        prevBtnIcon={
          <>
            <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </>
        }
        nextBtnIcon={
          <>
            <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </>
        }
        theme={{
          indicator:
            "mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
        }}
      >
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none "
          >
            <div className="flex justify-center h-[100vh]">
              <div className="flex justify-center items-center flex-col">
                <img className="mx-auto mb-5" src={brends} alt="" width={250} />
                <img src={Text1} alt="" width={350} />
                <div className="mx-auto ml-20">
                  <Button />
                </div>
              </div>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="flex justify-center h-[100vh]">
              <div className="flex justify-center items-center flex-col">
                <img className="mx-auto mb-5" src={brends} alt="" width={250} />
                <img src={Text2} alt="" width={350} />
                <div className="mx-auto ml-20">
                  <Button />
                </div>
              </div>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="flex justify-center h-[100vh]">
              <div className="flex justify-center items-center flex-col">
                <img className="mx-auto mb-5" src={brends} alt="" width={250} />
                <img src={Text3} alt="" width={350} />
                <div className="mx-auto ml-20">
                  <Button />
                </div>
              </div>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}
