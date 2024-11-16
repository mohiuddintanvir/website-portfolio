import React, { useEffect, useState } from "react";
import "./header.css";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  // Scroll behavior only for large screens
  useEffect(() => {
    const changeNavbarColor = () => {
      // Check if the screen is large before applying the scroll behavior
      if (window.innerWidth >= 1024 && window.scrollY > 0) {
        setNavbar(true);
      } else if (window.innerWidth >= 1024 && window.scrollY === 0) {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeNavbarColor);

    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  // Dynamically assign navbar classes based on state
  const navbarClass = `navbar fixed z-[999] ${
    navbar ? "lg:bg-[#EAB308] opacity-[90%]" : ""
  }`;

  return (
    <div className={navbarClass}>
      {/* Navbar */}
      <div className="navbar w-screen">
        {/* Mobile Menu (dropdown) */}
        <div className="dropdown lg:hidden">
          <label
            tabIndex={0}
            onClick={() => setOpen(!open)}
            className="btn btn-ghost btn-circle bg-white z-10"
          >
            {open ? (
              <AiOutlineClose className="text-lg" />
            ) : (
              <HiOutlineMenuAlt4 className="text-lg" />
            )}
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-sm mt-3 z-[1] p-2 shadow h-[30rem] duration-1000 transform ${
              open ? "translate-x-0" : "-translate-x-[150%]"
            }`}
          >
            {/* Mobile menu links */}
            <li className="text-xl">
              <a href="#/">Home</a>
            </li>
            <li className="text-xl">
              <a href="#about">About</a>
            </li>
            <li className="text-xl">
              <a href="#Work">Work</a>
            </li>
            <li className="text-xl">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Large Screen Navbar */}
        <div
          className={`navbar-center font-bold text-2xl ms-40 hidden lg:flex ${
            navbar ? "text-white" : "text-black"
          }`}
        >
          <h1 className="font-PlayfairDisplaySC font-[700]">
            Mohiuddin
            <span className={` ${navbar ? "text-black" : "text-[#EAB308]"}`}>
              M.
            </span>
          </h1>
        </div>

        <div
          className={`justify-end lg:flex gap-3 font-PlayfairDisplaySC font-[400] hidden ${
            navbar ? "text-white" : "text-black"
          }`}
        >
          <ul className="menu ms-40 menu-horizontal font-bold text-xl">
            <li className="hover:bg-[#EAB308] hover:rounded">
              <a href="#/">Home</a>
            </li>
            <li className="hover:bg-[#EAB308] hover:rounded">
              <a href="#about">About</a>
            </li>
            <li className="hover:bg-[#EAB308] hover:rounded">
              <a href="#Work">Work</a>
            </li>
            <li className="hover:bg-[#EAB308] hover:rounded">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
