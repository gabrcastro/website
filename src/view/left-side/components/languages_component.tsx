import { clsx } from "clsx";
import { useTranslation } from "react-i18next";

const LanguagesComponent = () => {
  const { t, i18n} = useTranslation();
  let currentLang = i18n.language;
  console.log(currentLang);

  function handleChangeLanguage(lang: string) {
    i18n.changeLanguage(lang);
    currentLang = lang;
  }

  return (
    <div className="flex flex-row gap-5 ml-10">
      <button onClick={() => handleChangeLanguage("en")}
        className=" hover:opacity-50 hover:cursor-pointer"
      >
        <span className={clsx("text-sm", currentLang == "en" ? "text-gray-200 font-semibold" : "text-gray-500")}>
          {t("header.en")}
        </span>
      </button>
      <button onClick={() => handleChangeLanguage("pt")}
        className=" hover:opacity-50 hover:cursor-pointer"
      >
        <span className={clsx("text-sm", currentLang == "pt" ? "text-gray-200 font-semibold" : "text-gray-500")}>
          {t("header.pt")}
        </span>
      </button>
    </div>
  );
}

export default LanguagesComponent
