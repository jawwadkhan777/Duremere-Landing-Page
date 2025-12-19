import { headerData } from '@/data/mockdata'
import React from 'react'
import Icon from "@/components/csv/Icon";
import CustomButton from './CustomButton';
import { Menubar, MenubarMenu, MenubarTrigger } from '../ui/menubar';

const Header = () => {
  return (
    <div className='mt-20 flex flex-col items-center gap-15 pb-10'>
      {/* sub section 1 */}
      <div className='flex flex-col items-center gap-10'>
        {/* strip part */}
      <div className='flex justify-center items-center gap-2 shadow-md shadow-dark bg-white/20 rounded-[60] pl-3 pr-5 p-1'>
        <div className='border-2 border-dark/80 rounded-[60] bg-linear-to-b from-bgGradientDark/0 to-bgGradientLite pt-0.5 pb-0.5 pl-5 pr-5'>
          <span className='font-normal text-md'>{headerData.strip.part1}</span>
        </div>
        <span className='font-normal text-md'>{headerData.strip.part2}</span>
        <Icon />
      </div>
      {/* content part */}
      <div className='flex flex-col items-center gap-5'>
        <h1 className='w-2/3 font-medium text-6xl text-gray-50/70 text-center leading-20'>{headerData.heading}</h1>
        <p className='w-2/3 font-normal text-lg text-center text-gray-300 leading-9'>{headerData.text1}</p>
      </div>
      {/* button part */}
      <div>
        <CustomButton />
      </div>
      </div>

      {/* sub section 2 */}
      <div className='flex flex-col justify-center items-center gap-2'>
        <p className='text-gray-500'>{headerData.text2}</p>
        {
          <Menubar className='border-none bg-transparent flex gap-6'>
            {
              headerData.logosWrap.map((item, index)=> {
                const Logo = item.logoImg;
                return(
                  (
                <MenubarMenu key={index}>
                  <MenubarTrigger className="cursor-pointer bg-transparent hover:bg-none text-sm font-normal text-[16px] flex gap-1 items-center">
                    <Logo />
                    <span className='text-gray-400 font-bold'>
                    {item.logoText}

                    </span>
                  </MenubarTrigger>
                </MenubarMenu>
              )
                )
              })
            }
          </Menubar>
        }
      </div>
    </div>
  )
}

export default Header