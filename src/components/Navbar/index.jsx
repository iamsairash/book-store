import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { GoSearch } from "react-icons/go";
import { CiUser, CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import userAvatar from "../../assets/avatar.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItem = useSelector((state) => state.cart);

  const [currentUser, setCurrentUser] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const navigationLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Check Out", href: "/checkout" },
    { name: "Log Out", href: "/logout" },
  ];

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6 mb-10">
      <nav className="flex justify-between items-center ">
        <div className="flex gap-6 md:gap-16 items-center">
          <Link to="/">
            <HiMiniBars3CenterLeft size={25} />
          </Link>
          <div className="relative flex items-center rounded-sm max-w-[230px] sm:max-w-[296px] h-9 font-secondary">
            <GoSearch size={20} className="absolute inline-block left-2 " />
            <input
              className="rounded-sm px-8 border w-full h-full bg-bgSearch focus:outline-0"
              placeholder="what are you looking for?"
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <div className="relative flex items-center select-none rounded-full">
            {currentUser ? (
              <>
                (
                <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                  <img
                    src={userAvatar}
                    alt="userImg"
                    className={`size-10 rounded-full cursor-pointer ${
                      currentUser ? "ring-2 ring-blue-600" : ""
                    }`}
                  />
                </button>
                )
                {isDropDownOpen && (
                  <div className="absolute right-0 top-7 mt-4 rounded-lg shadow-lg font-secondary p-2">
                    <ul>
                      {navigationLinks.map((item) => (
                        <li onClick={() => setIsDropDownOpen(false)}>
                          <Link
                            to={item.href}
                            className="block px-4 py-1 rounded-md hover:bg-gray-200"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <CiUser size={30} />
              </Link>
            )}
          </div>
          <CiHeart size={30} className="hidden sm:block select-none" />
          <Link
            to="/cart"
            className="flex items-center gap-3 bg-primary text-white font-secondary font-bold pl-4 rounded-md sm:w-37 w-20 h-9"
          >
            <BsCart3 size={25} /> <span>{cartItem.cartItems.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
