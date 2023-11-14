import { clsx } from "clsx";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface LanguagesComponentProps {
  language: string
}

const LanguagesComponent = (props: LanguagesComponentProps) => {
  const { t, i18n} = useTranslation();

  useEffect(() => {
    
  }, [i18n])

  return (
    <div className="flex flex-row gap-5 ml-10">
      <a href={`/en-US/`}
        className=" hover:opacity-50 hover:cursor-pointer"
      >
        <span className={clsx("text-sm", props.language == "en-US" ? "text-gray-200 font-semibold" : "text-gray-500")}>
          {t("header.en")}
        </span>
      </a>
      <a href={`/pt-BR/`}
        className=" hover:opacity-50 hover:cursor-pointer"
      >
        <span className={clsx("text-sm", props.language == "pt-BR" ? "text-gray-200 font-semibold" : "text-gray-500")}>
          {t("header.pt")}
        </span>
      </a>
    </div>
  );
}

export default LanguagesComponent
