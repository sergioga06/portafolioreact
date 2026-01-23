import React from "react";

interface ProjectCardProps {
  title: string;
  youtubeUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, youtubeUrl }) => {
  return (
    <div className="group bg-card/40 backdrop-blur-md border border-border/50 shadow-lg rounded-2xl overflow-hidden p-5 transition-all hover:border-primary/50 hover:shadow-primary/5">
      <div className="relative aspect-video rounded-xl overflow-hidden shadow-inner bg-black">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={youtubeUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h2 className="text-xl font-bold mt-5 text-foreground group-hover:text-primary transition-colors text-center uppercase tracking-tight">
        {title}
      </h2>
    </div>
  );
};

export default ProjectCard;