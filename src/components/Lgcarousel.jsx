import React from "react";
import { MdApartment } from "react-icons/md";
import { FcHome } from "react-icons/fc";
import { FaHotel } from "react-icons/fa";
import { RiHotelLine } from "react-icons/ri";

const Lgcarousel = () => {
  return (
    <div>
      <div className="flex justify-around mt-3   ">
        <div className="card p-20">
          <div className="bg-new-blue h-20 w-20 rounded-full hover:bg-orange-600">
            <a className="text-white flex justify-center" href="">
              <MdApartment className="text-6xl mt-2" />
            </a>
          </div>
          <h3 className="text-new-blue mt-2">Apartment</h3>
        </div>
        <div className="card p-20">
          <div className="bg-new-blue h-20 w-20 rounded-full hover:bg-orange-600">
            <a className="text-white flex justify-center" href="">
              <FcHome className="text-6xl mt-1" />
            </a>
          </div>
          <h3 className="text-new-blue mt-2">Terrace</h3>
        </div>
        <div className="card p-20">
          <div className="bg-new-blue h-20 w-20  rounded-full hover:bg-orange-600">
            <a className="text-white flex justify-center" href="">
              <FaHotel className="text-5xl mt-3" />
            </a>
          </div>
          <h3 className="text-new-blue mt-2">Duplex</h3>
        </div>
        <div className="card p-20">
          <div className="bg-new-blue h-20 w-20 rounded-full hover:bg-orange-600">
            <a className="text-white flex justify-center" href="">
              <RiHotelLine className="text-6xl mt-2 " />
            </a>
          </div>
          <h3 className="text-new-blue mt-2">Land</h3>
        </div>
      </div>
    </div>
  );
};

export default Lgcarousel;
