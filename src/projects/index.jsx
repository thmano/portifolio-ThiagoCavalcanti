import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import "./style.css";

function Projects() {
  const [projects, setProjects] = useState();

  useEffect(() => {
    api.get("projetos/").then((response) => setProjects(response.data));
  }, []);

  function handleClick(id) {
    let containers = document.querySelectorAll(".projectContainer");
    let arrows = document.querySelectorAll(".colapseButton");
    let container = containers[id - 1];
    let arrow = arrows[id - 1];

    if (container.style.height === "max-content") {
      container.style.height = "60px";
      arrow.classList.remove("animation-rotate");
      arrow.classList.add("animation-rotateReturn");
    } else {
      container.style.height = "max-content";
      arrow.classList.add("animation-rotate");
      arrow.classList.remove("animation-rotateReturn");
    }
  }

  return (
    <div className="container_painel">
      <h2 className="titleProjectText">Aqui estão os meus principais projetos desenvolvidos</h2>
      {projects?.map((project) => (
        <div className="projectContainer" key={project?.id}>
          <div className="projectContainerData">
            <div className="titleContainer">
              <p className="titleProject">{project?.title}</p>
              <div
                className="colapseButton"
                onClick={() => handleClick(project.id)}
              >
                <KeyboardArrowDownIcon />
              </div>
            </div>
            <p className="subTitleProject">{project.subTitle}</p>
            <h5>Ferramentas utilizadas</h5>
            <ul>
              {project?.tools?.map((tool) => (
                <li className="toolsProject" key={tool}>
                  {tool}
                </li>
              ))}
            </ul>
            <div className="descriptionProject">{project?.description}</div>
                <p>Saiba mais sobre esse projeto:</p>
            {project?.links?.map((link) => (
              <div className="linkProject" key={link}>
                <a key={link} href={link} target="_blank">
                  {link}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
