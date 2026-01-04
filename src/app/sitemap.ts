import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';

const BASE_URL = 'https://paul-s-pov.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/writing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic article pages
  const articlePages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/writing/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages];
}

