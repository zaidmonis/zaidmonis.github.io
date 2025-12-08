import React from 'react';

interface SectionHeaderProps {
  title: string;
  eyebrow?: string;
  description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, eyebrow, description }) => (
  <div className="mb-8 space-y-2">
    {eyebrow && <p className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>}
    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{title}</h2>
    {description && <p className="text-slate-600 dark:text-slate-300">{description}</p>}
  </div>
);

export default SectionHeader;
