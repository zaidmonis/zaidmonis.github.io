import React from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const HomePage: React.FC = () => (
  <div className="section space-y-12">
    <section className="hero-gradient relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg dark:border-slate-800 dark:bg-slate-900/70">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" aria-hidden />
      <div className="relative space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Portfolio</p>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">{profile.name}</h1>
        <p className="text-xl text-slate-700 dark:text-slate-200">{profile.title}</p>
        <p className="max-w-3xl text-lg text-slate-700 dark:text-slate-200">{profile.summary}</p>
        <div className="flex flex-wrap gap-3">
          <Link className="btn btn-primary" to="/projects">
            View projects
          </Link>
          <Link className="btn btn-secondary" to="/contact">
            Contact me
          </Link>
          {profile.social.resume && (
            <a className="btn btn-secondary" href={profile.social.resume} target="_blank" rel="noreferrer">
              View resume
            </a>
          )}
        </div>
      </div>
    </section>

    <section>
      <SectionHeader
        eyebrow="Highlighted work"
        title="Projects"
        description="Selected projects that showcase product thinking and technical breadth."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className="mt-6">
        <Link to="/projects" className="btn btn-secondary">
          See all projects
        </Link>
      </div>
    </section>
  </div>
);

export default HomePage;
