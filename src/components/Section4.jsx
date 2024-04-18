import React from "react";
import banner from "../assets/banner-h-61.jpg";

const Section4 = () => {
  const handleSearch = () => {
    // You can perform the search operation here with the "searchQuery" state.
    // For example, you can send an API request to fetch search results.
    console.log("Search Query:", searchQuery);
    // Add your search logic here...
  };

  const back4 = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    minHeight: "70vh",
  };
  return (
    <div className="mt-16" style={back4}>
      <div className="About p-4 mt-10 ">
        <div className="bg-white p-10 rounded-lg lg:ml-80 hover:!shadow-2xl transition-shadow ease-in-out duration-300 ">
          <h1 className=" font-Aclonica lg:text-4xl mb-3 font-700">About Us</h1>
          <p className="font-400 font-Nunito">
            At My Realty estate, our goal is to provide affordable and secure real
            estate investments that offer a great return on investment.
          </p>
          <p className="font-400 font-Nunito mt-2">
            We offer consultancy and property management services to help our
            clients achieve their real estate goals. We believe that buying real
            estate is a smart investment that shouldn't be delayed, and we're
            committed to providing everyone with the opportunity to own a piece
            of the future that is safe, secure, and affordable.
          </p>

          <button
            onClick={handleSearch}
            className="bg-red-500 text-white rounded-lg  mt-4 w-40 p-3 font-Nunito font-400 hover:bg-red-800"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section4;
