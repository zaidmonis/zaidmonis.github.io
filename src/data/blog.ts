export interface Post {
  title: string;
  date: string;
  summary: string;
  content: string;
}

export const posts: Post[] = [
  {
    title: 'Designing a Maintainable Portfolio',
    date: '2025-02-01',
    summary: 'Why I chose React + Vite and a data-driven content layer for this site.',
    content:
      'This starter keeps content in structured files under src/data so that new projects, experiences, or posts can be added without touching UI components. Swap in your own resume data and deploy in minutes.',
  },
  {
    title: 'Shipping Faster with CI/CD',
    date: '2024-11-15',
    summary: 'Simple patterns that made our deployments predictable and boring.',
    content:
      'Automated tests, preview builds, and feature flags allow us to deliver small increments safely. This portfolio uses the same idea with a GitHub Actions workflow that builds and publishes to Pages.',
  },
];
