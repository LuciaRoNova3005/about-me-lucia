import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t] = useTranslation("footer");

  return (
    <footer id="contact" className="footer">
      <div className="arrow">
        <a href="#header">
          <i class="fas fa-arrow-up"></i>
        </a>
      </div>
      <h3 className="title3 footer__title">{t("footer.title")}</h3>
      <p className="footer__text">{t("footer.text")}</p>
      <div className="footer__item">
        <a
          className="footer__item__link"
          href="mailto:lucia.r.nova@gmail.com/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="far fa-envelope"></i>
          <p className="footer__item__link__text">Mail</p>
        </a>
        <a
          className="footer__item__link"
          href="https://www.linkedin.com/in/luciarodrigueznova/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
          <p className="footer__item__link__text">Linkedin</p>
        </a>
      </div>
      <small className="footer__copy">
        <p className="">&copy; 2021 Lucía Rodríguez Nova</p>
      </small>
    </footer>
  );
};

export default Footer;
