import React from 'react';
import { SkillCategory } from '../data/skills';

const SkillGroup: React.FC<{ category: SkillCategory }> = ({ category }) => (
  <div className="card space-y-3">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category.name}</h3>
      {category.note && <span className="text-xs text-slate-500">{category.note}</span>}
    </div>
    <div className="flex flex-wrap gap-2">
      {category.items.map((item) => (
        <span key={item} className="tag">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default SkillGroup;
