import React from "react";
import testimonial from "../assets/testimomials.jpg";
import logo from "../assets/kgl.png";
import { Carousel } from "@material-tailwind/react";

const Section5 = () => {
  const back5 = {
    backgroundImage: `url(${testimonial})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    // backgroundAttachment: "fixed",
    minHeight: "80vh",
  };
  return (
    <div className="relative mt-20" style={back5}>
      <div className="absolute inset-0 bg-purple opacity-80"></div>

      <Carousel transition={{ duration: 1 }} className="rounded-xl">
        <div className="">
          <div className=" items-center justify-center mt-10 mx-auto lg:p-10  text-white">
            <h1 className="flex justify-center font-Aclonica text-lg lg:text-4xl ">
              Testimonials
            </h1>
            <p className="flex justify-center text-xs lg:text-xl ">
              Hear what our clients have to say about their experience with us
            </p>
            <div className="flex justify-center mt-5">
              <img src={logo} height={50} width={100} alt="" />
            </div>
            <p className="flex justify-center mt-4 text-taiwo font-700 ">
              Taiwo Afolayan
            </p>
            <p className="flex justify-center p-5 lg:mx-80">
              At My real estate, compassionate customer service is their core.
              They put clients in their shoes and delivers exceptional service.
              Their service is top notched and deliver as promised. Please Keep
              it up
            </p>
          </div>
        </div>

        <div className="">
          <div className=" items-center justify-center mt-10 mx-auto lg:p-10  text-white">
            <h1 className="flex justify-center font-Aclonica text-lg lg:text-4xl ">
              Testimonials
            </h1>
            <p className="flex justify-center text-xs lg:text-xl ">
              Hear what our clients have to say about their experience with us
            </p>
            <div className="flex justify-center mt-5">
              <img src={logo} height={50} width={100} alt="" />
            </div>
            <p className="flex justify-center mt-4 text-taiwo font-700 ">
              IBRAHEEM BALOGUN
            </p>
            <p className="flex justify-center p-5 lg:mx-80">
              Very vibrant, reliable and have a robust understanding of property
              business
            </p>
          </div>
        </div>
        <div className="">
          <div className=" items-center justify-center mt-10 mx-auto lg:p-10  text-white">
            <h1 className="flex justify-center font-Aclonica text-lg lg:text-4xl ">
              Testimonials
            </h1>
            <p className="flex justify-center text-xs lg:text-xl ">
              Hear what our clients have to say about their experience with us
            </p>
            <div className="flex justify-center mt-5">
              <img src={logo} height={50} width={100} alt="" />
            </div>
            <p className="flex justify-center mt-4 text-taiwo font-700 ">
              Azeez Zainab Titilope
            </p>
            <p className="flex justify-center p-5 lg:mx-80">
              My real estate agent their service is top notched, they are
              excellent and provides professional advice to their clients before
              making informed decisions when buying a home and landed property.
            </p>
          </div>
        </div>
        <div className="">
          <div className=" items-center justify-center mt-10 mx-auto lg:p-10  text-white">
            <h1 className="flex justify-center font-Aclonica text-lg lg:text-4xl ">
              Testimonials
            </h1>
            <p className="flex justify-center text-xs lg:text-xl ">
              Hear what our clients have to say about their experience with us
            </p>
            <div className="flex justify-center mt-5">
              <img src={logo} height={50} width={100} alt="" />
            </div>
            <p className="flex justify-center mt-4 text-taiwo font-700 ">
              ABDULWAKIL SABA
            </p>
            <p className="flex justify-center p-5 lg:mx-80">
              I have had a wonderful experience with Kendrant real estate
              company. They deliver some of the best services available in the
              real estate industry. The company displays a high level of
              integrity and trust advising their clients on the best available
              property their investment and housing needs. They are always
              available for help with your questions and concerns. I will urge
              anyone to patronize Kendrant real estate company anytime any day.
            </p>
          </div>
        </div>
        <div className="">
          <div className=" items-center justify-center mt-10 mx-auto lg:p-10  text-white">
            <h1 className="flex justify-center font-Aclonica text-lg lg:text-4xl ">
              Testimonials
            </h1>
            <p className="flex justify-center text-xs lg:text-xl ">
              Hear what our clients have to say about their experience with us
            </p>
            <div className="flex justify-center mt-5">
              <img src={logo} height={50} width={100} alt="" />
            </div>
            <p className="flex justify-center mt-4 text-taiwo font-700 ">
            POPOOLA NIMAT
            </p>
            
            <p className="flex justify-center p-5 lg:mx-80">
              I'm happy doing business with this company. Full of professional
              conducts.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Section5;
