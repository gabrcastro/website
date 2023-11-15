import About from "./components/about";
import Experiences from "./components/experiences";
import Education from "./components/education";
import Projects from "./components/projects";
import React from "react";

import "../../styles/animation.css";
import { RootState } from "../../redux/store";
import { ConnectedProps, connect } from "react-redux";

interface ContentProps {
}

type PageNav = {
  pageId: string,
  page: React.ReactNode
}

const mapState = (state: RootState) => ({
  page: state.page,
});

const mapDispatch = {
  setPage: (newPage: string) => ({ type: "SET_PAGE", payload: newPage }),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type CombinedProps = PropsFromRedux & ContentProps;

const Content: React.FC<CombinedProps> = ({ page }) => {

  const pageNavList: PageNav[] = [
    { pageId: "#about", page: <About /> },
    { pageId: "#experiences", page: <Experiences /> },
    { pageId: "#education", page: <Education /> },
    { pageId: "#projects", page: <Projects /> },
  ];

  return (
    <div className="box flex items-center justify-center w-[90%] h-[90%] my-10 mr-20 overflow-hidden">
      <div className="content w-[99.8%] h-[99.7%] no-scrollbar overflow-y-auto flex flex-col pl-20 pr-20 " >
        {pageNavList.map((pageNav, index) => (
          page == pageNav.pageId && (
            <div key={index}>
              {pageNav.page}
            </div>
          )
        ))}
      </div>

    </div>
  );
};

export default connector(Content);
