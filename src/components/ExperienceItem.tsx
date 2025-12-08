import React from 'react';
import { Experience } from '../data/experience';

const ExperienceItem: React.FC<{ role: Experience }> = ({ role }) => (
  <article className="card space-y-3">
    <div className="flex flex-wrap items-center justify-between gap-2">
      <div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{role.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">{role.company}</p>
      </div>
      <div className="text-right text-sm text-slate-500 dark:text-slate-400">
        <p>{role.location}</p>
        <p>
          {role.start} – {role.end}
        </p>
      </div>
    </div>
    <p className="text-slate-700 dark:text-slate-200">{role.summary}</p>
    <ul className="list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-200">
      {role.highlights.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    {role.tech && (
      <div className="flex flex-wrap gap-2">
        {role.tech.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>
    )}
  </article>
);

export default ExperienceItem;
