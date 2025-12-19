import { footerData } from '@/data/mockdata'
import React from 'react'
import Logomark from '../csv/Logomark'

const Footer = () => {
  return (
    <div className="relative overflow-hidden">
      {/* background image */}
      <div className="absolute inset-0 md:bg-[url('/images/footerImage.png')] -right-120 -bottom-170 bg-right bg-size-[auto_50%] bg-no-repeat -rotate-40 z-0" />

      <div className='md:p-20 px-8 py-10 bg-white rounded-t-[60] flex flex-col md:gap-5 gap-10'>

      {/* part 1 */}
      <div className='flex flex-col md:flex-row justify-between z-10 gap-10'>
        <div className='flex flex-col gap-3'>
          <h1 className='font-medium md:text-3xl text-2xl text-black md:w-2/3'>{footerData.heading}</h1>
          <p className='font-normal md:text-sm text-xs text-gray-500'>{footerData.text}</p>
        </div>
        <div className='flex flex-col text-black md:gap-4 gap-2'>
          <div>
            <h3 className='text-gray-500 font-medium '>{footerData.callHeading}</h3>
            <p className='font-bold'>{footerData.callText}</p>
          </div>
          <div>
            <h3 className='text-gray-500 font-medium'>{footerData.emailHeading}</h3>
            <p className='font-bold'>{footerData.emailText}</p>
          </div>
        </div>
      </div>

      {/* part 2 */}
      <div className='text-dark md:text-9xl text-5xl font-bold z-10 underline decoration-2 underline-offset-8'>{footerData.boldHeading}</div>

      {/* part 3 */}
      <div className='text-black flex flex-col gap-2 mt-4 z-10'>
        <div className="flex items-center gap-2">
          <Logomark />
          <h1 className="font-medium text-2xl">
          {footerData.logoHeading}
          <span className="text-dark text-2xl font-medium">Ai</span>            
          </h1>
          </div>
        <p className='text-gray-500 md:text-sm text-xs'>{footerData.logoText}</p>
      </div>

      {/* part 4 */}
      <div className='text-black mt-6 md:text-sm text-xs z-10'>
        {footerData.copyrigthText}
      </div>

    </div>

    </div>
    
  )
}

export default Footer