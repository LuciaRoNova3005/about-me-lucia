import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./stylesheets/App.scss";
import App from "./components/App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import nav_es from "./languages/es/nav.json";
import nav_en from "./languages/en/nav.json";
import proyect_es from "./languages/es/project.json";
import proyect_en from "./languages/en/project.json";
import cover_es from "./languages/es/cover.json";
import cover_en from "./languages/en/cover.json";
import aboutme_es from "./languages/es/aboutme.json";
import aboutme_en from "./languages/en/aboutme.json";
import footer_es from "./languages/es/footer.json";
import footer_en from "./languages/en/footer.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      nav: nav_es,
      cover: cover_es,
      proyect: proyect_es,
      aboutme: aboutme_es,
      footer: footer_es,
    },
    en: {
      nav: nav_en,
      cover: cover_en,
      proyect: proyect_en,
      aboutme: aboutme_en,
      footer: footer_en,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
