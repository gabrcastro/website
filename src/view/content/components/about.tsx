import { useTranslation } from "react-i18next";

interface AboutProps {
  lang: string;
}

const About: React.FC<AboutProps> = () => {

  const {t} = useTranslation();

  return <div className="flex text-justify mt-44 text-gray-200 text-base">{t("content.text")}</div>;
};

export default About;