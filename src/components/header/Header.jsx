import Image from "next/image";
import React from "react";
import Logo from "../../../public/Logo.png";
import rightIcon from "../../../public/rightIcon.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center h-15 ">
      {/* left */}
      <div className="flex items-center  gap-4">
        <div className="log font-extrabold">
          <Image src={Logo.src} height={50} width={50} alt="logo" />
        </div>
        <div className="flex items-center">
          <div className="navIcon text-2xl">+</div>
          <nav className=" hidden">this is navbar</nav>
        </div>
      </div>
      {/* middle */}
      <div className="flex  items-center gap-1 cursor-pointer">
        <span> Untitled </span>
        <span className=" rotate-180 ">^</span>
      </div>
      {/* right */}
      <div className="flex  gap-4">
        <div className="log font-extrabol d">
          <Image
            src={rightIcon.src}
            height={30}
            width={30}
            alt="image"
            className=" cursor-pointer"
          />
        </div>
        <div className=" cursor-pointer bg-yellow-950  h-7 w-7 rounded-full flex justify-center items-center text-white font-bold text-sm">
          DB
        </div>
      </div>
    </header>
  );
};

export default Header;
