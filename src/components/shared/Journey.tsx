import React from 'react'
import { journeyData } from '@/data/mockdata'

const Journey = () => {
  return (
    <div className='flex flex-col gap-10 p-20'>
        <div className='font-normal text-4xl bg-linear-to-b from-gray-400 to-white bg-clip-text text-transparent'>{journeyData.heading}</div>
        <div>
          Grid structure here
        </div>
    </div>
  )
}

export default Journey