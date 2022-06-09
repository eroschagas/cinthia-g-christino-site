import { useEffect, useState } from "react";
import { Logo } from "../svg/Logo";

export const Menu = () => {
  const [mobile, setMobile] = useState("");
  const [fade, setFade] = useState("display-none");
  const [title, setTitle] = useState("name-fade");
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

  useEffect(() => {
    if (window.DeviceOrientationEvent) {
      window.addEventListener(
        "orientationchange",
        function () {
          setFade("display-none");
          setMobile("");
        },
        false,
      );
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrolled = window.scrollY;

      console.log(scrolled);

      if (scrolled > 200) {
        setTitle("");
      } else if (scrolled <= 200) {
        setTitle("name-fade");
      }
    });
  }, []);

  return (
    <div className="menu">
      <div className="menu-logo">
        <Logo />
        <h1 className={"menu-name " + title}>Cinthia</h1>
      </div>
      <nav className={"menu-links " + fade}>
        <a onClick={handleMobileMenu} href="#home">
          <h2>Inicio</h2>
        </a>
        <a
          onClick={handleMobileMenu}
          href="#interpretation"
        >
          <h2>Interpretação</h2>
        </a>
        <a onClick={handleMobileMenu} href="#translation">
          <h2>Tradução</h2>
        </a>
        <a onClick={handleMobileMenu} href="#class">
          <h2>Aulas</h2>
        </a>
        <a onClick={handleMobileMenu} href="#contact">
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
