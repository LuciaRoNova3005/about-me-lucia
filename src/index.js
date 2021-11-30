import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./stylesheets/App.scss";
import App from "./components/App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import aboutme_es from "./languages/es/aboutme.json";
import aboutme_en from "./languages/en/aboutme.json";
import footer_es from "./languages/es/footer.json";
import footer_en from "./languages/en/footer.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      aboutme: aboutme_es,
      footer: footer_es,
    },
    en: {
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
