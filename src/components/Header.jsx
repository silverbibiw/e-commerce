import React from "react";
import mainLogo from "../assets/logo.svg";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { NavLink, BrowserRouter as Router } from "react-router-dom";

function Header() {
  return (
    <Router>
      <section className="containerm-0 w-full my-12 relative">
        <div className="flex justify-between items-center py-7 bg-[#F5F5F5] px-36">
          <nav>
            <ul className="flex justify-between items-center gap-12">
              <li className="font-semibold text-black  hover:text-pink-500 dark:hover:text-white duration-200 cursor-pointer">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="font-semibold text-black  hover:text-pink-500 dark:hover:text-white duration-200 cursor-pointer">
                <NavLink to="/clothes">Clothes</NavLink>
              </li>
              <li className="font-semibold text-black  hover:text-pink-500 dark:hover:text-white duration-200 cursor-pointer">
                <NavLink to="/shoes">Shoes</NavLink>
              </li>
              <li className="font-semibold text-black  hover:text-pink-500 dark:hover:text-white duration-200 cursor-pointer">
                <NavLink to="/accessories">Accessories</NavLink>
              </li>
            </ul>
          </nav>
          <a href="#">
            <img src={mainLogo} alt="safari logo" />
          </a>

          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="search-bar"
              />
              <FaSearch className="icon text-xl text-gray-600 group-hover:text-primary hover:color-pink absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>

            {/* Order-button section */}
            <button className="relative p-3">
              <NavLink to="/login">
                <IoPersonSharp className="icon text-xl text-gray-600 dark:text-gray-400" />
              </NavLink>
            </button>

            <button className="relative p-3">
              <NavLink to="/orders">
                <FaShoppingCart className="icon text-xl text-gray-600 dark:text-gray-400" />
              </NavLink>
            </button>

            <button className="relative p-3">
              <NavLink to="/favorites">
                <IoIosHeart className="icon text-xl text-gray-600 dark:text-gray-400" />
              </NavLink>
            </button>
          </div>
        </div>
      </section>
    </Router>
  );
}

export default Header;
