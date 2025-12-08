import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { skillCategories } from '../data/skills';
import SkillGroup from '../components/SkillGroup';

const SkillsPage: React.FC = () => (
  <div className="section space-y-8">
    <SectionHeader
      eyebrow="Capabilities"
      title="Skills"
      description="Technologies and practices I rely on to deliver reliable software."
    />
    <div className="grid gap-6 md:grid-cols-2">
      {skillCategories.map((category) => (
        <SkillGroup key={category.name} category={category} />
      ))}
    </div>
  </div>
);

export default SkillsPage;
