"use client"

import EducationItem from "./education_item";

interface EducationProps {
    lang: string;
  }
  
  const Education: React.FC<EducationProps> = () => {


    return(
        <div className="flex flex-col  mt-44 items-start">


            <EducationItem 
                title={""}
                type={""}
                startYear="2022"
                endYear="2023"
            />

            <EducationItem 
                title={""}
                type={""}
                startYear="2021"
                endYear="2022"
            />


            <EducationItem 
                title={""}
                type={""}
                startYear="2017"
                endYear="2020"
            />

        </div>
    );
}

export default Education