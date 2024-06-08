import React from "react";
import { FaReact, FaInstagram,FaTiktok,FaYoutube,FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () =>{
    return (
        

<footer className="bg-baseColor-700 shadow-xl">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="/" className="text-indigo-700 flex">
              <FaReact  size="30" />
           <p className="font-semibold text-2xl text-indigo-700 ml-2">FROGGY</p>
            </a>
            <div className="flex mt-10 text-gray-900">
            <span className=" mt-1 ml-2 rounded-full p-2 hover:bg-gray-100">
                <FaInstagram  size="30" />
            </span>
            <span className=" mt-1 ml-2 rounded-full p-2 hover:bg-gray-100">
                <FaTiktok  size="30" />
            </span>
            <span className=" mt-1 ml-2 rounded-full p-2 hover:bg-gray-100">
                <FaYoutube  size="30" />
            </span>
            <span className=" mt-1 ml-2 rounded-full p-2 hover:bg-gray-100">
                <FaFacebookF  size="30" />
            </span>
            <span className=" mt-1 ml-2 rounded-full p-2 hover:bg-gray-100">
                <FaXTwitter  size="30" />
            </span>
            
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Resources</h2>
                  <ul className="text-gray-900 dark:text-gray-350 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Follow us</h2>
                  <ul className="text-gray-900 dark:text-gray-350 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Legal</h2>
                  <ul className="text-gray-900 dark:text-gray-350 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-900 sm:text-center dark:text-gray-350">© 2024 <a href="/" className="hover:underline">Safwen™</a>. All Rights Reserved.
          </span>
      </div>
    </div>
</footer>

    )
}
export default Footer