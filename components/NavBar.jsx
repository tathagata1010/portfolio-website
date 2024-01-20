// import React from "react";
"use client";
import Logo from "./Logo";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const NavBar = () => {


  const ref = useRef("");
  const [show, setShow] = useState(false);

  const handleScroll = (e) => {
    e.preventDefault();
    setShow(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });

    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      // Handle clicks outside the ref (e.g., document body)
      setShow(false);
    }
  };

  // Add a click event listener to handle clicks outside the ref
  // useEffect(() => {
  //   document.addEventListener("click", handleClick);
  //   return () => {
  //     document.removeEventListener("click", handleClick);
  //   };
  // }, []);

  return (
    <div className="h-14 lg:h-[10vh] top-0 z-50 sticky px-4 bg-bodyColor shadow-navbarShadow">
      <div className="max-w-container h-full mx-auto py-1 font-title flex justify-between items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "just",
            stiffness: 260,
            damping: 20,
            duration: 0.8,
          }}
        >
          <Link
            href="/"
            className="bg-bodyColor text-teal-400 h-14 w-14 fill-none flex justify-center items-center"
          >
            <Logo className="w-full h-full fill-none  object-none" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden mdl:inline-flex items-center gap-7"
        >
          <ul className="flex text-[15px] gap-7">
            <Link
              className="items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 "
              href="#home"
              onClick={handleScroll}
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={handleScroll}
              className=" items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <span>01.</span> About
            </Link>
            <Link
              href="#experience"
              onClick={handleScroll}
              className=" items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <span>02.</span> Experience
            </Link>
            {/* <Link
              href="#project"
              onClick={handleScroll}
              className=" items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <span>03.</span> Projects
            </Link> */}
            <Link
              href="#certificates"
              onClick={handleScroll}
              className=" items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <span>03.</span> Certificates
            </Link>
            <Link
              href="#contact"
              onClick={handleScroll}
              className=" items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <span>04.</span> Contact
            </Link>
          </ul>
          <Link href="assets/Tathagata_Resume.pdf" target="_blank">
            <button className="px-2 py-0.5 text-[14px] text-center text-textGreen border border-textGreen rounded-md">
              Resume
            </button>
          </Link>
        </motion.div>
        <div className="mdl:hidden w-6 h-5 flex flex-col justify-between items-center text-4xl text-textGreen cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
