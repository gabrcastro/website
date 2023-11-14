import { clsx } from "clsx";
import { useTranslation } from "react-i18next";

interface LanguagesComponentProps {
  language: string
}

const LanguagesComponent = (props: LanguagesComponentProps) => {
  const { t, i18n} = useTranslation();

  function handleChangeLanguage(lang: string) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="flex flex-row gap-5 ml-10">
      <button onClick={() => handleChangeLanguage("en")}
        className=" hover:opacity-50 hover:cursor-pointer"
      >
        <span className={clsx("text-sm", props.language == "en" ? "text-gray-200 font-semibold" : "text-gray-500")}>
          {t("header.en")}
        </span>
      </button>
      <button onClick={() => handleChangeLanguage("pt")}
        className=" hover:opacity-50 hover:cursor-pointer"
      >
        <span className={clsx("text-sm", props.language == "pt" ? "text-gray-200 font-semibold" : "text-gray-500")}>
          {t("header.pt")}
        </span>
      </button>
    </div>
  );
}

export default LanguagesComponent
