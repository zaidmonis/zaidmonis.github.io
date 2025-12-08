import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage: React.FC = () => (
  <div className="section space-y-8">
    <SectionHeader
      eyebrow="Work"
      title="Projects"
      description="Mix of professional deliveries, side projects, and open-source contributions."
    />
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </div>
);

export default ProjectsPage;
