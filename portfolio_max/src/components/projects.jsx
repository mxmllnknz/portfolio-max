import { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import "./projects.css";
import data from "../data/projects.json";
import {
  Alfie,
  Flycoin,
  Inspirit_AI,
  Jupiter,
  Memmap,
  Mars_JTS,
} from "../assets";

function Projects() {
  const [activeProjectId, setActiveProjectId] = useState(0);
  const [isMobile, setMobile] = useState(false);
  const images = [Flycoin, Inspirit_AI, Jupiter, Memmap, Alfie, Mars_JTS];

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    const updateMedia = () => {
      if (window.innerWidth < 1000) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <div className="projects-page-container">
      {!isMobile ? (
        <div>
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
      ) : (
        data.projects.map((project, idx) => {
          return (
            <div key={idx} className="project-container">
              <div className="project-title">{project.name}</div>
              <div className="project-body">
                <div className="project-image">
                  <img src={images[idx]} />
                </div>
                <div className="project-description">{project.description}</div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Projects;
