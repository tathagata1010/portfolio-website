import React from 'react'
import SectionTitle from './SectionTitle';
import Persistent from './WorksAndEducation/Persistent';

const Experience = () => {
  return (
    <section
    id="experience"
    className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4">
    <SectionTitle title="Experience" />
    <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
    <ul className='md:w-40 flex flex-col'>
      <li className=' border-l-2 border-l-hoverColor text-textGreen bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium'>
        Persistent
      </li>

      <li className=' border-l-2 border-l-hoverColor text-textGreen bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium'>
        Academy of Technology
      </li>

      <li className=' border-l-2 border-l-hoverColor text-textGreen bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium'>
        Central Model School, CBSE
      </li>

      <li className=' border-l-2 border-l-hoverColor text-textGreen bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium'>

      </li>
    </ul>
    <Persistent/>
    </div>
    </section>
    );
}

export default Experience