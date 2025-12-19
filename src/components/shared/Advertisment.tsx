import { advertismentData } from '@/data/mockdata'
import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'

const Advertisment = () => {
  return (
    <div className='flex flex-col gap-10'>
        <div className="px-4 sm:px-8 md:px-20 py-10 md:py-20 text-center md:text-left">

  <div className="
    text-3xl sm:text-4xl md:text-6xl
    font-bold
    bg-linear-to-b from-gray-400 to-white
    bg-clip-text text-transparent
  ">
    {advertismentData.mainHeading}
  </div>

  <div className="mt-4">
    <h1 className="
      text-4xl sm:text-5xl md:text-8xl
      font-bold
      text-dark
      leading-tight
    ">
      {advertismentData.subText1.heading}
    </h1>

    <p className="
      text-sm sm:text-base
      text-white
      max-w-2xl
      mt-2
    ">
      {advertismentData.subText1.text}
    </p>
  </div>

</div>


        <div className="relative w-full h-[800] overflow-hidden">
            <Image src="/images/advertismentImage1.png" alt='image' className='mx-auto h-auto w-full max-w-480 object-top' width={200} height={200} />
        </div>

        <div className='p-20 flex flex-col gap-15'>
            <h1 className="font-normal text-4xl text-gray-400">{advertismentData.subHeading}</h1>
            <div className='flex flex-col gap-5'>
                <p className='font-medium'>{advertismentData.subText2}</p>
                <CustomButton />
            </div>
        </div>
    </div>
  )
}

export default Advertisment