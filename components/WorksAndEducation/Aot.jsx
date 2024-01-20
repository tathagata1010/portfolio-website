import React from "react";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Aot = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        B.Tech ECE
        <span className="text-textGreen tracking-wide">
          @Academy of Technology
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        June 2018- June 2022 
        <span className="mx-40"></span>
        <span className="text-textGreen">8.68 DGPA</span>
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Pursued a comprehensive curriculum in Electronics and Communication
          Engineering at AOT, gaining in-depth knowledge of core subjects.
          Embraced a diverse range of topics, including Data Structures and
          Algorithms (DSA), Java programming, and fundamental electronics
          principles. This well-rounded education laid the foundation for a
          versatile skill set.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Engaged rigorously with the study of DSA, honing problem-solving
          skills crucial for software development. Delved into Java programming,
          mastering a versatile and widely used language. Explored various
          aspects of electronics, from semiconductor devices to communication
          systems, fostering a deep understanding of the field.{" "}
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Concluded my academic journey with distinction, achieving an
          impressive DGPA of 8.71. This accomplishment reflects not only a
          mastery of the subjects studied but also a commitment to academic
          excellence. The holistic education received at AOT has equipped me
          with a solid foundation for both electronics engineering and computer
          science domains.{" "}
        </li>
      </ul>
    </motion.div>
  );
};

export default Aot;
