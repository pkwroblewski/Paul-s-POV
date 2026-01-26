import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost, Category } from '@/types';

const masterDirectory = path.join(process.cwd(), 'content/master');
const categories: Category[] = ['ai-journey', 'global-perspectives'];

/**
 * Get all blog posts sorted by date (newest first)
 * Reads from content/master/{category}/{slug}/index.mdx
 */
export function getAllPosts(): BlogPost[] {
  const allPosts: BlogPost[] = [];

  for (const category of categories) {
    const categoryDir = path.join(masterDirectory, category);

    if (!fs.existsSync(categoryDir)) {
      continue;
    }

    const slugDirs = fs.readdirSync(categoryDir);

    for (const slug of slugDirs) {
      const postDir = path.join(categoryDir, slug);

      // Skip if not a directory
      if (!fs.statSync(postDir).isDirectory()) {
        continue;
      }

      const post = getPostBySlug(slug);
      if (post && post.published) {
        allPosts.push(post);
      }
    }
  }

  // Sort by date, newest first
  return allPosts.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Get a single blog post by slug
 * Searches in both category directories
 */
export function getPostBySlug(slug: string): BlogPost | null {
  for (const category of categories) {
    const fullPath = path.join(masterDirectory, category, slug, 'index.mdx');

    if (fs.existsSync(fullPath)) {
      return readPostFile(fullPath, slug);
    }
  }

  return null;
}

/**
 * Read and parse a post file
 */
function readPostFile(fullPath: string, slug: string): BlogPost | null {
  try {
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
    if (process.env.NODE_ENV === 'development') {
      console.error(`Error reading post ${slug}:`, error);
    }
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
  const slugs: string[] = [];

  for (const category of categories) {
    const categoryDir = path.join(masterDirectory, category);

    if (!fs.existsSync(categoryDir)) {
      continue;
    }

    const entries = fs.readdirSync(categoryDir);

    for (const entry of entries) {
      const entryPath = path.join(categoryDir, entry);
      const indexPath = path.join(entryPath, 'index.mdx');

      if (fs.statSync(entryPath).isDirectory() && fs.existsSync(indexPath)) {
        slugs.push(entry);
      }
    }
  }

  return slugs;
}
