import LanguagesComponent from "./components/languages_component";
import NavigationComponent from "./components/navigation_component";
import SocialComponent from "./components/social_component";

export default function LeftSide() {

  return (
    <div className="w-full h-[100%] py-10 pl-24">
      <div className="flex flex-col justify-between h-full items-start">
       
        <div className="flex flex-col">
          <p className="font-light text-base text-gray-50 mb-3">Hey, I am</p>

          <h1 className="font-semibold text-4xl text-gray-50 mb-1">
            Gabriel Castro
          </h1>

          <p className="font-light text-xl text-gray-50">Front-End Developer</p>

        </div>

        <div className="mt-10 w-full">
          <NavigationComponent language={"en-US"} />
        </div>

        <div className="mt-10 flex flex-row items-center">
          <SocialComponent />
          <LanguagesComponent language={"en-US"} />
        </div>
      </div>
    </div>
  );
}
