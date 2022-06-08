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
        <a href="#interpretation">
          <h2>Interpretação</h2>
        </a>
        <a href="#translation">
          <h2>Tradução</h2>
        </a>
        <a href="#class">
          <h2>Aulas</h2>
        </a>
        <a href="#contact">
          <h2>Contato</h2>
        </a>
      </nav>
    </div>
  );
};
