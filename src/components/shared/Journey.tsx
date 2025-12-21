import React from "react";
import { journeyData } from "@/data/mockdata";
import CaseStudiesGrid from "./CaseStudiesGrid";

const Journey = () => {
  return (
    <div
      className="
  flex flex-col
  gap-6 sm:gap-8 md:gap-10
  px-8 md:px-20
  py-10 md:py-20
"
    >
      <div
        className="
      font-medium
      text-2xl sm:text-3xl md:text-4xl
      bg-linear-to-b from-gray-400 to-white
      bg-clip-text text-transparent
      md:text-left
    "
      >
        {journeyData.heading}
      </div>

      <div className="w-full">
        <CaseStudiesGrid />
      </div>
    </div>
  );
};

export default Journey;
