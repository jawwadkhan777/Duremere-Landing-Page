import { aboutData } from '@/data/mockdata'
import React from 'react'

type  CustomCardProps = {
  val: string,
  heading: string,
  text: string
}

const CustomCard = ({val, heading, text}: CustomCardProps) => {
  return (
        <div className={`relative ${val} overflow-hidden rounded-2xl bg-[#111615] p-8`}>

    <div className="relative z-10 max-w-xs">
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