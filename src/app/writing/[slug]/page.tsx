import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Header, Footer } from '@/components/layout';
import { InlineNewsletter } from '@/components/forms';
import { TerminalBlock, Callout, SectionHeading } from '@/components/mdx';
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts';
import type { Metadata } from 'next';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

// Custom components for MDX - warm, readable styling
const mdxComponents = {
  TerminalBlock,
  Callout,
  SectionHeading,
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="font-header text-2xl md:text-3xl font-medium leading-snug text-bleach mt-10 mb-5">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-header text-xl md:text-2xl font-medium text-bleach/95 mt-10 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="font-header text-lg md:text-xl font-medium text-bleach/90 mt-8 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-5 leading-[1.8]">
      {children}
    </p>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="my-6 pl-5 border-l-2 border-safety/50 text-dust italic">
      {children}
    </blockquote>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="bg-void-light px-1.5 py-0.5 text-sm text-safety font-mono rounded">
      {children}
    </code>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-void-light border border-white/10 p-5 my-6 font-mono text-sm overflow-x-auto rounded">
      {children}
    </pre>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a 
      href={href} 
      className="text-safety hover:underline underline-offset-4 decoration-safety/50"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc pl-6 mb-5 space-y-2">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal pl-6 mb-5 space-y-2">
      {children}
    </ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="leading-[1.7] pl-1">
      {children}
    </li>
  ),
  hr: () => (
    <hr className="my-10 border-white/10" />
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-semibold text-bleach">
      {children}
    </strong>
  ),
  em: ({ children }: { children: React.ReactNode }) => (
    <em className="italic text-dust/90">
      {children}
    </em>
  ),
};

// Generate static params for all posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

const BASE_URL = 'https://paul-s-pov.vercel.app';

// Generate metadata for each post
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  const articleUrl = `${BASE_URL}/writing/${slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: articleUrl,
      siteName: "Paul's POV",
      type: 'article',
      publishedTime: post.date,
      authors: ['Paul'],
      images: post.featuredImage ? [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Format date for display - readable format like "June 21, 2023"
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // Format reading time
  const readingTime = `${post.readingTime} min read`;

  // Clean title - remove underscores for display
  const displayTitle = post.title.replace(/_/g, ' ').replace(/\.txt$/i, '');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <article className="flex-grow pt-24 pb-20 px-6 animate-fade-in">
        <div className="max-w-2xl mx-auto">
          {/* Back button */}
          <Link
            href="/writing"
            className="group inline-flex items-center font-mono text-xs text-dust mb-6 hover:text-safety transition-colors"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">
              &larr;
            </span>
            Back to articles
          </Link>

          {/* Article Header - Warm and inviting */}
          <header className="mb-8">
            {/* Meta info - subtle and readable */}
            <div className="flex items-center gap-2 text-sm text-dust/80 mb-4 font-body">
              <time dateTime={post.date}>{formattedDate}</time>
              <span className="text-dust/40">&middot;</span>
              <span>{readingTime}</span>
            </div>
            
            {/* Title - softer warm white */}
            <h1 className="font-header text-3xl md:text-4xl font-medium leading-snug text-bleach mb-4">
              {displayTitle}
            </h1>
            
            {/* Subtitle/Description */}
            <p className="text-lg text-dust font-body leading-relaxed">
              {post.description}
            </p>
          </header>

          {/* Featured Image - show in color */}
          {post.featuredImage && (
            <div className="mb-10 -mx-4 md:-mx-8">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={displayTitle}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 720px"
                  priority
                />
              </div>
            </div>
          )}

          {/* Article Content - Readable serif font */}
          <div className="font-body text-bleach/90 text-lg leading-[1.8]">
            <MDXRemote 
              source={post.content} 
              components={mdxComponents}
            />
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <InlineNewsletter />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
