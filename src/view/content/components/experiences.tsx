import { useTranslation } from "react-i18next";
import ExperienceItem from "./experience_item";

interface ExperiencesProps {
  }

const Experiences: React.FC<ExperiencesProps> = () => {

    const {t} = useTranslation();
    
    const translatedSkillsString = t('experiences.current.skills', { returnObjects: true });
    const translatedSkillsList = translatedSkillsString;
    console.log(translatedSkillsList)

    return (
       <div className="w-full h-full flex flex-col mt-20 items-start overflow-y-auto">

            <ExperienceItem 
                company={t("experiences.current.company")}
                startYear={t("experiences.current.startYear")}
                endYear={t("experiences.current.endYear")}
                position={t("experiences.current.position")}
                description={t("experiences.current.description", { returnObjects: true })}
                skills={t("experiences.current.skills", { returnObjects: true })}
            />    

            <ExperienceItem 
                company={t("experiences.first.company")}
                startYear={t("experiences.first.startYear")}
                endYear={t("experiences.first.endYear")}
                position={t("experiences.first.position")}
                description={t("experiences.first.description", { returnObjects: true })}
                skills={t("experiences.first.skills", { returnObjects: true })}
            />   
            
       </div>
    );
}

export default Experiences