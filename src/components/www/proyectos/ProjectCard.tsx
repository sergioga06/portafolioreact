import React from "react";

interface ProjectCardProps {
  title: string;
  youtubeUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, youtubeUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden p-4">
      <iframe
        className="w-full h-60 rounded-md"
        src={youtubeUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h2 className="text-xl font-semibold mt-4 text-center">{title}</h2>
    </div>
  );
};

export default ProjectCard;
