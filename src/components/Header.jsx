import React from "react";
import Logo from "../assets/Rick-And-Morty-Logo.png";
import Languages from "./Languages";

const Header = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-80 bg-gray-400">
        <img src={Logo} alt="rick&mortyLogo" className="max-w-3xl" />
      </div>
      <div>
        <Languages />
      </div>
    </>
  );
};

export default Header;
