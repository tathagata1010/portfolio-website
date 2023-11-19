import Link from "next/link";
import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
const LeftSide = () => {
    return (
      <div className="w-full h-full flex flex-col justify-end gap-4 text-textGreen">
        <div className="flex flex-col gap-4">
          <div className="w-10 h-10 text-xl text-center hover:text-textGreen hover:translate-y-2 transition-all duration-300 inline-flex bg-hoverColor items-center justify-center rounded-full">
            <Link href={"https://github.com/tathagata1010"} target="_blank">
              <RiGithubLine />
            </Link>
          </div>
          <div className="w-10 h-10 text-xl text-center hover:text-textGreen hover:translate-y-2 transition-all duration-300 inline-flex bg-hoverColor items-center justify-center rounded-full">
            <Link
              href={"https://www.linkedin.com/in/tathagata-nandi/"}
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </div>
            <div className="w-[2px] h-32 ml-4 bg-textDark"></div>
        </div>
      </div>
    );
};

export default LeftSide;
