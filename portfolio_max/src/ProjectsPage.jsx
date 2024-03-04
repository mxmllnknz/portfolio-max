import { useState } from "react";
import Sidebar from "./components/sidebar";
import "./ProjectsPage.css";
import data from "./data/projects.json";
import {
  Alfie,
  Flycoin,
  Inspirit_AI,
  Jupiter,
  Memmap,
  Mars_JTS,
} from "./assets";

function ProjectsPage() {
  const [activeProjectId, setActiveProjectId] = useState(0);
  const images = [Flycoin, Inspirit_AI, Jupiter, Memmap, Alfie, Mars_JTS];

  return (
    <div className="projects-page-container">
      <Sidebar
        data={data.projects}
        activeId={activeProjectId}
        onChange={(id) => setActiveProjectId(id)}
      />
      <div className="project-container">
        <div className="project-title">
          {data.projects[activeProjectId].name}
        </div>
        <div className="project-body">
          <div className="project-image">
            <img src={images[activeProjectId]} />
          </div>
          <div className="project-description">
            {data.projects[activeProjectId].description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
