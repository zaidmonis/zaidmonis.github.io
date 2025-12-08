export interface SkillCategory {
  name: string;
  items: string[];
  note?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    name: 'Frontend',
    items: ['React', 'Vite', 'Tailwind CSS', 'CSS Modules'],
  },
  {
    name: 'Backend & APIs',
    items: ['Node.js', 'Express', 'REST', 'GraphQL'],
  },
  {
    name: 'DevOps & Tooling',
    items: ['GitHub Actions', 'Docker', 'CI/CD', 'Monitoring'],
  },
  {
    name: 'Testing',
    items: ['Jest', 'Testing Library', 'Cypress'],
  },
  {
    name: 'Collaboration',
    items: ['Technical writing', 'Mentoring', 'Stakeholder alignment'],
  },
];
