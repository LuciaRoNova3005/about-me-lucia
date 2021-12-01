import React from "react";
import projects_es from "../data/projects_es";
import projects_en from "../data/projects_en";
import Project from "../components/Project";
import { useTranslation } from "react-i18next";

function ProjectList() {
  const [t, i18next] = useTranslation("proyect");
  const projectLanguage = () => {
    const projects = i18next.language;
    if (projects === "es") {
      console.log(projects_es);
      return projects_es;
    } else if (projects === "en") {
      return projects_en;
    }
  };
  console.log(i18next.language);
  const projectsElements = projectLanguage().map((project) => {
    return (
      <li className="projects__list__item" key={project.id}>
        <Project
          id={project.id}
          name={project.title}
          img={project.img}
          description={project.description}
          web={project.website}
          git={project.githubUrl}
          tools={project.tools}
        />
      </li>
    );
  });

  return (
    <section className="projects" id="projects">
      <h3 className="title3 ">{t("proyect.title")}</h3>
      <ul className="projects__list">{projectsElements}</ul>
      <article className="others_proyects">
        <h3 className="title4 ">{t("proyect.title2")}</h3>
        <a className="text2" href="https://www.jaenparaisointerior.es/">
          <p className="text_others">
            Jaén Paraíso Interior // Liferay
            <i class="iconlink2 fas fa-laptop-code"></i>
          </p>
        </a>
      </article>
    </section>
  );
}
export default ProjectList;
