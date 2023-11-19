import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <h2 className="text-2xl inline-flex font-title font-semibold text-textGreen">
      {title}
      <span className="h-[2px] items-center bg-textDark"></span>
    </h2>
  );
};

export default SectionTitle;
