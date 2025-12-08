import React from 'react';
import { profile } from '../data/profile';

const Footer: React.FC = () => (
  <footer className="border-t border-slate-200 bg-white/80 py-6 text-sm text-slate-600 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400">
    <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React + Vite.
      </p>
      <div className="flex gap-4">
        {profile.social.github && (
          <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            GitHub
          </a>
        )}
        {profile.social.linkedin && (
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
        )}
        {profile.social.resume && (
          <a href={profile.social.resume} target="_blank" rel="noreferrer" aria-label="Resume">
            Resume
          </a>
        )}
      </div>
    </div>
  </footer>
);

export default Footer;
