import { useLanguageContext } from "../../Context/Language";
import {
  SimpleGit,
  SimpleInsta,
  SimpleLinked,
} from "../svg/SimpleSocial";

export const Footer = () => {
  const [language] = useLanguageContext();

  return (
    <div className="footer">
      {language ? (
        <h5>Página feita por Eros Chagas</h5>
      ) : (
        <h5>Webpage made by Eros Chagas</h5>
      )}
      <div>
        <a
          href="https://www.instagram.com/eros.chagas"
          target="_blanc"
        >
          <SimpleInsta />
        </a>
        <a
          href="https://www.linkedin.com/in/eros-chagas-b93911b3/"
          target="_blanc"
        >
          <SimpleLinked />
        </a>
        <a
          href="https://github.com/eroschagas"
          target="_blanc"
        >
          <SimpleGit />
        </a>
      </div>
    </div>
  );
};
