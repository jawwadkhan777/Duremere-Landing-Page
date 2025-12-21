import { journeyData } from "@/data/mockdata";
import Image from "next/image";
import React from "react";

const CaseStudiesGrid = () => {
  return (
    <div className="">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3 auto-rows-fr overflow-hidden">
        {/* Left Large Card */}
        <div className="relative rounded-2xl bg-white p-6 sm:p-8 flex flex-col justify-end min-h-[280] lg:row-span-2 overflow-hidden">

  <Image
    src="/images/aboutImage1.png"
    alt="image"
    width={400}
    height={300}
    className="
      absolute
      top-[-10%]
      left-[-15%]
      w-[45%]
      max-w-[250]
      object-contain
      pointer-events-none
    "
  />

  <h2 className="relative z-10 text-2xl sm:text-3xl font-semibold text-black">
    {journeyData.gridtext.grid1.heading}
  </h2>

  <p className="relative z-10 mt-2 text-sm sm:text-base text-neutral-600 max-w-md">
    {journeyData.gridtext.grid1.text}
  </p>
</div>


        {/* Top Right Card */}
        <div className="rounded-2xl bg-neutral-800 p-6 sm:p-8 lg:col-span-2 flex flex-col justify-end">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            {journeyData.gridtext.grid2.heading}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-400">
            {journeyData.gridtext.grid2.text}
          </p>
        </div>

        {/* Middle Right Small Card */}
        <div className="rounded-2xl bg-neutral-800 p-6 flex flex-col justify-end">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">
            {journeyData.gridtext.grid3.heading}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-neutral-400">
            {journeyData.gridtext.grid3.text}
          </p>
        </div>

        {/* Small Accent Card */}
        <div className="relative rounded-2xl bg-white p-6 flex flex-col justify-end overflow-hidden">
          <Image
            src="/images/aboutImage2.png"
            alt="image"
            width={300}
            height={200}
            className="
      absolute
      top-[-10%]
      right-[-10%]
      w-[45%]
      max-w-[250]
      object-contain
      pointer-events-none
    "
          />
          <div className="w-[75%]">
          <h3 className="relative z-10 text-2xl sm:text-3xl font-semibold text-neutral-900">
            {journeyData.gridtext.grid4.heading}
          </h3>

          <p className="relative z-10 mt-2 text-sm sm:text-base text-neutral-600">
            {journeyData.gridtext.grid4.text}
          </p>

          </div>

        </div>

        {/* Bottom Full Card */}
        <div className="relative rounded-2xl bg-white p-6 sm:p-8 lg:col-span-3 min-h-40 flex flex-col justify-end md:items-end overflow-hidden">
          <Image
            src={"/images/aboutImage3.png"}
            alt="image"
            className="absolute object-contain top-[-25%] left-[-3%] -rotate-25 w-[35%] h-[150%] max-w-[250] hidden md:block"
            width={300}
            height={100}
          />
          <div>
            <h2 className="relative text-2xl sm:text-3xl font-semibold text-neutral-900">
              {journeyData.gridtext.grid5.heading}
            </h2>
            <p className="relative mt-2 text-sm sm:text-base text-neutral-600">
              {journeyData.gridtext.grid5.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesGrid;
