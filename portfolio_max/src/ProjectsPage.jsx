import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Sidebar from "./components/sidebar";
import "./ProjectsPage.css";
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
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch("/api/projects");
      if (!res.ok) {
        throw new Error("Network response was not ok.");
      }
      return res.json();
    },
    staleTime: Infinity,
  });

  const images = [Flycoin, Inspirit_AI, Jupiter, Memmap, Alfie, Mars_JTS];

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

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
