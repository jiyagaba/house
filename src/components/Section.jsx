import React from "react";
import sango from "../assets/sangotedo-3-Kgl-1-768x950.jpeg";

const Section = () => {
  const backgroundstyle2 = {
    backgroundImage: `url(${sango})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    minHeight: "100px",
    minWidth: "20%",
    height: "50vh",
    borderRadius: "5px",
    class: "imageDiv",
  };

  return (
    <div>
      <div className="p-4 md:p-10 bg-slate-100"></div>
      <div className="">
        <h3 className="mt-2 font-Aclonica text-2xl  md:text-4xl font-700 text-center">
          Featured Properties
        </h3>
        <h4 className="text-center  mt-2 font-Nunito text-xl">
          Handpicked properties by our team
        </h4>
      </div>
      <div
        className="relative w-80 mt-5 mx-auto md:mx-0 md:w-10   md:m-20 main"
        style={backgroundstyle2}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="innermain absolute">
          <h2 className="inner font-Helvetica text-center bg-blue-950 mt-3">
            For Sale
          </h2>
          <h2 className="inner text-center font-Helvetica bg-blue-950 mt-3">
            Featured
          </h2>
        </div>
        <div className="mt-5 p-2 md:text-xl text-lg absolute font-Helvetica text-white font-700">
          <h3 className="md:mt-24 mt-44">#116M</h3>
          <h2 className="mt-2">
            House for Sale in lekki Phase 2-4 Bedroom Detached Duplexes with BQ
            and Study Room
          </h2>
        </div>
      </div>
      <div className="p-4 md:p-10 bg-slate-100"></div>
    </div>
  );
};

export default Section;
