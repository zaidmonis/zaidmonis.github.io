export interface Experience {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
  tech?: string[];
}

export const experiences: Experience[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Acme Corp',
    location: 'Remote',
    start: 'Jan 2023',
    end: 'Present',
    summary: 'Lead engineer delivering high-quality web experiences and mentoring developers.',
    highlights: [
      'Architected modular React component library adopted across three product teams.',
      'Improved performance scores by 30% through code splitting, caching, and accessibility audits.',
      'Partnered with designers and PMs to shape roadmap and ship features faster with CI/CD automation.',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js'],
  },
  {
    title: 'Software Engineer',
    company: 'Product Studio',
    location: 'Onsite/Hybrid',
    start: 'Jun 2020',
    end: 'Dec 2022',
    summary: 'Built full-stack features for B2B platforms with a focus on reliability.',
    highlights: [
      'Implemented feature toggles and telemetry to roll out releases safely.',
      'Refactored legacy code to modern React hooks, reducing defects and bundle size.',
      'Collaborated with QA to introduce automated testing coverage for critical flows.',
    ],
    tech: ['React', 'Express', 'PostgreSQL', 'Docker', 'Cypress'],
  },
];
