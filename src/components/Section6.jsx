import React from "react";
import Small from "./Small";
import Big from "./Big";

const Section6 = () => {
  return (
    <div className=" mt-36">
      <div className="items center mb-16">
        <h1 className="flex justify-center font-Aclonica font-700 text-xl lg:text-4xl">
          Airticles & Tips
        </h1>
        <p className="flex justify-center font-Nunito text-lg">
          Stay informed about the real estate industry
        </p>
      </div>
      <div className="lg:hidden">
        <Small />
      </div>
      <div className="hidden lg:block">
        <Big />
      </div>
    </div>
  );
};

export default Section6;
