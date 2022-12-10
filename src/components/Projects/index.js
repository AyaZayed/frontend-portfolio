import "./index.scss";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import ProjectsData from "../../data/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  const projectsString = "My Projects".split("");
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  function renderProjects(projects) {
    return (
      <div className="projects-container">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="project-card"
              alt={project.description}
            >
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <div className="project-info">
                <h2 className="project-name">{project.name}</h2>
                <p className="project-description">{project.description}</p>
                <a href={project.url} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArr={projectsString}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
        <div>{renderProjects(ProjectsData)}</div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Projects;
