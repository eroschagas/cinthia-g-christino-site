import { useEffect, useState } from "react";
import { useLanguageContext } from "../../Context/Language";
import { BrFlag, ToggleIcon, UsFlag } from "../svg/Flags";
import { Logo } from "../svg/Logo";

export const Menu = () => {
  const [mobile, setMobile] = useState("");
  const [fade, setFade] = useState("display-none");
  const [title, setTitle] = useState("name-fade");
  const [toggle, setToggle] = useState("menu-toggle-icon");
  const [language, setLanguage] = useLanguageContext();

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

  const handleToggle = () => {
    if (toggle === "menu-toggle-icon") {
      setToggle("menu-toggle-icon menu-toggle-icon-active");
    } else {
      setToggle("menu-toggle-icon");
    }
  };

  const handleLanguage = () => {
    setLanguage(!language);
  };

  const handleLanguageClick = () => {
    handleToggle();
    handleLanguage();
  };

  return (
    <>
      <div className="menu">
        <div className="menu-logo">
          <Logo />
          <h1 className={"menu-name " + title}>Cinthia</h1>
        </div>
        <nav className={"menu-links " + fade}>
          <a onClick={handleMobileMenu} href="#home">
            {language ? <h2>Inicio</h2> : <h2>Home</h2>}
          </a>
          <a
            onClick={handleMobileMenu}
            href="#interpretation"
          >
            {language ? (
              <h2>Interpretação</h2>
            ) : (
              <h2>Interpreting</h2>
            )}
          </a>
          <a onClick={handleMobileMenu} href="#translation">
            {language ? (
              <h2>Tradução</h2>
            ) : (
              <h2>Translation</h2>
            )}
          </a>
          <a onClick={handleMobileMenu} href="#class">
            {language ? <h2>Aulas</h2> : <h2>Teaching</h2>}
          </a>
          <a onClick={handleMobileMenu} href="#contact">
            {language ? <h2>Contato</h2> : <h2>Contact</h2>}
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
      <div
        onClick={handleLanguageClick}
        className="language"
      >
        <BrFlag />
        <ToggleIcon toggle={toggle} />
        <UsFlag />
      </div>
    </>
  );
};
