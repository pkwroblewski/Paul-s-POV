import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost, Category } from '@/types';

const postsDirectory = path.join(process.cwd(), 'content/posts');

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllPosts(): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') && !fileName.startsWith('_'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      return getPostBySlug(slug);
    })
    .filter((post): post is BlogPost => post !== null && post.published);

  // Sort by date, newest first
  return allPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Calculate reading time (approx 200 words per minute)
    const wordCount = content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    // Convert date to ISO string if it's a Date object
    const dateValue = data.date instanceof Date 
      ? data.date.toISOString() 
      : typeof data.date === 'string' 
        ? data.date 
        : new Date().toISOString();

    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      date: dateValue,
      category: (data.category || 'ai-journey') as Category,
      published: data.published !== false,
      featuredImage: data.featuredImage,
      author: data.author,
      tags: data.tags || [],
      content,
      readingTime,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get featured posts (first 3)
 */
export function getFeaturedPosts(): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.slice(0, 3);
}

/**
 * Get latest posts (posts 4-6 for home page)
 */
export function getLatestPosts(): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.slice(3, 6);
}

/**
 * Get all post slugs (for static generation)
 */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx') && !fileName.startsWith('_'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

