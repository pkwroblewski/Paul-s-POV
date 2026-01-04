import Link from 'next/link';
import { ArticleCard, ArticleCardSkeleton } from '@/components/blog';
import { cn } from '@/lib/utils';
import type { BlogPost } from '@/types';

interface LatestPostsProps {
  posts: BlogPost[];
  className?: string;
}

/**
 * LatestPosts Component
 * 
 * Displays the latest logs/articles section on the homepage
 * with a grid of 3 article cards and a "View Archive" button.
 */
export function LatestPosts({ posts, className }: LatestPostsProps) {
  return (
    <section className={cn('max-w-6xl mx-auto px-6', className)}>
      {/* Section Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4 flex-grow">
          <span className="font-mono text-sm text-safety uppercase tracking-widest whitespace-nowrap">
            02. Latest_Logs
          </span>
          <div className="h-px bg-white/10 w-full mr-8" />
        </div>
        <Link
          href="/writing"
          className="whitespace-nowrap text-xs font-mono text-dust hover:text-safety border border-white/10 px-4 py-2 hover:border-safety transition-all uppercase tracking-widest"
        >
          [ View Archive ]
        </Link>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <ArticleCard
            key={post.slug}
            post={post}
            variant="default"
          />
        ))}
      </div>
    </section>
  );
}

/**
 * LatestPostsSkeleton
 * 
 * Loading placeholder for LatestPosts
 */
export function LatestPostsSkeleton() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4 flex-grow">
          <div className="h-4 w-32 bg-void-light rounded animate-pulse" />
          <div className="h-px bg-white/10 w-full mr-8" />
        </div>
        <div className="h-8 w-32 bg-void-light rounded animate-pulse" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <ArticleCardSkeleton key={i} showImage={false} />
        ))}
      </div>
    </section>
  );
}

