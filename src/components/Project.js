import React from "react";
import { useTranslation } from "react-i18next";

function Project(props) {
  const [t] = useTranslation("proyect");
  return (
    <article className="projects__card" id={props.id} key={props.id}>
      <div className="projects__card__infor">
        <a href={props.web} target="_blank" rel="noreferrer">
          <img
            className="projects__card__infor__img"
            src={props.img}
            alt={props.name}
          />
        </a>
        <div className="projects__card__infor__text">
          <h4 className="title4">{props.name}</h4>
          <p className="text">{props.description}</p>
          <p className="projects__card__infor__text__tools">{props.tools}</p>
          <a
            className="projects__card__infor__text__link"
            href={props.git}
            target="_blank"
            rel="noreferrer"
          >
            <i class="projects__card__infor__text__link__iconlink fab fa-github"></i>
            <p className="projects__card__infor__text__link__urlText">
              {t("proyect.text")}
            </p>
          </a>
        </div>
      </div>
    </article>
  );
}

export default Project;
