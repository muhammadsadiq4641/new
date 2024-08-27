import React from "react";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const Drawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed inset-y-0 bg-white right-0 w-64 px-4 pt-5 h-full shadow-lg transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <IoClose
          onClick={onClose}
          className="text-2xl text-black cursor-pointer"
        />
          <div className="flex flex-col items-center gap-7 mt-10">
          <a className="text-black hover:text-gray-400">Home</a>
          <a className="text-black hover:text-gray-400">Lists</a>
          <a className="text-black hover:text-gray-400">Design</a>
          <a className="text-black hover:text-gray-400">Information</a>
          <div className="flex gap-5">
            <button>Log In</button>
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
