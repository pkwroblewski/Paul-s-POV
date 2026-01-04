import type { BlogPost } from '@/types';

/**
 * Sample blog posts matching the original Gemini design
 * These will be replaced with actual MDX content later
 */
export const SAMPLE_POSTS: BlogPost[] = [
  {
    slug: 'future-of-creation',
    title: 'The_Future_of_Creation.txt',
    description: 'Algorithmic tools are ubiquitous. Human imperfection is the new luxury asset. Defining the creator in the machine age.',
    date: '2023-10-12',
    category: 'ai-journey',
    published: true,
    readingTime: 6,
    featuredImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000',
    content: '',
  },
  {
    slug: 'digital-minimalism',
    title: 'Protocol: Digital_Minimalism',
    description: 'Reclaiming CPU cycles (attention) is the defining challenge. Systems architecture for deep work execution.',
    date: '2023-09-28',
    category: 'global-perspectives',
    published: true,
    readingTime: 8,
    featuredImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
    content: '',
  },
  {
    slug: 'architecture-of-thought',
    title: 'System_Architecture_of_Thought',
    description: 'Environmental variables (physical & digital) determine cognitive output parameters.',
    date: '2023-08-15',
    category: 'ai-journey',
    published: true,
    readingTime: 5,
    featuredImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
    content: '',
  },
  {
    slug: 'slow-web',
    title: 'Manifesto: Slow_Web',
    description: 'Rejecting real-time streams. Embracing asynchronous data packet consumption.',
    date: '2023-07-04',
    category: 'global-perspectives',
    published: true,
    readingTime: 12,
    content: '',
  },
  {
    slug: 'analog-retention',
    title: 'Analog_Retention_Strategies',
    description: 'Why paper interfaces still outperform high-refresh rate displays for memory synthesis.',
    date: '2023-06-21',
    category: 'ai-journey',
    published: true,
    readingTime: 4,
    content: '',
  },
  {
    slug: 'dark-mode-cognition',
    title: 'Dark_Mode_Cognition',
    description: 'Does lowering luminance actually improve focus, or just aesthetic preference?',
    date: '2023-05-11',
    category: 'global-perspectives',
    published: true,
    readingTime: 7,
    content: '',
  },
];

/**
 * Get featured posts (first 3)
 */
export function getFeaturedPosts(): BlogPost[] {
  return SAMPLE_POSTS.slice(0, 3);
}

/**
 * Get latest/recent posts (next 3 after featured)
 */
export function getLatestPosts(): BlogPost[] {
  return SAMPLE_POSTS.slice(3, 6);
}

/**
 * Get all posts
 */
export function getAllPosts(): BlogPost[] {
  return SAMPLE_POSTS;
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return SAMPLE_POSTS.find((post) => post.slug === slug);
}

