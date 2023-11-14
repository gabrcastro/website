"use client"

import { useTranslation } from "react-i18next";
import EducationItem from "./education_item";

interface EducationProps {
    lang: string;
  }
  
  const Education: React.FC<EducationProps> = () => {

    const {t} = useTranslation();

    return(
        <div className="flex flex-col  mt-44 items-start">

            <EducationItem 
                title={t("education.title")}
                type={t("education.type")}
                startYear="2022"
                endYear="2023"
            />

            <EducationItem 
                title={t("education.title")}
                type={t("education.type")}
                startYear="2021"
                endYear="2022"
            />


            <EducationItem 
                title={t("education.title")}
                type={t("education.type")}
                startYear="2017"
                endYear="2020"
            />

        </div>
    );
}

export default Education