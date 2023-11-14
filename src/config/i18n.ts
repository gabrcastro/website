import i18n from "i18next";
import Backend from "i18next-http-backend"; // public/locales/{lang}/translation.json
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enTranslations from "../../public/locales/en/translation.json";
import ptTranslations from "../../public/locales/pt/translation.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    supportedLngs: ["en", "pt"],
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        ...enTranslations,
      },
      pt: {
        ...ptTranslations,
      }
    }
  });

export default i18n;
