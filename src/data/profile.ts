export interface Profile {
  name: string;
  title: string;
  location: string;
  tagline: string;
  email: string;
  summary: string;
  social: {
    github?: string;
    linkedin?: string;
    resume?: string;
    portfolio?: string;
  };
}

export const profile: Profile = {
  name: 'Mohd Zaid',
  title: 'Full Stack .NET Developer',
  location: 'Kuala Lumpur, Malaysia',
  tagline: 'Full-stack engineer scaling SaaS platforms across Azure and AWS.',
  email: 'moniszaid@gmail.com',
  summary:
    'Backend-focused full stack engineer with 5+ years building enterprise SaaS platforms across Java + Spring Boot, C# + .NET Core, and React frontends. Proven to deliver API-heavy systems backed by MS SQL with a focus on performance tuning, Agile delivery, and CI/CD automation on Azure and AWS. Comfortable building responsive UI with Bootstrap, shaping microservices, and deploying with Docker, Kubernetes, and Azure DevOps—all while mentoring teams through code reviews, testing leadership, and collaborative technical excellence.',
  social: {
    github: 'https://github.com/zaidmonis',
    linkedin: 'https://www.linkedin.com/in/moniszaid',
    resume: '/Resume.pdf',
    portfolio: 'https://zaidmonis.github.io',
  },
};
