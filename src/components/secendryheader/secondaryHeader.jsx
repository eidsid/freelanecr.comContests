import Image from "next/image";
import React from "react";
import Logo from "../../../public/Logo.png";
import rightIcon from "../../../public/rightIcon.png";
import middleicon from "../../../public/middleicon.png";
const SecondaryHeader = () => {
  return (
    <header className="flex justify-between items-center h-15 w-full ">
      {/* left */}
      <div className="flex items-center  gap-4">
        <div className="log font-extrabold bg-white  text-gray-600 h-8 w-8 rounded-full flex justify-center items-center">
          X
        </div>
      </div>
      {/* middle */}
      <div className="flex  items-center gap-1 cursor-pointer">
        <Image src={middleicon.src} width={30} height={30} alt="logo" />
        <span> Claude </span>
      </div>
      {/* right */}

      <div className=" cursor-pointer bg-yellow-950  h-7 w-7 rounded-full flex justify-center items-center text-white font-bold text-sm">
        DB
      </div>
    </header>
  );
};

export default SecondaryHeader;
