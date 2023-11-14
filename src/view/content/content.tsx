import About from "./components/about";
import Experiences from "./components/experiences";
import Education from "./components/education";
import Projects from "./components/projects";

interface ContentProps {
  page: string;
  language: string;
}

const Content: React.FC<ContentProps> = ({ page, language }) => {
  return (
    <div className="w-[90%] h-[90%] overflow-y-auto scrollbar-hide  flex flex-col pl-20 pr-20 my-10 mr-20 border border-slate-400">
      {page == "#about" && (
        <div className="" id="about">
          <About lang={language} />
        </div>
      )}

      {page == "#experiences" && (
        <div className="" id="experiences">
          <Experiences lang={language} />
        </div>
      )}

      {page == "#education" && (
        <div className="" id="education">
          <Education lang={language} />
        </div>
      )}

      {page == "#projects" && (
        <div className="" id="projects">
          <Projects lang={language} />
        </div>
      )}
    </div>
  );
};

export default Content;
