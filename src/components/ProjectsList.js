import React from "react";
import projects from "../data/es/projects";
import Project from "../components/Project";

function ProjectList() {
  const projectsElements = projects.map((project) => {
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
      <h3 className="title3 ">Projects</h3>
      <ul className="projects__list">{projectsElements}</ul>
      <article className="others_proyects">
        <h3 className="title4 ">Otros proyectos</h3>
        <a className="text2" href="https://www.jaenparaisointerior.es/">
          <p className="text">
            Jaén Paraíso Interior // Liferay
            <i class="iconlink fas fa-laptop-code"></i>
          </p>
        </a>
      </article>
    </section>
  );
}
export default ProjectList;
