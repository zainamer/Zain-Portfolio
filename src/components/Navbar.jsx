// import assets from '../assets/assets'
// import ThemeChange from "./ThemeChange";

import { imgs } from "../assets/assets";
import { Color } from "../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <div
      className="flex items-center justify-between mx-auto px-3 fixed z-10 left-0 right-0  w-[60vw] sm:w-[80vw] rounded-2xl shadow-sm shadow-blue-400"
    >
      <h1 className="text-xl lg:text-3xl text-blue-800 sm:text-2xl font-bold">
        Portfolio
      </h1>

      <ul
        className={`bg-black absolute top-12  rounded-2xl sm:static flex items-center  flex-col gap-1 sm:flex-row mx-auto left-0  right-0  w-[50vw]  md:w-[52vw] px-0 py-2 *:w-30 sm:*:w-auto *:text-center sm:*:px-1 *:py-1  *:rounded-2xl *:not-last:hover:border-2  sm:*:not-last:hover:border-0 sm:*:not-last:hover:underline shadow-2xl sm:shadow-none ${isOpen ? "translate-y-0 transition-transform duration-700" : "-translate-y-80 sm:translate-y-0 transition-transform duration-700"}`}
      >
        <li
          onClick={() => {
            SetIsOpen(false);
          }}
        >
          {" "}
          <a href="#">Home</a>
        </li>
        <li
          onClick={() => {
            SetIsOpen(false);
          }}
        >
          {" "}
          <a href="#about">About</a>
        </li>
        <li
          onClick={() => {
            SetIsOpen(false);
          }}
        >
          {" "}
          <a href="#skills">Skills</a>
        </li>
        <li
          onClick={() => {
            SetIsOpen(false);
          }}
        >
          {" "}
          <a href="#projects">Projects</a>
        </li>
        <li
          onClick={() => {
            SetIsOpen(false);
          }}
        >
          {" "}
          <a href="#contact">Contact</a>
        </li>

        <button className="md:absolute right-0 text-nowrap bg-blue-500 text-black">
          Hire Me
        </button>
      </ul>

      <img
        onClick={() => SetIsOpen((prev) => !prev)}
        className="h-7 sm:hidden "
        src={imgs.menuL}
        alt=""
      />
    </div>
  );
};

export default Navbar;
