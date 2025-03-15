import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        sortByName: "Sort by Name",
        sortByOrigin: "Sort by Origin",
        origin: "Origin",
        gender: "gender",
        female: "Female",
        male: "Male",
        allStatuses: "All Statuses",
        alive: "Alive",
        dead: "Dead",
        unknown: "unknown",
        allSpecies: "All Species",
        human: "Human",
        alien: "Alien",
      },
    },
    de: {
      translation: {
        sortByName: "Nach Name sortieren",
        sortByOrigin: "Nach Herkunft sortieren",
        origin: "Herkunft",
        gender: "geschlecht",
        female: "Weiblich",
        male: "Männlich",
        allStatuses: "Alle Status",
        alive: "Lebendig",
        dead: "Tot",
        unknown: "unbekannt",
        allSpecies: "Alle Arten",
        human: "Menschlich",
        alien: "Außerirdische",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
