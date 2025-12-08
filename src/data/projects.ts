export interface Project {
  title: string;
  type: 'Professional' | 'Personal' | 'Open Source';
  description: string;
  tech: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    title: 'Camera Simulation',
    type: 'Personal',
    description: 'Interactive camera and lighting simulator published to GitHub Pages.',
    tech: ['TypeScript', 'Three.js', 'Vite'],
    links: {
      github: 'https://github.com/zaidmonis/camera-simulation',
      demo: 'https://zaidmonis.github.io/camera-simulation/',
    },
  },
  {
    title: 'Engineering Portfolio',
    type: 'Personal',
    description: 'This site. Modular React + Vite template with theme toggle and content loaded from structured data files.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    links: {
      github: 'https://github.com/zaidmonis/zaidmonis.github.io',
      demo: 'https://zaidmonis.github.io/',
    },
  },
  {
    title: 'Release Automation Toolkit',
    type: 'Professional',
    description: 'CI/CD pipelines and scripts that cut deployment time and reduced regressions.',
    tech: ['GitHub Actions', 'Node.js', 'Docker'],
    links: {},
  },
];
