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
      'Led the upgrade of dozens of AKS services to Helm-based Spot compute deployments for Domino’s engineering teams, delivering standardized release workflows and sizable monthly cloud savings.',
    tech: ['.NET Core', 'Azure Kubernetes Service', 'Helm', 'Docker', 'Azure DevOps'],
    links: {},
  },
  {
    title: 'Azure DevOps Pipeline Accelerator',
    type: 'Professional',
    description:
      'Created reusable Azure DevOps templates with dynamic waits, log streaming, and shared governance that cut deployment time by up to 85% and improved feedback loops for critical services.',
    tech: ['Azure DevOps', 'CI/CD', 'PowerShell', 'YAML'],
    links: {},
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
