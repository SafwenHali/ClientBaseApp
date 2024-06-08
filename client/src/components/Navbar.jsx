import React, { useState } from "react";
import { FaReact   } from "react-icons/fa";
import { HiMenu,HiOutlineX } from "react-icons/hi";

import Button from "./shared/button";

const Navbar = () => {
  const pages = [
    { name: "Categories", link: "/categories" },
    { name: "About-us", link: "/swamp" },
  ];
  const [open, setOpen] = useState(false);

  const handleSignIn = () => {
    window.location.href = '/login';
  };

  return (
    <div className="shadow-lg w-full fixed top-0 left-0 z-20 bg-white">
      <div className="w-full h-16">
        <div className="lg:flex items-center justify-between py-3 lg:px-10 px-7">
          {/* Logo and Pages */}
          <div className="flex items-center lg:space-x-6">
            <a href="/" className="flex items-center text-indigo-700 pr-8">
              <FaReact  size="40" />
              <p className="font-semibold text-2xl text-indigo-700 ml-2">LOGO</p>
            </a>
            {/* Links for Desktop */}
            <ul className="hidden lg:flex lg:space-x-6 lg:ml-20">
              {pages.map((page) => (
                <li key={page.name} className="lg:my-0 my-7">
                  <a href={page.link} className="hover:text-black text-indigo-700 font-semibold duration-300">
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div onClick={() => setOpen(!open)} className="text-3xl text-indigo-700 hover:text-black absolute right-8 top-4 cursor-pointer lg:hidden">
            {open ? <HiOutlineX /> : <HiMenu />}
          </div>

          {/* Mobile Navigation Links */}
          <div className={`lg:hidden ${open ? 'block' : 'hidden'} absolute bg-white shadow-xl pb-8 w-full left-0 top-16 transition-all duration-500 ease-in-out`}>
            <ul className="space-y-4 mt-8 px-8">
              {pages.map((page) => (
                <li key={page.name} className="py-2">
                  <a href={page.link} className=" text-black hover:text-indigo-700 text-lg font-semibold duration-300">
                    {page.name}
                  </a>
                </li>
              ))}
              <li>
              <Button rounded="full" 
                color="white"
                size="mobile"
                onClick={handleSignIn}>
              Sign in
            </Button>
              </li>
            </ul>
          </div>

          {/* Desktop Sign-in Button */}
          <div className="hidden lg:block">
            <Button rounded="full" 
                color="white"
                size="md"
                onClick={handleSignIn}>
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
