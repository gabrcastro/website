import { useTranslation } from "react-i18next";
import ExperienceItem from "./experience_item";

interface ExperiencesProps {
    lang: string;
  }

const Experiences: React.FC<ExperiencesProps> = () => {

    const {t} = useTranslation();

    return (
       <div className="w-full h-full flex flex-col  mt-44 items-start overflow-y-auto">

            <ExperienceItem 
                company={t("experiences.current.company")}
                startYear={t("experiences.current.startYear")}
                endYear={t("experiences.current.endYear")}
                position={t("experiences.current.position")}
                description={[t("experiences.current.description")]}
                skills={[t("experiences.current.skills")]}
            />    

            <ExperienceItem 
                company={t("experiences.first.company")}
                startYear={t("experiences.first.startYear")}
                endYear={t("experiences.first.endYear")}
                position={t("experiences.first.position")}
                description={[t("experiences.first.description")]}
                skills={[t("experiences.first.skills")]}
            />   
            
       </div>
    );
}

export default Experiences