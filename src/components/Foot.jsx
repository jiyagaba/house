import React from "react";

const Foot = () => {
  return (
    <div>
      <div className="bg-black text-white flex justify-between  p-5 flex-col md:flex-row ">
        <div className="flex justify-around gap-10 w-auto flex-col md:flex-row hidden md:flex ">
          <a href="">
            {" "}
            <li className="hover:text-red-500">Home</li>
          </a>
          <a href="">
            <li className="hover:text-red-500">Listing</li>
          </a>
          <a href="">
            {" "}
            <li className="hover:text-red-500">Property</li>
          </a>
          <a href="">
            <li className="hover:text-red-500">Pages</li>
          </a>
          <a href="">
            <li className="hover:text-red-500">Blog</li>
          </a>
          <a href="">
            <li className="hover:text-red-500">Contact</li>
          </a>
        </div>
        <div className="text-center md:text-left px-0 md:px-0">
          <h1 className="">c 2023.My real estate</h1>
        </div>
      </div>
    </div>
  );
};

export default Foot;
