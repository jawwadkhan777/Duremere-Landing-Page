import { aboutData } from "@/data/mockdata";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import CustomCard from "./CustomCard";

const About = () => {
  return (
    <div className="bg-white md:rounded-[60] rounded-3xl md:p-20 p-7 pt-15 flex flex-col items-center gap-10">
      <div className="text-black flex flex-col items-center gap-6 text-center lg:w-2/3">
        <h1 className="font-medium md:text-4xl text-xl ">{aboutData.heading}</h1>
        <p className="font-normal md:text-lg text-sm text-gray-500">
          {aboutData.text}
        </p>
      </div>

      {/* <div className="grid grid-cols-12 gap-2">
        {aboutData.cardsData.map((item, index) => (
          <Card key={index} className="bg-black text-white col-span-5 p-8">
            <CardHeader>
              <CardTitle>{item.heading}</CardTitle>
              <CardDescription className="text-gray-400">{item.text}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div> */} 
      <div className="grid md:grid-cols-12 grid-cols-1 gap-3">
        {/* Card 1 – Narrow */}
        <CustomCard val={"md:col-span-5"} heading={aboutData.cardsData.card1.heading} text={aboutData.cardsData.card1.text} />
        
        {/* Card 2 – Wide */}
        <CustomCard val={"md:col-span-7"} heading={aboutData.cardsData.card2.heading} text={aboutData.cardsData.card2.text} />

        {/* Card 3 – Wide */}
        <CustomCard val={"md:col-span-7"} heading={aboutData.cardsData.card3.heading} text={aboutData.cardsData.card3.text} />

        {/* Card 4 – Narrow */}
        <CustomCard val={"md:col-span-5"} heading={aboutData.cardsData.card4.heading} text={aboutData.cardsData.card4.text} />
      </div>
    </div>
  );
};

export default About;
