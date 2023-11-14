import { useState } from "react";
import { useTranslation } from "react-i18next";

interface NavProps {
  language: string;
}

type NavPropsItem = {
  id: string,
  text: string
}

const NavigationComponent: React.FC<NavProps> = () => {
  const { t } = useTranslation();


  const pageAbout: string = "#about";
  const pageExperiences: string = "#experiences";
  const pageEducation: string = "#education";
  const pageProjects: string = "#projects";

  const [page, setPage] = useState(pageAbout);

  const navItems: NavPropsItem[] = [
    { id: pageAbout, text: t("header.about") },
    { id: pageExperiences, text: t("header.experiences") },
    { id: pageEducation, text: t("header.education") },
    { id: pageProjects, text: t("header.projects") },
  ]

  return (
    <div className="flex flex-col items-start justify-evenly w-full">
      {navItems.map((item, index) => (
        <a key={index} href={item.id} onClick={() => setPage(item.id)} className="flex flex-row w-full items-center mb-3 hover:cursor-pointer hover:opacity-75">
          {page == item.id && <span className="mr-4 text-gray-200">&gt;_</span>}
          <p className="text-gray-200">{item.text}</p>
        </a>
      ))}
    </div>
  );
}

export default NavigationComponent;