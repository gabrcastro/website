import About from "./components/about";
import Experiences from "./components/experiences";
import Education from "./components/education";
import Projects from "./components/projects";
import React from "react";

import "./animation.css"

interface ContentProps {
  page: string;
  language: string;
}

type PageNav = {
  pageId: string,
  id: string,
  page: React.ReactNode
}

const Content: React.FC<ContentProps> = ({ page, language }) => {

  const pageNavList: PageNav[] = [
    { pageId: "#about", id: "about", page: <About lang={language} /> },
    { pageId: "#experiences", id: "experiences", page: <Experiences lang={language} /> },
    { pageId: "#education", id: "education", page: <Education lang={language} /> },
    { pageId: "#projects", id: "projects", page: <Projects lang={language} /> },
  ];

  console.log(page)
  console.log(pageNavList)

  return (
    <div className="box relative flex items-center justify-center w-[90%] h-[90%] my-10 mr-20 overflow-hidden border border-slate-400">
      <span>
        <div className="w-full h-full overflow-y-auto scrollbar-hide flex flex-col pl-20 pr-20 ">
          {pageNavList.map((pageNav, index) => (
            page == pageNav.pageId && (
              <div key={index} id={pageNav.id}>
                {pageNav.page}
              </div>
            )
          ))}
        </div>
      </span>

    </div>
  );
};

export default Content;
