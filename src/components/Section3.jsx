import React, { useEffect } from "react";
import ikoyi from "../assets/Ikoyi-Falomo-Roundabout-bridge.jpg";
import Ajah from "../assets/f738af22-d802-4911-a09b-874ab03f586f.jpeg";
import ibeju from "../assets/ibeju-lekki.jpg";
import Epe from "../assets/epe.jpeg";
import lekki from "../assets/lekki-phase1.jpg";
import magodo from "../assets/magodo-gra2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Section3 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="mb-40">
      <div className="mt-20 bg-blue-gray-500"></div>
      <div>
        <h1 className="font-Aclonica mt-16 text-xl  md:text-4xl font-700 text-center">
          Find Properties in These Cities
        </h1>
        <h3 className="text-center  mt-2 font-Nunito text-lg">
          Find your dream home in your ideal location
        </h3>
      </div>
      <div className="">
        <div className="p-3 flex-wrap flex gap-4 justify-around">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex gap-4 main shadow-sm  hover:!shadow-2xl transition-shadow ease-in-out duration-300 md:w-80 w-full rounded"
          >
            <div className="imageDiv">
              <img className="h-full w-[150px]" src={ikoyi} alt="" />
            </div>
            <div className="mt-3">
              <h1>Ikoyi</h1>
              <h3>1 Property</h3>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex gap-4 shadow-sm  hover:!shadow-2xl transition-shadow ease-in-out duration-300 md:w-80 main w-full rounded"
          >
            <div className="imageDiv">
              <img className="h-full w-[150px]" src={Ajah} alt="" />
            </div>
            <div className="mt-3">
              <h1>Ajah</h1>
              <h3>4 Properties</h3>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex gap-4 shadow-sm  hover:!shadow-2xl transition-shadow ease-in-out duration-300 md:w-80 main w-full rounded"
          >
            <div className="imageDiv">
              <img className="h-full w-[150px]" src={Epe} alt="" />
            </div>
            <div className="mt-3">
              <h1>Epe</h1>
              <h3>0 Properties</h3>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex gap-4 shadow-sm  hover:!shadow-2xl transition-shadow ease-in-out duration-300 md:w-80 main w-full rounded"
          >
            <div className="imageDiv">
              <img className="h-full w-[150px]" src={ibeju} alt="" />
            </div>
            <div className="mt-3">
              <h1>Ibeju-Lekki</h1>
              <h3>0 Properties</h3>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex gap-4 shadow-sm  hover:!shadow-2xl transition-shadow ease-in-out duration-300 md:w-80 main w-full rounded"
          >
            <div className="imageDiv">
              <img className="h-full w-[150px]" src={lekki} alt="" />
            </div>
            <div className="mt-3">
              <h1>Lekki</h1>
              <h3>4 Properties</h3>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex gap-4 shadow-sm  hover:!shadow-2xl transition-shadow ease-in-out duration-300  md:w-80 w-full main rounded"
          >
            <div className="imageDiv">
              <img className="h-full w-[150px]" src={magodo} alt="" />
            </div>
            <div className="mt-3">
              <h1>Magodo</h1>
              <h3>0 Properties</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
