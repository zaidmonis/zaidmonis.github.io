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
  name: 'Mohammad Zaid Monis',
  title: 'Software Engineer',
  location: 'Your City, Country',
  tagline: 'Building reliable, user-focused software products.',
  email: 'you@example.com',
  summary:
    'Seasoned engineer focused on crafting resilient web applications, automating delivery pipelines, and collaborating closely with cross-functional teams to deliver measurable outcomes.',
  social: {
    github: 'https://github.com/zaidmonis',
    linkedin: 'https://www.linkedin.com/in/zaidmonis',
    resume: 'https://bold.pro/my/mzaid',
    portfolio: 'https://zaidmonis.github.io',
  },
};
