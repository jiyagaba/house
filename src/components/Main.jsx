import React, { useState } from "react";
import backgroundimg from "../assets/House-for-sale-in-Lekki2.jpeg";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // You can perform the search operation here with the "searchQuery" state.
    // For example, you can send an API request to fetch search results.
    console.log("Search Query:", searchQuery);
    // Add your search logic here...
  };

  const backgroundstyle = {
    backgroundImage: `url(${backgroundimg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    minHeight: "120vh",
  };

  return (
    <div className="relative " style={backgroundstyle}>
      <div className=" absolute inset-0 bg-custom-blue opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="find text-3xl mt--5  md:text-6xl text-center md:text-left">
          Find The Perfect Property Here
        </h1>
        <h4 className="text-lg font-Nunito mx-1 mt-4 text-center">
          Browse our extensive selection of properties to find your dream home
        </h4>
        <div className="flex w-72 md:w-auto justify-around mt-7">
          <div className="scrollhider overflow-x-auto  max-w-screen-md">
            <ul className="flex space-x-10 font-Nunito">
              <li className="flex-shrink-0">
                <button className="bg-white text-black p-3 w-28 rounded-full hover:bg-blue-800">
                  Rent
                </button>
              </li>
              <li className="flex-shrink-0">
                <button className="bg-white text-black p-3 w-28 rounded-full hover:bg-blue-800">
                  Sale
                </button>
              </li>
              <li className="flex-shrink-0">
                <button className="bg-white text-black p-3 w-44 rounded-full hover:bg-blue-800">
                  New Developments
                </button>
              </li>
              <li className="flex-shrink-0">
                <button className="bg-white text-black p-3 w-20 rounded-full hover:bg-blue-800">
                  Land
                </button>
              </li>
              <li className="flex-shrink-0">
                <button className="bg-white text-black p-3 w-40 rounded-full hover:bg-blue-800">
                  For Commercial
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:p-2 bg-white mt-20 rounded-3xl w-80 md:w-auto  space-x-5  md:rounded-full">
          <input
            className="form-control rounded-full w-72 mx-3 md:w-64 p-3 border border-black border-opacity-50 mt-3 focus:border-opacity-100 font-Nunito text-blue-800"
            type="text"
            placeholder="Enter keyword..."
          />
          <h2 className="bg-white text-blue-800 form-control rounded-full w-72 md:w-40 p-3 border border-black border-opacity-50 mt-3 focus:border-opacity-100 font-Nunito">
            Property Type
          </h2>
          <h2 className="bg-white text-blue-800 form-control rounded-full w-72 md:w-40 p-3 border border-black border-opacity-50 mt-3 focus:border-opacity-100 font-Nunito">
            Location
          </h2>
          <h2 className="bg-white text-blue-800 mt-3 form-control rounded-full w-72 md:w-36 p-3 border border-black border-opacity-50 focus:border-opacity-100 font-Nunito">
            Rooms
          </h2>
          <div className="flex mb-2 space-y-5">
            <h2 className=" text-blue-800 mt-3 font-extrabold  w-72 md:w-36 p-3  font-Nunito">
              Advanced :
            </h2>
            <button
              onClick={handleSearch}
              className="bg-red-500 text-white rounded-full w-52 mx-3 md:w-52 hover:bg-green-400"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
