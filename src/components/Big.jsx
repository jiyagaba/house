import React from "react";
import { Carousel } from "@material-tailwind/react";
import first from "../assets/first.jpeg";
import second from "../assets/second.png";
import third from "../assets/third.jpg";

export function Small() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="flex justify-around mx-20">
        <div className="main bg-white shadow-md rounded-md p-2 w-80">
          <div className="imageDiv">
            <img
              src={first}
              alt=""
              className="house w-full h-50 object-cover mb-4 rounded-md "
            />
          </div>
          <div className="card-body">
            <h5 className="text-xl mb-2">Lekki Houses for sale</h5>
            <p className=" font-700">Explore the best Lekki houses for Sale</p>
          </div>
          <ul className="list-group list-group-flush">
            <div className="card-body flex justify-between mt-5">
              <a href="#" className=" hover:underline">
                My real estate
              </a>
              <p className="text-gray-500">July 24, 2023</p>
            </div>
          </ul>
        </div>
        <div className="main bg-white shadow-md rounded-md p-2 w-80">
          <div className="imageDiv">
            <img
              src={second}
              alt=""
              className="w-full h-50 object-cover mb-4 rounded-md "
            />
          </div>
          <div className="card-body">
            <h5 className="text-xl mb-2">Real Estate Agent</h5>
            <p className=" font-700">
              Real Estate Agent in Lagos: Your Gateway to Exceptional Property
              Deals
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <div className="card-body flex justify-between mt-5">
              <a href="#" className=" hover:underline">
                My real estate
              </a>
              <p className="text-gray-500">July 24, 2023</p>
            </div>
          </ul>
        </div>
        <div className="main bg-white shadow-md rounded-md p-2 w-80">
          <div className="imageDiv">
            <img
              src={third}
              alt=""
              className="w-full h-50 object-cover mb-4 rounded-md "
            />
          </div>
          <div className="card-body">
            <h5 className="text-xl mb-2">House For Sale In Lagos</h5>
            <p className=" font-700">
              House for Sale in Lagos: Your Guide to Finding Your Dream Home
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <div className="card-body flex justify-between mt-5">
              <a href="#" className=" hover:underline">
                My real estate
              </a>
              <p className="text-gray-500">July 24, 2023</p>
            </div>
          </ul>
        </div>
      </div>
    </Carousel>
  );
}

export default Small;
