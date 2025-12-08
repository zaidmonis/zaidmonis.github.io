export interface Education {
  school: string;
  degree: string;
  period: string;
  location?: string;
  details?: string;
}

export const education: Education[] = [
  {
    school: 'Guru Gobind Singh Indraprastha University',
    degree: 'Master of Computer Applications',
    period: 'Graduated Jul 2020',
    location: 'New Delhi, India',
    details: 'Advanced study in software engineering, distributed systems, and enterprise application development.',
  },
];
