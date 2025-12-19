import { aboutData } from '@/data/mockdata'
import Image from 'next/image'
import React from 'react'

type  CustomCardProps = {
  val: string,
  heading: string,
  text: string
}

const CustomCard = ({val, heading, text}: CustomCardProps) => {
  return (
        <div className={`relative ${val} col-span-1 rounded-2xl overflow-hidden bg-[#111615] flex`}>

          {/* background image */}
      <Image src={"/images/aboutImage1.png"} alt='image' className='absolute bg-contain' width={100} height={200} />

    <div className="relative z-10 max-w-xs p-6">
      <h3 className="text-xl font-semibold text-white">
        {heading}
      </h3>
      <p className="mt-3 text-sm text-gray-400">
        {text}
      </p>
    </div>
  </div>
  )
}

export default CustomCard