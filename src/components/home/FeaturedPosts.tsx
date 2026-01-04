import { ArticleCard, ArticleCardSkeleton } from '@/components/blog';
import { cn } from '@/lib/utils';
import type { BlogPost } from '@/types';

interface FeaturedPostsProps {
  posts: BlogPost[];
  className?: string;
}

/**
 * FeaturedPosts Component
 * 
 * Displays the featured articles section on the homepage
 * with a grid of 3 article cards.
 */
export function FeaturedPosts({ posts, className }: FeaturedPostsProps) {
  return (
    <section className={cn('max-w-6xl mx-auto px-6 mb-16', className)}>
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="font-mono text-sm text-safety uppercase tracking-widest whitespace-nowrap">
          01. Featured_Directory
        </span>
        <div className="h-px bg-white/10 w-full" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <ArticleCard
            key={post.slug}
            post={post}
            variant="featured"
          />
        ))}
      </div>
    </section>
  );
}

/**
 * FeaturedPostsSkeleton
 * 
 * Loading placeholder for FeaturedPosts
 */
export function FeaturedPostsSkeleton() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-4 w-48 bg-void-light rounded animate-pulse" />
        <div className="h-px bg-white/10 w-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <ArticleCardSkeleton key={i} showImage />
        ))}
      </div>
    </section>
  );
}

