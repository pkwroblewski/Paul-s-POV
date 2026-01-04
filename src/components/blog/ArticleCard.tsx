import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { BlogPost } from '@/types';

interface ArticleCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

/**
 * ArticleCard Component
 * 
 * Displays a blog post preview card with optional featured image.
 * Matches the original Gemini design with grayscale images that
 * colorize on hover, glow effects, and smooth transitions.
 */
export function ArticleCard({ post, variant = 'default', className }: ArticleCardProps) {
  const showImage = variant === 'featured' || (variant === 'default' && post.featuredImage);
  
  // Format date for display (MM.DD.YY)
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: '2-digit',
  }).replace(/\//g, '.');

  // Format reading time
  const readingTime = String(post.readingTime).padStart(2, '0') + ' min';

  // Convert category slug to display label
  const categoryLabel = post.category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('_');

  return (
    <Link
      href={`/writing/${post.slug}`}
      className={cn(
        'group cursor-pointer relative transition-all duration-300',
        'bg-void-light border border-white/5',
        'hover:border-safety/50 hover:shadow-glow',
        'flex flex-col h-full',
        className
      )}
    >
      {/* Featured Image */}
      {showImage && post.featuredImage && (
        <div className="relative overflow-hidden w-full aspect-video border-b border-white/5">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Orange overlay on hover */}
          <div className="absolute inset-0 bg-safety/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      )}

      {/* Card Content */}
      <div className={cn(
        'flex flex-col flex-grow',
        variant === 'compact' ? 'p-4 md:p-6' : 'p-6 md:p-8'
      )}>
        <div>
          {/* Meta: Category & Date */}
          <div className="flex items-center gap-3 text-xs font-mono text-safety mb-6 uppercase tracking-wider">
            <span className="border border-safety/30 px-2 py-0.5">
              {categoryLabel}
            </span>
            <span className="text-white/20">|</span>
            <span>{formattedDate}</span>
          </div>

          {/* Title */}
          <h3 className={cn(
            'font-header font-medium leading-tight text-bleach',
            'group-hover:text-white transition-colors mb-4',
            variant === 'compact' ? 'text-lg' : 'text-xl'
          )}>
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className={cn(
            'font-mono text-dust leading-relaxed text-xs mb-6',
            variant === 'compact' ? 'line-clamp-2' : 'line-clamp-3'
          )}>
            {post.description}
          </p>
        </div>

        {/* Read More Link */}
        <div className="flex items-center text-xs font-mono uppercase tracking-widest text-dust group-hover:text-safety transition-colors mt-auto">
          Read_File
          <ArrowRight
            size={14}
            className="ml-2 group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>
    </Link>
  );
}

/**
 * ArticleCardSkeleton
 * 
 * Loading placeholder for ArticleCard
 */
export function ArticleCardSkeleton({ showImage = true }: { showImage?: boolean }) {
  return (
    <div className="bg-void-light border border-white/5 flex flex-col h-full animate-pulse">
      {showImage && (
        <div className="w-full aspect-video border-b border-white/5 bg-void" />
      )}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-20 bg-void rounded" />
          <div className="h-5 w-16 bg-void rounded" />
        </div>
        <div className="h-6 w-3/4 bg-void rounded mb-4" />
        <div className="space-y-2 mb-6">
          <div className="h-3 w-full bg-void rounded" />
          <div className="h-3 w-5/6 bg-void rounded" />
          <div className="h-3 w-4/6 bg-void rounded" />
        </div>
        <div className="h-4 w-24 bg-void rounded mt-auto" />
      </div>
    </div>
  );
}

