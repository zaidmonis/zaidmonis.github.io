import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { experiences } from '../data/experience';
import ExperienceItem from '../components/ExperienceItem';

const ExperiencePage: React.FC = () => (
  <div className="section space-y-8">
    <SectionHeader
      eyebrow="Career"
      title="Experience"
      description="Impact-focused roles with a mix of product engineering, platform work, and mentorship."
    />
    <div className="space-y-6">
      {experiences.map((role) => (
        <ExperienceItem key={role.title + role.company} role={role} />
      ))}
    </div>
  </div>
);

export default ExperiencePage;
