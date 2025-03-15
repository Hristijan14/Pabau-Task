import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Languages = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguage = () => {
    const newLanguage = selectedLanguage === "en" ? "de" : "en";
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
  };

  return (
    <div className="flex justify-center items-center font-bold bg-gray-400 select-none font-mono p-4">
      <p>English</p>
      <div
        onClick={changeLanguage}
        className={`relative flex w-20 items-center h-10 bg-cyan-400 m-10 rounded-full transition-all duration-500 cursor-pointer`}
      >
        <span
          className={`absolute left-1 top-1 h-8 w-8 bg-white rounded-full transition-transform duration-500 shadow-lg ${
            i18n.language === "de" ? "translate-x-[40px]" : "translate-x-0"
          }`}
        ></span>
      </div>
      <p>Deutsch</p>
    </div>
  );
};

export default Languages;
