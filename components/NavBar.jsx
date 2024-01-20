// import React from "react";
"use client";
import Logo from "./Logo";
import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
        <div
          onClick={() => setShow(true)}
          className="mdl:hidden w-6 h-5 flex flex-col justify-between items-center text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
        </div>
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen  bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#home"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>

                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#about"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                    >
                      <span className="text-textGreen">01.</span>
                      About
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#experience"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      <span className="text-textGreen">02.</span>
                      Experience
                    </motion.li>
                  </Link>
                  {/* <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#project"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      <span className="text-textGreen">03.</span>
                      Project
                    </motion.li>
                  </Link> */}
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#certificates"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      <span className="text-textGreen">03.</span>
                      Certificates
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#contact"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                    >
                      <span className="text-textGreen">04.</span>
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                <a href="/assets/Tathagata_Resume.pdf" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, ease: "easeIn" }}
                    className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                  >
                    Resume
                  </motion.button>
                </a>
                <div className="flex gap-4">
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, ease: "easeIn" }}
                    href=""
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <TbBrandGithub />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, ease: "easeIn" }}
                    href="https://www.linkedin.com/in/tathagata-nandi/"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialLinkedin />
                    </span>
                  </motion.a>
                </div>
              </div>

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, ease: "easeIn" }}
                className="text-sm w-72 tracking-widest text-textGreen text-center mt-4"
                href="mailto:logintotathagata@gmail.com"
              >
                <p>reactbd@proton.me</p>
              </motion.a>
            </motion.div>
          </div>
        )}
        {/* ============== Small Icon End here ============= */}

        {/* ============ ListItem End here ========== */}
      </div>
    </div>
  );
};

export default NavBar;
