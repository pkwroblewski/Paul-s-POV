import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header, Footer, Newsletter } from '@/components/layout';
import { getAllPosts } from '@/lib/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Complete system logs regarding design philosophy, interface culture, and human-computer interaction.',
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-24 px-6 max-w-6xl mx-auto w-full animate-fade-in">
        {/* Page Header */}
        <div className="mb-16 border-b border-white/10 pb-12">
          <div className="text-safety font-mono text-xs uppercase tracking-widest mb-2">
            Directory / Root
          </div>
          <h1 className="font-header text-4xl md:text-6xl mb-4 text-white">
            Archive_01
          </h1>
          <p className="font-mono text-dust text-sm max-w-xl">
            Complete system logs regarding design philosophy, interface culture, and human-computer interaction.
          </p>
        </div>

        {/* Article List */}
        <div className="grid gap-4">
          {posts.map((post) => {
            // Format date as ID (remove dots/dashes)
            const dateId = post.date.replace(/-/g, '').slice(2);
            
            // Format date for display
            const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
              month: '2-digit',
              day: '2-digit',
              year: '2-digit',
            }).replace(/\//g, '.');

            // Category label
            const categoryLabel = post.category
              .split('-')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join('_');

            return (
              <Link
                key={post.slug}
                href={`/writing/${post.slug}`}
                className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-void-light border border-white/5 p-6 md:p-8 hover:border-safety/50 hover:shadow-glow transition-all"
              >
                {/* ID Column */}
                <div className="md:col-span-2 font-mono text-xs text-dust/60 group-hover:text-safety transition-colors">
                  ID_{dateId}
                </div>

                {/* Title & Excerpt Column */}
                <div className="md:col-span-7">
                  <h2 className="font-header text-xl md:text-2xl font-medium text-bleach mb-2 group-hover:text-white transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-mono text-xs text-dust line-clamp-1 opacity-70">
                    {post.description}
                  </p>
                </div>

                {/* Category & Arrow Column */}
                <div className="md:col-span-3 text-right flex justify-end items-center gap-4">
                  <span className="text-xs font-mono text-dust border border-white/10 px-2 py-1">
                    {categoryLabel}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-safety -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}

