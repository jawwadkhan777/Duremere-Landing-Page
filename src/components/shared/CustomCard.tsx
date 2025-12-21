import { aboutData } from '@/data/mockdata'
import Image from 'next/image'
import React from 'react'

type  CustomCardProps = {
  val: string,
  heading: string,
  text: string
  img?: string
  pos?: string
}

const CustomCard = ({val, heading, text, img, pos}: CustomCardProps) => {
  return (
        <div className={`relative ${val} col-span-1 rounded-2xl overflow-hidden bg-[#111615] flex flex-col justify-end h-40 md:h-60`}>

          {/* background image */}
      {img && pos=="left" ? <Image src={img} alt='image' className='absolute inset-0 object-cover md:-top-10 md:-left-20 -top-20 -left-35' width={250} height={100} /> : <></>}
      {img && pos=="right" ? <Image src={img} alt='image' className='absolute inset-0 object-cover -top-4 left-130 rotate-30' width={250} height={100} /> : <></>}

    <div className="relative z-10 p-6 md:w-1/2">
      <h3 className="text-xl font-semibold text-white ">
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