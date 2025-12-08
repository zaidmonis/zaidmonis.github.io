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
    title: "Domino's AKS Modernization",
    type: 'Professional',
    description:
      'Cataloged Helm chart drift across Aggro, CUAC, DAPS, GPS, and other teams, then drove AKS upgrades with Spot compute defaults, Confluence tracking, and duplicate-service cleanup that now saves thousands each month.',
    tech: ['.NET Core', 'Azure Kubernetes Service', 'Helm', 'Docker', 'Azure DevOps', 'Confluence'],
    links: {},
  },
  {
    title: 'Azure DevOps Pipeline Accelerator',
    type: 'Professional',
    description:
      'Refined shared pipeline templates with dynamic waits, real-time log streaming, and redundant step removal so Domino’s teams ship Helm releases in seconds instead of minutes.',
    tech: ['Azure DevOps', 'CI/CD', 'PowerShell', 'YAML', 'Helm'],
    links: {},
  },
  {
    title: 'KLFS Camera Simulation',
    type: 'Personal',
    description:
      'Production-ready React + TypeScript web app that pre-visualizes sports photography at scale. Drag cameras and players on a lacrosse field, pick lens presets, and simulate frame-fill, FOV, and exposure with Auto/Manual ISO helpers.',
    tech: ['React', 'TypeScript', 'Vite', 'SVG', 'Zustand'],
    links: {
      github: 'https://github.com/zaidmonis/camera-simulation',
      demo: 'https://zaidmonis.github.io/camera-simulation/',
    },
  },
  {
    title: 'Wallpy iOS',
    type: 'Personal',
    description:
      'Wallpaper curation app for iOS that showcases my SwiftUI experimentation. Built to explore polished UI, smooth transitions, and App Store-ready packaging.',
    tech: ['SwiftUI', 'iOS', 'Xcode'],
    links: {
      github: 'https://github.com/zaidmonis/WallpyIOS',
    },
  },
  {
    title: 'Legacy-to-Salesforce Migration Utility',
    type: 'Professional',
    description:
      'Designed a high-volume migration platform that moved 50M+ legacy records into Salesforce by orchestrating AWS S3, multi-threaded workers, and rigorous reconciliation pipelines.',
    tech: ['AWS S3', 'Salesforce', '.NET Core', 'C#', 'MS SQL Server'],
    links: {},
  },
];
