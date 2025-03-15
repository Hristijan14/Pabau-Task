import React from "react";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const CharacterCard = forwardRef(
  ({ name, status, species, gender, image, origin }, ref) => {
    const { t } = useTranslation();

    return (
      <div
        ref={ref}
        className="flex gap-5 justify-center bg-neutral-300 rounded-xl"
      >
        <div className="flex items-center gap-5 p-5 shadow-md w-[500px]">
          <div>
            <img
              src={image}
              alt={name}
              className="w-40 rounded-lg border-2 border-cyan-500"
            />
          </div>
          <div className="flex flex-col max-w-[300px] font-mono">
            <h1 className="font-bold text-2xl">{name}</h1>
            <div className="flex items-center gap-2 p-1">
              <div
                className={`w-5 h-5 rounded-full ${
                  status === "Alive"
                    ? "bg-green-500"
                    : status === "Dead"
                    ? "bg-red-500"
                    : "bg-gray-500"
                }`}
              ></div>
              <span className="font-bold">
                {t(status.toLowerCase()) || status} -{" "}
                {t(species.toLowerCase()) || species}
              </span>
            </div>
            <span>
              <b>{t("gender")}:</b> {t(gender.toLowerCase()) || gender}
            </span>
            <span>
              <b>{t("origin")}:</b>
              {t(origin.name.toLowerCase()) || origin.name}
            </span>
          </div>
        </div>
      </div>
    );
  }
);

export default CharacterCard;
