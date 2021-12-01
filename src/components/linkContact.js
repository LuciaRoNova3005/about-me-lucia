import React from "react";
import { useTranslation } from "react-i18next";

function LinkContact() {
  const [t] = useTranslation("cover");
  return (
    <div className="linkContainer">
      <a
        href="https://github.com/LuciaRoNova3005/"
        target="_blank"
        rel="noreferrer"
        className="linkContainer__link"
      >
        <span>
          <i className="fab fa-github"></i>
        </span>
        <span>
          <p className="linkContainer__text">{t("cover.github")}</p>
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/luciarodrigueznova/"
        target="_blank"
        rel="noreferrer"
        className="linkContainer__link"
      >
        <span>
          <i className="fab fa-linkedin-in"></i>
          <span>
            <p className="linkContainer__text">{t("cover.linkedin")}</p>
          </span>
        </span>
      </a>
      <a
        href="./CV-Lucia-Rodriguez-Nova-frontend-development.pdf"
        target="_blank"
        rel="noreferrer"
        className="linkContainer__link"
      >
        <span className="">
          <i className="far fa-file-pdf"></i>
        </span>
        <span>
          <p className="linkContainer__text">{t("cover.cv")}</p>
        </span>
      </a>
    </div>
  );
}

export default LinkContact;
