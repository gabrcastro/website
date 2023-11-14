import { createContext } from "react";

type LocaleProps = {
  locale: string,
  setLocale: (value: string) => void,
}

const defaultValue : LocaleProps = {
  locale: "en",
  setLocale: () => {}
}

export default createContext(defaultValue);