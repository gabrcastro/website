import { useTranslation } from "react-i18next";
import "../../../styles/animation.css";
import { RootState } from "../../../redux/store";
import { ConnectedProps, connect } from "react-redux";
import clsx from "clsx";

type NavPropsItem = {
  id: string,
  text: string
}

const mapState = (state: RootState) => ({
  page: state.page,
});

const mapDispatch = {
  setPage: (newPage: string) => ({ type: 'SET_PAGE', payload: newPage }),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const NavigationComponent: React.FC<PropsFromRedux> = ({page, setPage}) => {

  const { t } = useTranslation();

  const pageAbout: string = "#about";
  const pageExperiences: string = "#experiences";
  const pageEducation: string = "#education";
  const pageProjects: string = "#projects";

  const navItems: NavPropsItem[] = [
    { id: pageAbout, text: t("header.about") },
    { id: pageExperiences, text: t("header.experiences") },
    { id: pageEducation, text: t("header.education") },
    { id: pageProjects, text: t("header.projects") },
  ]

  return (
    <div className="flex flex-col items-start justify-evenly w-full">
      {navItems.map((item, index) => (
        <a key={index} href={item.id} onClick={() => setPage(item.id)} className="flex flex-row w-full items-center mb-3 hover:cursor-pointer hover:opacity-75">
          {page == item.id && <span className={clsx(page == item.id ? "font-semibold" : "font-normal text-gray-400", "mr-4 text-gray-200")}>&gt;_</span>}
          <p className={clsx(page == item.id ? "font-semibold" : "font-normal text-gray-400", "text-gray-200")}>{item.text}</p>
        </a>
      ))}
    </div>
  );
}

export default connector(NavigationComponent);