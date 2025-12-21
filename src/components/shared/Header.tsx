import { headerData } from "@/data/mockdata";
import React from "react";
import Icon from "@/components/csv/Icon";
import CustomButton from "./CustomButton";
import { Menubar, MenubarMenu, MenubarTrigger } from "../ui/menubar";

const Header = () => {
  return (
    <div className="mt-20 flex flex-col items-center md:gap-15 gap-10 pb-10 p-5">
      {/* sub section 1 */}
      <div className="flex flex-col items-center gap-10">
        {/* strip part */}
        <div
          className="
  flex flex-wrap items-center justify-center
  gap-1 sm:gap-2
  px-2 sm:px-3 py-1
  bg-white/20
  shadow-md shadow-dark
  rounded-full
  max-w-full
"
        >
          <div
            className="
    border border-dark/80
    rounded-full
    bg-linear-to-b from-bgGradientDark/0 to-bgGradientLite
    px-3 sm:px-4 md:px-5
    py-0.5
    text-xs sm:text-sm md:text-md
    whitespace-nowrap
  "
          >
            <span className="font-normal">{headerData.strip.part1}</span>
          </div>

          <span
            className="
    font-normal
    text-xs sm:text-sm md:text-md
    text-center
  "
          >
            {headerData.strip.part2}
          </span>

          <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 " />
        </div>

        {/* content part */}
        <div className="flex flex-col items-center gap-5 md:w-2/3">
          <h1 className="font-medium md:text-6xl text-3xl text-gray-50/70 text-center md:leading-20">
            {headerData.heading}
          </h1>
          <p className="font-normal md:text-lg text-sm text-center text-gray-300 md:leading-9">
            <span>{headerData.text1.part1}</span>
            <span className="font-medium text-white">
              {headerData.text1.part2}
            </span>
            <span>{headerData.text1.part3}</span>
            <span className="font-medium text-white">
              {headerData.text1.part4}
            </span>
            <span>{headerData.text1.part5}</span>
          </p>
        </div>
        {/* button part */}
        <div>
          <CustomButton />
        </div>
      </div>

      {/* sub section 2 */}
      <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 px-4 text-center">
        {/* description text */}
        <p className="text-gray-500 text-xs sm:text-sm md:text-lg max-w-xl">
          {headerData.text2}
        </p>

        {/* logos / menu */}
        <Menubar
          className="
      border-none bg-transparent
      flex flex-wrap justify-center
      gap-3 sm:gap-4 md:gap-6
    "
        >
          {headerData.logosWrap.map((item, index) => {
            const Logo = item.logoImg;

            return (
              <MenubarMenu key={index}>
                <MenubarTrigger
                  className="
              cursor-pointer
              bg-transparent hover:bg-transparent
              flex items-center gap-1.5
              text-xs sm:text-sm md:text-base
              px-2 py-1
            "
                >
                  {/* Logo */}
                  <Logo />

                  {/* Text */}
                  <span className="text-gray-400 font-semibold whitespace-nowrap">
                    {item.logoText}
                  </span>
                </MenubarTrigger>
              </MenubarMenu>
            );
          })}
        </Menubar>
      </div>
    </div>
  );
};

export default Header;
