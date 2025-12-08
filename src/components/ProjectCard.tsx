import React from 'react';
import { Project } from '../data/projects';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <article className="card flex flex-col gap-4">
    <div className="flex items-center justify-between gap-3">
      <div>
        <p className="text-sm uppercase tracking-wide text-primary">{project.type}</p>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
      </div>
      <div className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
        {project.links.github && (
          <a href={project.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {project.links.demo && (
          <a href={project.links.demo} target="_blank" rel="noreferrer">
            Live
          </a>
        )}
      </div>
    </div>
    <p className="text-slate-700 dark:text-slate-200">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tech.map((item) => (
        <span key={item} className="tag">
          {item}
        </span>
      ))}
    </div>
  </article>
);

export default ProjectCard;
