import { journeyData } from "@/data/mockdata";
import Image from "next/image";
import React from "react";

const CaseStudiesGrid = ()=>  {
  return (
    <div className="">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3 auto-rows-fr overflow-hidden">
        {/* Left Large Card */}
        <div className="relative rounded-2xl bg-white p-6 sm:p-8 flex flex-col justify-end min-h-70 lg:row-span-2">
          <Image src={'/images/aboutImage1.png'} alt='image' className='absolute inset-0 object-cover -top-10 -left-20' width={250} height={100} />
          <h2 className="relative text-2xl sm:text-3xl font-semibold text-black">
            {journeyData.gridtext.grid1.heading}
          </h2>
          <p className="relative mt-2 text-sm sm:text-base text-neutral-600 max-w-md">
            {journeyData.gridtext.grid1.text}
          </p>
        </div>

        {/* Top Right Card */}
        <div className="rounded-2xl bg-neutral-800 p-6 sm:p-8 lg:col-span-2 flex flex-col justify-end">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">{journeyData.gridtext.grid2.heading}</h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-400">
            {journeyData.gridtext.grid2.text}
          </p>
        </div>

        {/* Middle Right Small Card */}
        <div className="rounded-2xl bg-neutral-800 p-6 flex flex-col justify-end">
          <h3 className="text-xl font-semibold text-white">{journeyData.gridtext.grid3.heading}</h3>
          <p className="mt-2 text-sm text-neutral-400">
            {journeyData.gridtext.grid3.text}
          </p>
        </div>

        {/* Small Accent Card */}
        <div className="relative rounded-2xl bg-white p-6 flex flex-col justify-end overflow-hidden">
          <Image src={'/images/aboutImage2.png'} alt='image' className='absolute inset-0 object-cover -top-10 -left-20' width={250} height={100} />
          <h3 className="relative text-xl font-semibold text-neutral-900">{journeyData.gridtext.grid4.heading}</h3>
          <p className="relative mt-2 text-sm text-neutral-600">
            {journeyData.gridtext.grid4.text}
          </p>
        </div>

        {/* Bottom Full Card */}
        <div className="relative rounded-2xl bg-white p-6 sm:p-8 lg:col-span-3 min-h-40 flex flex-col justify-center items-end overflow-hidden">
          <Image src={'/images/aboutImage3.png'} alt='image' className='absolute inset-0 object-cover -top-15 -left-5 -rotate-25' width={300} height={100} />
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
}

export default CaseStudiesGrid