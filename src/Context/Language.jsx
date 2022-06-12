import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(true);
  return (
    <LanguageContext.Provider
      value={[language, setLanguage]}
    >
      {children}
    </LanguageContext.Provider>
  );
};

LanguageContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLanguageContext = () => {
  const languageContext = useContext(LanguageContext);
  if (typeof LanguageContext === "undefined") {
    throw new Error(
      "You have to use useLanguageContext inside <LanguageContextProvider />",
    );
  }
  return [...languageContext];
};
