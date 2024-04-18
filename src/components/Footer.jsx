import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-footer text-white flex  justify-between text-center p-3 lg:p-28 gap-20 flex-col md:flex-row ">
      <div className="md:w-1/4">
        <h1 className="text-xl font-700 font-Nunito mb-3">About Us</h1>
        <p className="font-Nunito font-thin">
          We offer a full scope of real services custom fitted to you as a
          homeowner. We have a broad portfolio of detached house, semi-detached,
          lands in Lagos, Abuja, Dubai and London.
        </p>
      </div>
      <div className="w-full md:w-1/4">
        <h1 className="text-xl font-700 font-Nunito  mb-3">Quick Links</h1>
        <ul>
          <a href="">
            {" "}
            <li className="mb-3 font-Nunito font-thin  hover:translate-x-3 ease-in-out transform transition-transform duration-300 hover:text-red-500">
              About Us
            </li>
          </a>{" "}
          <a href="">
            {" "}
            <li className="mb-3 font-Nunito font-thin hover:translate-x-3 ease-in-out transform transition-transform duration-300 hover:text-red-500">
              Terms & Conditions
            </li>
          </a>
          <a href="">
            <li className="mb-3 font-Nunito font-thin hover:translate-x-3 ease-in-out transform transition-transform duration-300 hover:text-red-500">
              User's Guide
            </li>
          </a>
          <a href="">
            <li className="mb-3 font-Nunito font-thin hover:translate-x-3 ease-in-out transform transition-transform duration-300 hover:text-red-500">
              Support Center
            </li>
          </a>
          <a href="">
            <li className="mb-3 font-Nunito font-thin hover:translate-x-3 ease-in-out transform transition-transform duration-300 hover:text-red-500">
              Press Info
            </li>
          </a>
        </ul>
      </div>
      <div className="w-full md:w-1/4">
        <h1 className="text-xl font-700 font-Nunito  mb-3">Contact Us</h1>
        <p className="mb-3 font-Nunito font-thin">info@myrealestateproject.com</p>
        <p className="mb-3 font-Nunito font-thin">
          154 Awolowo Way Ikeja Lagos, Lagos, Nigeria
        </p>
        <p className="mb-3 font-Nunito font-thin">+2347038141774</p>
      </div>
      <div className="md:w-1/4">
        <h1 className="text-xl font-700 font-Nunito  mb-3">Follow Us</h1>
        <div className="flex justify-between gap-0 lg:gap-6 mt-3 text-2xl">
          <a href="">
            <CiFacebook />
          </a>
          <a href="">
          <FaXTwitter />

          </a>
          <a href="">
            <FaYoutube />
          </a>
        </div>
        <h1 className="mt-3 text-xl font-700 font-Nunito hidden md:flex lg:text-center">Subscribe</h1>
      </div>
    </div>
  );
};

export default Footer;
