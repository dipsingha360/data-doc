import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar text-white flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto">
      <h1 className="w-full text-4xl uppercase font-bold text-[#00df9a]">
        Data.
      </h1>
      <ul className="hidden sm:flex justify-center items-center ">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Rerources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block sm:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-300"
            : "fixed left-[-100%] ease-in-out duration-300"
        }
      >
        <h1 className="w-full text-4xl uppercase font-bold text-[#00df9a] m-4">
          React.
        </h1>
        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Rerources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
