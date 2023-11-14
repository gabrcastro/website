import { clsx } from "clsx";

interface LanguagesComponentProps {
    language: string
}

const LanguagesComponent = (props: LanguagesComponentProps) => {
    return (
        <div className="flex flex-row gap-5 ml-10">
          <a href={`/en-US/`}
            className=" hover:opacity-50 hover:cursor-pointer"
          >
            <span className={clsx("text-sm", props.language == "en-US" ? "text-gray-200 font-semibold" : "text-gray-500")}>en-US</span>
          </a>
          <a href={`/pt-BR/`}
            className=" hover:opacity-50 hover:cursor-pointer"
          >
            <span className={clsx("text-sm", props.language == "pt-BR" ? "text-gray-200 font-semibold" : "text-gray-500")}>
                pt-BR
            </span>
          </a>
        </div>
      );
}

export default LanguagesComponent
