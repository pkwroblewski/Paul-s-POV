import { type SiteConfig, type CategoryInfo, type NavLink } from '@/types';

export const siteConfig: SiteConfig = {
  name: "Paul's POV",
  description:
    'Personal perspectives on AI, geopolitics, economics, and the forces shaping our world.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://paulspov.com',
  author: {
    name: 'Paul',
    email: 'paul@example.com',
    bio: 'Transfer pricing professional exploring AI and global trends.',
  },
  links: {
    twitter: 'https://twitter.com/yourhandle',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourhandle',
  },
};

export const categories: CategoryInfo[] = [
  {
    id: 'ai-journey',
    label: 'AI Journey',
    description:
      'Personal explorations of AI tools, workflows, and lessons learned.',
    slug: 'ai-journey',
  },
  {
    id: 'global-perspectives',
    label: 'Global Perspectives',
    description:
      'Analysis of geopolitics, economics, and macro trends shaping our world.',
    slug: 'global-perspectives',
  },
];

export const navLinks: NavLink[] = [
  { label: 'Writing', href: '/writing', id: 'writing' },
  { label: 'About', href: '/about', id: 'about' },
];

export const POSTS_PER_PAGE = 10;

