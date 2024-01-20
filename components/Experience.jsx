import React, { useState } from 'react'
import SectionTitle from './SectionTitle';
import Persistent from './WorksAndEducation/Persistent';
import Aot from './WorksAndEducation/Aot';
import CentralModel from './WorksAndEducation/CentralModel';

const Experience = () => {

  const [workPersistent, setWorkPersistent] = useState(true);
  const [studyAot, setStudyAot] = useState(false);
  const [studyCms, setstudyCms] = useState(false);

  const handlePersistent = () => {
    setWorkPersistent(true);
    setStudyAot(false);
    setstudyCms(false);
  };

  const handleAot = () => {
    setWorkPersistent(false);
    setStudyAot(true);
    setstudyCms(false);
  };

  const handleCms = () => {
    setWorkPersistent(false);
    setStudyAot(false);
    setstudyCms(true);
  };


  return (
    <section
    id="experience"
    className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4">
    <SectionTitle title="Experience" />
    <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
    <ul className='md:w-40 flex flex-col'>
    <li
            onClick={handlePersistent}
            className={`${
              workPersistent
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
        Persistent
      </li>

      <li
            onClick={handleAot}
            className={`${
              studyAot
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
        Academy of Technology
      </li>

      <li
            onClick={handleCms}
            className={`${
              studyCms
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
        Central Model School, CBSE
      </li>
  </ul>
    {workPersistent&&<Persistent/>}
    {studyAot&&<Aot/>}
    {studyCms&&<CentralModel/>}
    </div>
    </section>
    );
}

export default Experience