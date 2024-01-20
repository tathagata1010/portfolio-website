import React from "react";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const CentralModel = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        12th CBSE Boards
        <span className="text-textGreen tracking-wide">
          @Central Model School,Bkp
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        June 2017- 2018
        <span className="mx-40"></span>
        <span className="text-textGreen">75.4%</span>
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Successfully completed the Class 12th CBSE curriculum with a focus on
          Physics, Chemistry, Mathematics, and Biology (PCMB). Demonstrated
          academic prowess by securing an overall percentage of 75.4%. This
          foundation in the sciences laid the groundwork for future studies in
          engineering.
        </li>
      </ul>
    </motion.div>
  );
};

export default CentralModel;
