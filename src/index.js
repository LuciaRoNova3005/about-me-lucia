import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./stylesheets/App.scss";
import App from "./components/App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

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
