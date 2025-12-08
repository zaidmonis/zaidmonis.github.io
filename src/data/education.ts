export interface Education {
  school: string;
  degree: string;
  period: string;
  location?: string;
  details?: string;
}

export const education: Education[] = [
  {
    school: 'Your University',
    degree: 'Bachelor of Science in Computer Science',
    period: '2016 – 2020',
    location: 'City, Country',
    details: 'Coursework in software engineering, algorithms, and human-computer interaction.',
  },
];
