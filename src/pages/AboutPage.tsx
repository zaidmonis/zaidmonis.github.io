import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/profile';
import { education } from '../data/education';

const AboutPage: React.FC = () => (
  <div className="section space-y-10">
    <SectionHeader
      eyebrow="About"
      title="Who I am"
      description="Snapshot of my background, interests, and what I enjoy building."
    />
    <div className="grid gap-8 md:grid-cols-2">
      <div className="card space-y-4">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Profile</h3>
        <p className="text-slate-700 dark:text-slate-200">{profile.summary}</p>
        <ul className="space-y-2 text-slate-700 dark:text-slate-200">
          <li>
            <strong>Title:</strong> {profile.title}
          </li>
          <li>
            <strong>Location:</strong> {profile.location}
          </li>
          <li>
            <strong>Focus:</strong> Frontend platforms, system design, and developer experience.
          </li>
        </ul>
      </div>
      <div className="card space-y-4">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Education</h3>
        <ul className="space-y-4">
          {education.map((item) => (
            <li key={item.school} className="space-y-1">
              <p className="font-semibold text-slate-900 dark:text-white">{item.school}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">{item.degree}</p>
              <p className="text-xs text-slate-500">{item.period}</p>
              {item.details && <p className="text-slate-700 dark:text-slate-200">{item.details}</p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default AboutPage;
