export interface SkillCategory {
  name: string;
  items: string[];
  note?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    items: ['C#', 'Java', 'Kotlin', 'JavaScript'],
  },
  {
    name: 'Backend & Frameworks',
    items: ['.NET Core', 'ASP.NET', 'Spring Boot', 'Microservices', 'API Development'],
  },
  {
    name: 'Frontend',
    items: ['React', 'Bootstrap', 'Responsive UI'],
  },
  {
    name: 'DevOps & CI/CD',
    items: ['Azure DevOps', 'GitLab', 'GitHub Actions', 'Jenkins'],
  },
  {
    name: 'Cloud & Infrastructure',
    items: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'Helm'],
  },
  {
    name: 'Databases',
    items: ['MS SQL Server', 'MySQL', 'PostgreSQL', 'Firebase'],
  },
  {
    name: 'Testing & Quality',
    items: ['NUnit', 'JUnit', 'Moq', 'Postman', 'TDD', 'UAT'],
  },
  {
    name: 'Tools & AI Assist',
    items: ['Bash', 'Git', 'Linux CLI', 'OpenAPI/Swagger', 'GitHub Copilot', 'Playwright MCP Server', 'Custom MCP servers'],
  },
];
