import React, { useState } from "react";
import navimg from "../assets/kgl.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-custom-blue p-3 md:p-0 flex justify-between items-center">
        <div className="mx-auto">
          <a href="">
            <img className="" src={navimg} height={50} width={80} alt="" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="text-white block md:hidden" onClick={toggleMenu}>
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Off-Canvas Menu */}
        {isOpen && (
          <div className="md:hidden sme:w-10 fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-10 overflow-y-auto opacity-90">
            <h3 className="text-center mt-2">Menu </h3>
            <ul className="text-black p-4 text-lg mt-3 space-y-5 font-Sans">
              <a href="">
                <li className="mb-4">Cities</li>
              </a>
              <a href="">
                <li className="mb-4">About Us</li>
              </a>
              <a href="">
                <li className="mb-4">Listings</li>
              </a>
              <a href="">
                <li className="mb-4">New Developments</li>
              </a>
              <a href="">
                <li className="mb-4">Short Stay</li>
              </a>
              <a href="">
                <li className="mb-4">Real Estate Investments</li>
              </a>
              <a href="">
                <li className="mb-4">Blog</li>
              </a>
              <a href="">
                <li className="mb-4">Contact Us</li>
              </a>
            </ul>
            <div className="mt-20 m-5">
              <button className=" text-white bg-custom-blue p-6 w-60 rounded-br-full hover:bg-orange-700">
                <h3>+ Submit Property</h3>
              </button>
            </div>
          </div>
        )}
        {/* Desktop Menu */}
        <ul className="hidden text-white md:flex space-x-8 px-16 font-Sans">
          <a href="">
            <li>Cities</li>
          </a>
          <a href="">
            <li>About Us</li>
          </a>
          <a href="">
            <li>Listings</li>
          </a>
          <a href="">
            <li>New Developments</li>
          </a>
          <a href="">
            <li>Short Stay</li>
          </a>
          <a href="">
            <li>Real Estate Investments</li>
          </a>
          <a href="">
            <li>Blog</li>
          </a>
          <a href="">
            <li>Contact Us</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
