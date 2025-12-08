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
  email: 'mohdzaid@gmail.com',
  summary:
    'Full Stack .NET developer with 5+ years delivering enterprise SaaS solutions in C#, ASP.NET, and .NET Core. I focus on scalable APIs, Azure- and AWS-hosted microservices, and DevOps automation that keeps teams shipping quickly with confidence.',
  social: {
    github: 'https://github.com/zaidmonis',
    linkedin: 'https://www.linkedin.com/in/zaidmonis',
    resume: '/Resume.pdf',
    portfolio: 'https://zaidmonis.github.io',
  },
};
