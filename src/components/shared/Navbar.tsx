"use client";

import { navbarMenuData } from "@/data/mockdata";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Logomark from "@/components/csv/Logomark";
import CustomButton from "./CustomButton";

const Navbar = () => {
  
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="w-2/3 flex flex-row  justify-between p-3 bg-[#17191C] shadow-xs shadow-white  rounded-[500]">
        {/* logo part */}
        <div className="flex items-center gap-2">
          <Logomark />
          <h1 className="font-medium text-2xl">
          {navbarMenuData.logoText}
          <span className="text-dark text-2xl font-medium">Ai</span>            
          </h1>
          </div>

        {/* menu part */}
        <div>
          <Menubar className="border-none bg-transparent flex gap-7">
            {navbarMenuData.menuItems.map((item, index) => (
              <MenubarMenu key={index}>
                <MenubarTrigger className="cursor-pointer bg-transparent hover:bg-none text-xs font-normal">
                  {item.item}
                </MenubarTrigger>
              </MenubarMenu>
            ))}
          </Menubar>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden relative bg-btn">
          <DropdownMenu>
                  <DropdownMenuTrigger>...</DropdownMenuTrigger>
                  <DropdownMenuContent>
                      {navbarMenuData.menuItems.map((item, index)=> (
                        <DropdownMenuItem key={index}>{item.item}</DropdownMenuItem>
                      ))}
                      <DropdownMenuItem>{navbarMenuData.buttonText}</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
          
        </div>

        {/* button part */}
        <CustomButton />
      </div>
    </div>
  );
};

export default Navbar;
