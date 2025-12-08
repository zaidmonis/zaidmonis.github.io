export interface Post {
  title: string;
  date: string;
  summary: string;
  content: string;
}

export const posts: Post[] = [
  {
    title: 'Building a UNESCO Hackathon Winner',
    date: '2022-11-01',
    summary: 'How our cross-country squad shipped a winning prototype during the UNESCO-India-Africa Hackathon.',
    content:
      'I mentored six developers spread across three countries, aligned us on a slim backlog, and kept quality high through async reviews. The prototype not only hit every judging criteria but also demonstrated how collaborative engineering practices can succeed under intense timelines.',
  },
  {
    title: 'Smart India Hackathon Journey',
    date: '2019-08-20',
    summary: 'Lessons from leading our team to a 2nd-place finish at the Smart India Hackathon grand finale.',
    content:
      'As development lead, I coordinated architecture decisions, unblocked teammates, and kept stakeholders informed. The result was a polished software prototype that impressed the jury and reinforced my passion for guiding teams through ambiguity.',
  },
];
