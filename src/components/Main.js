import React from "react";
import AboutMe from "./AboutMe";
import ProjectList from "./ProjectsList";

const Main = () => {
  return (
    <main className="main">
      <ProjectList></ProjectList>
      <AboutMe />
    </main>
  );
};

export default Main;
