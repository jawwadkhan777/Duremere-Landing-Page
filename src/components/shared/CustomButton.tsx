import React from 'react'
import { Button } from '../ui/button'
import Star06 from '../csv/Star06'
import { navbarMenuData } from '@/data/mockdata'

const CustomButton = () => {
  return (
    <div>
        <Button className="border-2 border-dark/80 rounded-[50] bg-linear-to-b from-bgGradientDark/0 to-bgGradientLite hover:bg-btn cursor-pointer p-5 flex items-center">
          <Star06 />
          <p className="font-normal text-[400]">
            {navbarMenuData.buttonText}
          </p>
        </Button>
    </div>
  )
}

export default CustomButton