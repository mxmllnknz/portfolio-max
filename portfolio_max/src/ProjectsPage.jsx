import { useQuery } from "@tanstack/react-query";

function ProjectsPage() {
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

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="projects-container">
      {data.projects.map((datum) => {
        return <div key={`project-${datum.id}`}>{datum.name}</div>;
      })}
    </div>
  );
}

export default ProjectsPage;
