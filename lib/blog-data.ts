export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  coverImage: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'designing-for-controlled-environments',
    title: 'Designing for Controlled Environments: Lessons from Airport Projects',
    excerpt:
      'Working within restricted-access facilities demands a different playbook — here is what years of airport-adjacent execution have taught us.',
    content: [
      'Controlled environments like airport terminals come with constraints that most commercial projects never face — security clearances, restricted working hours, and layers of protocol that shape every decision on site.',
      'Our teams plan around access windows rather than the other way around, which means sequencing work to fit narrow operational gaps without disrupting live facilities.',
      'The result is a delivery process built on discipline: fewer surprises, tighter coordination, and a constant awareness that the space around us never stops operating.',
    ],
    coverImage:
      'https://images.pexels.com/photos/12940671/pexels-photo-12940671.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Execution',
    author: 'Sri Sai Realtors',
    date: '2025-03-14',
    readTime: '4 min read',
  },
  {
    slug: 'materials-that-age-well',
    title: 'Materials That Age Well: Choosing Beyond the First Impression',
    excerpt:
      'A finish that looks good on handover day is only half the job. Here is how we think about materials for the long run.',
    content: [
      'The first six months of a space are easy — everything looks new. The real test is how a material behaves after two years of daily use.',
      'We weigh maintenance load, wear patterns, and repairability as heavily as we weigh appearance, especially in high-traffic commercial interiors.',
      'That long view is why some of our specifications lean toward materials that are slightly less dramatic on day one, but far more forgiving over time.',
    ],
    coverImage:
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Materials',
    author: 'Sri Sai Realtors',
    date: '2025-02-02',
    readTime: '3 min read',
  },
  {
    slug: 'planning-a-fit-out-timeline',
    title: 'Planning a Fit-Out Timeline Without the Guesswork',
    excerpt:
      'Delays rarely come from one big mistake — they come from a dozen small assumptions. Here is our approach to timeline planning.',
    content: [
      'Every fit-out timeline is a chain of dependencies, and most delays trace back to an assumption nobody double-checked.',
      'We build schedules backwards from the handover date, then stress-test each milestone against lead times, approvals, and site access.',
      'The teams that plan this way rarely need to explain a delay — because they have already planned around the parts most likely to slip.',
    ],
    coverImage:
      'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Project Management',
    author: 'Sri Sai Realtors',
    date: '2025-01-10',
    readTime: '5 min read',
  },
];

export function getBlogBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}