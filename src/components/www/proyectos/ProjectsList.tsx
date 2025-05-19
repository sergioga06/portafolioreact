import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  youtubeUrl: string;
}

const ProjectsList: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Proyecto 1",
      youtubeUrl: "https://www.youtube.com/embed/En6yKcG9Ocg",
    },
    {
      title: "Proyecto 2",
      youtubeUrl: "https://www.youtube.com/embed/uKaBv9b2IM8",
    },
    {
    title: "Proyecto 3",
      youtubeUrl: "https://www.youtube.com/embed/Yu6U0fw94-k",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsList;
