import { footerData } from '@/data/mockdata'
import React from 'react'
import Logomark from '../csv/Logomark'

const Footer = () => {
  return (
    <div className="relative overflow-hidden">
      {/* background image */}
      <div className="absolute inset-0 bg-[url('/images/footerImage.png')] -right-120 -bottom-170 bg-right bg-size-[auto_50%] bg-no-repeat -rotate-40 z-0" />

      <div className='p-20 bg-white rounded-t-[60] flex flex-col gap-5'>

      {/* part 1 */}
      <div className='flex justify-between z-10'>
        <div className='flex flex-col gap-3'>
          <h1 className='font-medium text-3xl text-black w-2/3'>{footerData.heading}</h1>
          <p className='font-normal text-sm text-gray-500'>{footerData.text}</p>
        </div>
        <div className='flex flex-col text-black gap-4'>
          <div>
            <h3 className='text-gray-500 font-medium'>{footerData.callHeading}</h3>
            <p className='font-bold'>{footerData.callText}</p>
          </div>
          <div>
            <h3 className='text-gray-500 font-medium'>{footerData.emailHeading}</h3>
            <p className='font-bold'>{footerData.emailText}</p>
          </div>
        </div>
      </div>

      {/* part 2 */}
      <div className='text-dark text-9xl font-bold z-10'>{footerData.boldHeading}</div>

      {/* part 3 */}
      <div className='text-black flex flex-col gap-2 mt-4 z-10'>
        <div className="flex items-center gap-2">
          <Logomark />
          <h1 className="font-medium text-2xl">
          {footerData.logoHeading}
          <span className="text-dark text-2xl font-medium">Ai</span>            
          </h1>
          </div>
        <p className='text-gray-500'>{footerData.logoText}</p>
      </div>

      {/* part 4 */}
      <div className='text-black mt-6 z-10'>
        {footerData.copyrigthText}
      </div>

    </div>

    </div>
    
  )
}

export default Footer