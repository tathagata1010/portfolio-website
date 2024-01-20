import React, { useState } from "react";
import profileImg from "public/assets/profile.jpg";
import SectionTitle from "./SectionTitle";
import { motion } from 'framer-motion'
import Link from "next/link";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";

const About = () => {
  const techSkills = [
    "Java (SpringBoot, Microservices)",

    "Next.js",

    "React",

    "Ethereum",

    "Solidity",

    "Ether.js",

    "SQL",

    "Tailwindcss",
  ];

  const [filter, setFilter] = useState("");

  const filteredTechSkills = techSkills.filter((tech) =>
    tech.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section
      id="about"
      className="max-w-containerSmall py-6 mx-auto lgl:py-24 flex flex-col gap-7"
    >
      <SectionTitle title={"About Me"} />

      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-8">
          <p>
            Hello, I'm Tathagata Nandi, a dedicated and forward-thinking
            Software Engineer. With a solid foundation in Data Structures and
            Algorithms (DSA) and expertise in system design, I bring a
            well-rounded skill set to every project I undertake. Over the course
            of my 1.5 years of professional experience, I've had the privilege
            of working on diverse software solutions, from optimizing algorithms
            to designing scalable systems. I thrive on solving complex problems
            and crafting elegant, efficient solutions. My passion for technology
            extends beyond the code. When I'm not diving into the intricacies of
            software development, you can find me reading and exploring business
            news and analyzing financial markets. I'm committed to lifelong
            learning and staying at the forefront of industry trends. Whether
            you need assistance with algorithm optimization, system
            architecture, or full-stack development, I'm here to bring your
            ideas to life.
          </p>

          <p>
            Explore my portfolio to see some of my past projects, and feel free
            to{" "}
            <Link className="text-textGreen mx-[5px]" href="/contact">
              reach out
            </Link>{" "}
            if you'd like to collaborate or discuss any exciting opportunities.
          </p>

          <p>Here are the technologies I am proficient in:</p>

          {/* <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter technologies"
            className="border p-2"
          /> */}

          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-3 mt-6 flex flex-wrap">
            {filteredTechSkills.map((tech, index) => (
              <li className="flex items-center gap-1.5" key={index}>
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <motion.div
          initial={{ x: -300, opacity: 0 }} // Starting position outside of the viewport
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2.1, duration: 1.4 }} // Added delay and duration for animation
          className="w-full lgl:w-1/3 h-80 relative group"
        >
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                src={profileImg}
                height={320}
                width={300}
                className="rounded-lg h-full object-cover shadow-lg"
              />
              <div className="hidden lgl:inline-block absolute w-[300px] h-[320px] group-hover:bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
