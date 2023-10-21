import { motion } from "framer-motion";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-6 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="text-lg text-textLight font-title tracking-wide"
      >
        Hello Myself,
      </motion.h3>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.8 }}
        className="text-xl text-textGreen font-title"
      >
        <TypeAnimation
          sequence={[
            "I'm Tathagata Nandi",
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={1}
        />
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        className="text-base md:max-w-[650x] text-textDark font-medium"
      >
        I am a driven Software Engineer with 1.5 years of professional
        experience, specializing in Java full-stack development and blockchain
        technology. My expertise spans both front-end and back-end development,
        allowing me to create seamless applications. Through my work in
        blockchain, I've gained valuable insights into decentralized systems and
        smart contract development. I am dedicated to leveraging technology to
        solve real-world problems and thrive in collaborative environments. With
        a passion for continuous learning, I am poised to make meaningful
        contributions to any project or team.
        <Link href={"/"} target="_blank">
          <span className=" text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Check more about me
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </Link>
      </motion.p>
    </section>
  );
};

export default Introduction;
