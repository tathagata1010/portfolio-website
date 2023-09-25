import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="h-14 lg:h-[10vh] top-0 z-50 sticky px-4 bg-bodyColor shadow-navbarShadow">
      <div className="max-w-container h-full mx-auto py-1 font-title flex justify-between items-center">
        <div>
          <Link
            href="https://www.youtube.com/watch?v=x9AkJNMdK7M"
            className="bg-bodyColor text-[#2356a1] h-14 w-14 fill-none flex justify-center items-center"
          >
            <Logo className="w-full h-full fill-none  object-none" />
          </Link>
        </div>
        <div>
          <ul className="flex text-[16px] gap-7">
            <Link
              className="items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 "
              href="#home"
            >
              Home
            </Link>
            <Link
              href="#home"
              className=" items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <span>01.</span> About
            </Link>
            <Link
              href="#home"
              className=" items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <span>02.</span> Experience
            </Link>
            <Link
              href="#home"
              className=" items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <span>03.</span> Projects
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
