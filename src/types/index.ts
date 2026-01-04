// =============================================================================
// Content Types
// =============================================================================

export type Category = 'ai-journey' | 'global-perspectives';

export interface BlogPostFrontmatter {
  title: string;
  description: string;
  date: string;
  category: Category;
  published: boolean;
  featuredImage?: string;
  author?: string;
  tags?: string[];
}

export interface BlogPost extends BlogPostFrontmatter {
  slug: string;
  content: string;
  readingTime: number;
}

// =============================================================================
// Component Props Types
// =============================================================================

export interface ArticleCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'compact';
}

export interface ArticleListProps {
  posts: BlogPost[];
  variant?: 'grid' | 'list';
}

export interface NewsletterFormProps {
  variant?: 'inline' | 'full';
  className?: string;
}

export interface HeroProps {
  className?: string;
}

export interface FeaturedPostsProps {
  posts: BlogPost[];
}

export interface LatestPostsProps {
  posts: BlogPost[];
  onViewAll?: () => void;
}

// =============================================================================
// Site Configuration Types
// =============================================================================

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: Author;
  links: SocialLinks;
}

export interface Author {
  name: string;
  email: string;
  bio: string;
  avatar?: string;
}

export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
}

// =============================================================================
// Navigation Types
// =============================================================================

export interface NavLink {
  label: string;
  href: string;
  id: string;
}

// =============================================================================
// API/Database Types
// =============================================================================

export interface NewsletterSubscriber {
  id: string;
  email: string;
  created_at: string;
  confirmed: boolean;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  success: boolean;
}

// =============================================================================
// Utility Types
// =============================================================================

export type WithClassName<T = object> = T & { className?: string };

export type CategoryInfo = {
  id: Category;
  label: string;
  description: string;
  slug: string;
};

