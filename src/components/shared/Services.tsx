import { servicesData } from "@/data/mockdata";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Services = () => {
  return (
    <div className="relative flex flex-col gap-25 pb-10 overflow-hidden">
      {/* bg image */}
      <Image src={"/images/services-bg-image.png"} alt="" className="absolute z-0 object-cover w-[60%] max-w-[650] right-[0%] lg:top-[-45%] md:top-[-10%] sm:bottom-[0%]" width={200} height={200}/>

      {/* sub section 1 */}
      <div className="mt-20 pl-10 md:w-2/3 z-10">
        <h1 className="font-normal md:text-4xl text-2xl text-gray-600">
            <span>{servicesData.heading.part1}</span>
            <span className="text-white">{servicesData.heading.part2}</span>
            <span>{servicesData.heading.part3}</span>
            <span className="text-white">{servicesData.heading.part4}</span>
            <span>{servicesData.heading.part5}</span>
            <span className="text-gray-400">{servicesData.heading.part6}</span>
        </h1>
      </div>
      {/* sub section 2 */}
      <div className="pl-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-2/3 gap-y-10 gap-x-4 items-end z-10">
        {servicesData.services.map((item) => (
          <div key={item.id} className="flex flex-col gap-15">
            {/*  id */}
            <div>
                <span className="text-gray-400">{item.id}</span></div>
            {/*  content */}
            <div className="flex flex-col gap-7">
              <h1 className="text-white font-medium text-lg">{item.heading}</h1>
              <p className="text-gray-400">{item.text}</p>
            </div>
          </div>
        ))}
        <CustomButton />
      </div>
    </div>
  );
};

export default Services;
