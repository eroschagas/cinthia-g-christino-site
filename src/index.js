import React from "react";
import ReactDOM from "react-dom/client";
import { Menu } from "./Components/Menu";
import "./index.css";
import { Home } from "./Templates/Home";
import "aos/dist/aos.css";
import { Translation } from "./Templates/Section-translation";
import { Interpretation } from "./Templates/Section-Interpretation";
import { Class } from "./Templates/Section-class";
import { Contact } from "./Templates/Section-contact";
import { LanguageContextProvider } from "./Context/Language";

const root = ReactDOM.createRoot(
  document.getElementById("root"),
);
root.render(
  <React.StrictMode>
    <LanguageContextProvider>
      <Menu />
      <Home />
      <Interpretation />
      <Translation />
      <Class />
      <Contact />
    </LanguageContextProvider>
  </React.StrictMode>,
);
