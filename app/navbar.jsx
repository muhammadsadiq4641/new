import React, { useState } from "react";
import { IoLogoOctocat } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import Drawer from "./Drawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showDrawer = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-[40px] items-center">
          <div className="flex-1">
            <IoLogoOctocat className="text-4xl" />
          </div>
          <div className="flex max-md:hidden items-center gap-12 justify-between">
            <a className="text-black hover:text-gray-400">Home</a>
            <a className="text-black hover:text-gray-400">Lists</a>
            <a className="text-black hover:text-gray-400">Design</a>
            <a className="text-black hover:text-gray-400">Information</a>
            <button>Log In</button>
            <button>Sign In</button>
          </div>
         
            <div onClick={showDrawer}>
              <RiMenu3Fill className="md:hidden block" />
            </div>
        
        </div>
      </div>

      {isOpen &&  
      <Drawer isOpen={isOpen} onClose={handleClose} />
      
      }
    </div>
  );
};

export default Navbar;
