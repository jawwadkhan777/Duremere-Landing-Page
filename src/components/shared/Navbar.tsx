"use client";

import { navbarMenuData } from "@/data/mockdata";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Logomark from "@/components/csv/Logomark";
import CustomButton from "./CustomButton";
import Vuesax from "../csv/Vuesax";

const Navbar = () => {
  return (
    <div className="flex justify-center pt-5 px-4">
      <div className="w-full max-w-7xl flex items-center justify-between px-6 py-3 bg-[#17191C] shadow-xs shadow-white rounded-full">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Logomark />
          <h1 className="font-medium text-2xl">
            {navbarMenuData.logoText}
            <span className="text-dark font-medium">Ai</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <Menubar className="border-none bg-transparent flex gap-7">
            {navbarMenuData.menuItems.map((item, index) => (
              <MenubarMenu key={index}>
                <MenubarTrigger className="cursor-pointer bg-transparent text-xs font-normal hover:bg-transparent">
                  {item.item}
                </MenubarTrigger>
              </MenubarMenu>
            ))}
          </Menubar>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex">
          <CustomButton />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center justify-center p-2 rounded-full bg-dark">
              <Vuesax />
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-44 bg-[#17191C] border border-white/10"
            >
              {navbarMenuData.menuItems.map((item, index) => (
                <DropdownMenuItem key={index}>
                  {item.item}
                </DropdownMenuItem>
              ))}

              <DropdownMenuItem className="mt-2 font-medium">
                {navbarMenuData.buttonText}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
