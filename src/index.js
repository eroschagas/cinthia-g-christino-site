import React from "react";
import ReactDOM from "react-dom/client";
import { Menu } from "./Components/Menu";
import "./index.css";
import { Home } from "./Templates/Home";
import { Section2 } from "./Templates/Section2";
import "aos/dist/aos.css";
import { Section3 } from "./Templates/Section3";

const root = ReactDOM.createRoot(
  document.getElementById("root"),
);
root.render(
  <React.StrictMode>
    <Menu />
    <Home />
    <Section2 />
    <Section3 />
  </React.StrictMode>,
);
