import { Logo } from "../svg/Logo";

export const Menu = () => {
  return (
    <div className="menu">
      <div>
        <Logo />
      </div>
      <nav className="menu-links">
        <a href="#home">
          <h2>Inicio</h2>
        </a>
        <a href="#section2">
          <h2>Interpretação</h2>
        </a>
        <a href="#">
          <h2>Tradução</h2>
        </a>
        <a href="#">
          <h2>Aulas</h2>
        </a>
        <a href="#">
          <h2>Contato</h2>
        </a>
      </nav>
    </div>
  );
};
