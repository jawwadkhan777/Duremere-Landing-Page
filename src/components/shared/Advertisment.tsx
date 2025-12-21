import { advertismentData } from "@/data/mockdata";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const Advertisment = () => {
  return (
    <div className="flex flex-col">
      <div className="px-4 sm:px-8 md:px-20 pt-10 md:pt-20 text-center md:text-left">
        <div
          className="
    text-3xl sm:text-4xl md:text-6xl
    font-bold
    bg-linear-to-b from-gray-400 to-white
    bg-clip-text text-transparent
  "
        >
          {advertismentData.mainHeading}
        </div>

        <div className="mt-4">
          <h1
            className="
      text-4xl sm:text-5xl md:text-8xl
      font-bold
      text-dark
      leading-tight
    "
          >
            {advertismentData.subText1.heading}
          </h1>

          <p
            className="
      text-sm sm:text-base
      text-white
      max-w-2xl
      mt-2
    "
          >
            {advertismentData.subText1.text}
          </p>
        </div>
      </div>

      <div className="relative w-full lg:h-[800] md:h-[600] h-[300] overflow-hidden ">
        <Image
          src="/images/advertismentImage1.png"
          alt="image"
          className="mx-auto h-auto w-full max-w-480 object-top"
          width={200}
          height={200}
        />
              {/* Gradient Overlay */}
  <div
    className="
      absolute
      bottom-0
      left-0
      w-full
      h-[40%]
      bg-linear-to-b
      from-transparent
      to-black
      z-10
    "
  />
      </div>
      

      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 px-8 md:px-20 pb-10 md:py-20 py-10">
        {/* Heading */}
        <h1 className="font-normal text-lg sm:text-xl md:text-4xl text-gray-400 md:max-w-2xl leading-snug">
          <span>{advertismentData.subHeading.part1}</span>
          <span className="text-white font-medium">
            {" "}
            {advertismentData.subHeading.part2}
          </span>
          <span> {advertismentData.subHeading.part3}</span>
          <span className="text-white font-medium">
            {" "}
            {advertismentData.subHeading.part4}
          </span>
          <span> {advertismentData.subHeading.part5}</span>
        </h1>

        {/* Subtext + Button */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
          <p className="font-medium text-sm sm:text-base md:text-lg max-w-xl">
            {advertismentData.subText2}
          </p>
          <CustomButton />
        </div>
      </div>
    </div>
  );
};

export default Advertisment;
