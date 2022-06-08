import { useState } from "react";
import { Logo } from "../svg/Logo";

export const Menu = () => {
  const [mobile, setMobile] = useState("");
  const [fade, setFade] = useState("display-none");
  const handleMobileMenu = () => {
    if (mobile === "menu-mobile-open") {
      setFade("opacity-0");
      setMobile("menu-mobile-close");
      setTimeout(function () {
        setFade("display-none");
      }, 200);
    } else {
      setTimeout(function () {
        setFade("opacity-1");
      }, 400);
      setMobile("menu-mobile-open");
    }
  };
  return (
    <div className="menu">
      <div className="menu-logo">
        <Logo />
      </div>
      <nav className={"menu-links " + fade}>
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
      <div className={"menu-mobile " + mobile}>
        <div
          className="menu-click"
          onClick={handleMobileMenu}
        ></div>
        <div className="menu-mobile-block-1"></div>
        <div className="menu-mobile-block-2"></div>
        <div className="menu-mobile-block-3"></div>
      </div>
    </div>
  );
};
