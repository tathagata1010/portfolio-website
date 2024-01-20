import React from 'react'
import { motion } from 'framer-motion'
import { TiArrowForward } from "react-icons/ti";

const Persistent = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    className="w-full"
  >
    <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Software Engineer
      <span className="text-textGreen tracking-wide">@Persistent Systems(R&D)</span>
    </h3>
    <p className="text-sm mt-1 font-medium text-textDark">
      Jan 2022 - Current
    </p>
    <ul className="mt-6 flex flex-col gap-3">
      <li className="text-base flex gap-2 text-textDark">
        <span className="text-textGreen mt-1">
          <TiArrowForward />
        </span>
        mbarked on my journey at Persistent Systems as a Blockchain Developer, employing technologies such as Spring Boot, Next.js, and React. Contributed significantly to the non-custodial wallet development, effectively implementing blockchain solutions. Crafted Usecase development for the wallet, showcasing my adaptability in the blockchain landscape also explored the crypto loans use case within the blockchain team, adding depth to my POC development.
      </li>
      <li className="text-base flex gap-2 text-textDark">
        <span className="text-textGreen mt-1">
          <TiArrowForward />
        </span>
        Transitioned into a key role within the Next.js-based e-commerce project. Successfully integrated third-party crypto payment APIs into the project with the support of Spring Boot. Implemented innovative features, transforming the platform to accept cryptocurrency payments. Orchestrated the development of a comprehensive crypto wallet, trade functionalities, and payment applications using React Native.
      </li>
      <li className="text-base flex gap-2 text-textDark">
        <span className="text-textGreen mt-1">
          <TiArrowForward />
        </span>
        Played a pivotal role in the R&D unit's cloud product development, notably contributing to the PiCloud project. Utilized Flask and OpenAI 3.7 to create an AI chatbot, leveraging data and documentations from PiCloud. Demonstrated versatility by resolving frontend bugs, collaborating on new features, and crafting the chatbot's UI.
      </li>
    </ul>
  </motion.div>
  );
}

export default Persistent