import { servicesData } from "@/data/mockdata";
import React from "react";

const Services = () => {
  return (
    <div className="mt-10 flex flex-col gap-15">
      {/* sub section 1 */}
      <div className="pl-10">
        <h1>{servicesData.heading}</h1>
      </div>
      {/* sub section 2 */}
      <div className="pl-10 grid grid-cols-3 gap-5">
        {servicesData.services.map((item) => (
          <div key={item.id} className="flex flex-col gap-15 w-1/2">
            {/*  id */}
            <div>
                <span className="text-gray-400">{item.id}</span></div>
            {/*  content */}
            <div className="flex flex-col gap-7">
              <h1 className="text-white font-medium">{item.heading}</h1>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
