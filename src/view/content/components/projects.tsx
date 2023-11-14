
interface ProjectsProps {
  lang: string;
}

const Projects: React.FC<ProjectsProps> = () => {
  // const dict = getDictionaryUseClient(lang);

  return (
    <div className=" flex text-justify mt-44 mb-32 w-full items-center justify-center">
      <p className="text-xl text-gray-700">EM DESENVOLVIMENTO</p>
    </div>
  );
};

export default Projects;
