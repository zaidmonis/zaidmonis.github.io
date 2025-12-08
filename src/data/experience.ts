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
    title: 'Full Stack Developer',
    company: "Domino's Pizza Malaysia",
    location: 'Petaling Jaya, Malaysia',
    start: 'Dec 2024',
    end: 'Present',
    summary:
      'Leading modernization of Domino’s ordering and operations stack, spanning .NET Core services, Azure DevOps automation, and AKS-hosted microservices with an emphasis on Spot compute savings and shared best practices.',
    highlights: [
      'Completed a cross-org audit of AKS namespaces, cataloged gaps on a Confluence tracker, and upgraded dozens of Helm chart releases to enable Spot compute for CI, Sandbox, and Stage workloads across 10+ teams.',
      'Partnered with platform + infra groups to remove ghost/duplicate services and align variable groups and pipeline YAML with the new Helm versions, improving operational hygiene.',
      'Optimized Azure DevOps pipelines with dynamic waits, parallel steps, and real-time log streaming to cut deployment time by up to 85% and keep developers in fast feedback loops.',
      'Mentored feature teams on Helm, Spot compute, and rollback procedures and reviewed their PRs to keep deployments consistent and secure.',
    ],
    tech: ['.NET Core', 'Azure DevOps', 'Azure Kubernetes Service', 'Helm', 'Docker', 'C#'],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Specmatic',
    location: 'Gurgaon, India (Remote)',
    start: 'Sep 2024',
    end: 'Oct 2024',
    summary: 'Contract role delivering partner-facing capabilities for Specmatic’s contract-testing platform.',
    highlights: [
      'Contributed new Java- and Kotlin-based features that boosted partner client adoption by 20%.',
      'Built React UI enhancements that lifted customer portal satisfaction by 15% while keeping design parity with contract specs.',
    ],
    tech: ['Java', 'Kotlin', 'Spring Boot', 'React', 'GitLab', 'OpenAPI/Swagger'],
  },
  {
    title: 'Application Developer',
    company: 'ThoughtWorks',
    location: 'Gurgaon, India',
    start: 'Jun 2020',
    end: 'Jul 2024',
    summary:
      'Delivered microservices, data migrations, and frontend enhancements for large-scale insurance and Salesforce programs.',
    highlights: [
      'Built and strengthened Spring Boot + .NET Core microservices for a US insurance platform supporting 100k+ users, boosting API performance by 20% and owning RBAC, order management, and event workflows.',
      'Developed React experience components that increased customer portal satisfaction by 15%.',
      'Designed a high-volume migration tool that moved 50M+ legacy records into Salesforce using AWS S3 and concurrent processing.',
    ],
    tech: ['.NET Core', 'Spring Boot', 'React', 'AWS', 'MS SQL Server', 'PostgreSQL'],
  },
];
