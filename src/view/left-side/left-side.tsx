import LanguagesComponent from "./components/languages_component";
import NavigationComponent from "./components/navigation_component";
import SocialComponent from "./components/social_component";

import { useTranslation } from "react-i18next";

export default function LeftSide() {

  const {t} = useTranslation();

  return (
    <div className="w-full h-[100%] py-10 pl-24">
      <div className="flex flex-col justify-between h-full items-start">
       
        <div className="flex flex-col">
          <p className="font-light text-base text-gray-50 mb-3">{t("header.greetings")}</p>

          <h1 className="font-semibold text-4xl text-gray-50 mb-1">
            {t("site.name")}
          </h1>

          <p className="font-light text-xl text-gray-50">{t("header.position")}</p>

        </div>

        <div className="mt-10 w-full">
          <NavigationComponent />
        </div>

        <div className="mt-10 flex flex-row items-center">
          <SocialComponent />
          <LanguagesComponent />
        </div>
      </div>
    </div>
  );
}
