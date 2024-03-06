import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="bg-gray-200 flex justify-around h-40 items-center px-4">
      <div>
        <img src={logo} alt="Logo" className="h-12" />
      </div>
      <div className="text-gray-700">
        <h3 className="text-lg mb-2">About</h3>
        <h3 className="text-lg mb-2">Contact</h3>
        <h3 className="text-lg mb-2">Terms & Conditions</h3>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <span className="text-lg flex items-center">
          <i className="text-[#ED165F] cursor-pointer pr-2 fab fa-facebook-f"></i>
          Facebook
        </span>
        <span className="text-lg flex items-center">
          <i className="text-[#ED165F] cursor-pointer pr-2 fab fa-twitter"></i>
          Twitter
        </span>
        <span className="text-lg flex items-center">
          <i className="text-[#ED165F] cursor-pointer pr-2 fab fa-instagram"></i>
          Instagram
        </span>
      </div>
      <div>
        <h3 className="text-lg mb-2">Subscribe to our newsletter</h3>
        <input
          type="text"
          placeholder="Email Address"
          className="w-48 h-10 outline-none pl-2 border-2 border-[#ED165F] rounded-md"
        />
        <button className="h-10 bg-[#ED165F] w-16 text-white rounded-md cursor-pointer hover:bg-gray-900 hover:border-[#ed165f]">
          OK
        </button>
      </div>
      <div className="text-gray-700">
        <h4 className="text-lg mb-2">497 Evergreen Rd, Roseville, CA 95673</h4>
        <h4 className="text-lg mb-2">+44 345 678 903</h4>
        <h4 className="text-lg mb-2">abodexd@mail.com</h4>
      </div>
    </div>
  );
};

export default Footer;
