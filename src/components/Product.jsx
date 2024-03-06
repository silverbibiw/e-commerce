import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { Link } from "react-router-dom";

const Product = ({ products }) => {
  console.log(products);
  const { id, image, title, price } = products;
  return (
    <>
      <div className="flex flex-col p-3 justify-between text-start border border-[#e4e4e4] w-72 h-96 mb-4 relative overflow-hidden group transition items-center pt-5 rounded-lg mx-auto cursor-pointer hover:shadow-slate-500 hover:shadow-2xl">
        {/* image */}
        <div className="w-full flex justify-center p-10">
          <img
            className="max-h-[160px] group-hover:scale-110 transition duration-300"
            src={image}
            alt="image"
          />
        </div>

        {/* button */}
        <div className="absolute -top-[0%] right-[0%] group-hover:top-[0%] p-2 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full h-full bg-white bg-opacity-30 group-hover:bg-opacity-50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <button className="flex justify-center items-center text-white w-12 h-12 bg-blue-500 rounded-full shadow-lg">
            <FaShoppingCart className="text-3xl" />
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-gray-600 hover:text-gray-800 rounded-full shadow-xl"
          >
            <IoIosHeart className="text-2xl" />
          </Link>
        </div>

        {/* title and price */}
        <div className="text-start">
          <Link to={`/product/${id}`}>
            <h2 className="font-samibold mb-1">{title}</h2>
          </Link>
          <div className="font-semibold">${price}</div>
        </div>
      </div>
    </>
  );
};

export default Product;
