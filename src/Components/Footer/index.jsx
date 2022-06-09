import {
  SimpleGit,
  SimpleInsta,
  SimpleLinked,
} from "../svg/SimpleSocial";

export const Footer = () => {
  return (
    <div className="footer">
      <h5>Página feita por Eros Chagas</h5>
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
