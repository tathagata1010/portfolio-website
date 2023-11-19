import Link from "next/link";
import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col justify-end text-textLight items-center gap-6">
      <Link href="mailto:logintotathagata@gmail.com" target="_blank">
      <p className="text-sm text-textGreen tracking-wide rotate-90">tathagata.nandi@gmail.com</p>
          </Link>
      <div className="h-32 w-[2px] bg-textDark mt-16"></div>
    </div>
  );
};

export default RightSide;
