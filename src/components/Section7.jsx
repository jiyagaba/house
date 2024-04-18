import React from "react";

const Section7 = () => {
  const handleSearch = () => {
    // You can perform the search operation here with the "searchQuery" state.
    // For example, you can send an API request to fetch search results.
    console.log("Search Query:", searchQuery);
    // Add your search logic here...
  };
  return (
    <div>
      <div className="register p-9 mt-36 md:flex justify-between">
        <div>
          <h1 className="text-white flex justify-center mb-2  text-lg md:text-4xl font-Aclonica">
            Become A Real Estate Agent
          </h1>
          <p className="text-white text-xs flex justify-center md:justify-normal md:text-xl font-Nunito">
            Join our team and build your career in real estate
          </p>
        </div>

        <div className=" mx-20 md:mx-0">
          <button
            onClick={handleSearch}
            className="bg-white text-red-500 rounded-lg  mt-4 w-40 p-3 font-Nunito font-700  "
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section7;
