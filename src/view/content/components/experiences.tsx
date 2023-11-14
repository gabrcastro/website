import ExperienceItem from "./experience_item";

interface ExperiencesProps {
    lang: string;
  }

const Experiences: React.FC<ExperiencesProps> = () => {

    return (
       <div className="w-full h-full flex flex-col  mt-44 items-start overflow-y-auto">

            <ExperienceItem 
                company={""}
                startYear={""}
                endYear={""}
                position={""}
                description={[""]}
                skills={[""]}
            />    

            <ExperienceItem 
                company={""}
                startYear={""}
                endYear={""}
                position={""}
                description={[""]}
                skills={[""]}
            />   
            
       </div>
    );
}

export default Experiences