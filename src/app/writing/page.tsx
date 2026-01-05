import Link from 'next/link';
import { Header, Footer, Newsletter } from '@/components/layout';
import { getAllPosts } from '@/lib/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Notes, discoveries, and lessons from my journey into AI and the changing digital landscape.',
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-24 px-6 max-w-2xl mx-auto w-full animate-fade-in">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-header text-3xl md:text-4xl mb-4 text-bleach">
            Writing
          </h1>
          <p className="font-body text-dust text-lg leading-relaxed">
            Notes and discoveries from my journey into AI, GEO, and the changing digital landscape.
          </p>
        </div>

        {/* Article List */}
        <div className="space-y-10">
          {posts.map((post) => {
            // Format date for display - international format
            const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            });

            return (
              <article key={post.slug} className="group">
                <Link
                  href={`/writing/${post.slug}`}
                  className="block"
                >
                  {/* Date */}
                  <p className="font-mono text-xs text-dust mb-2">
                    {formattedDate}
                  </p>
                  
                  {/* Title */}
                  <h2 className="font-header text-xl md:text-2xl font-medium text-bleach mb-3 group-hover:text-safety transition-colors">
                    {post.title}
                  </h2>
                  
                  {/* Description */}
                  <p className="font-body text-dust leading-relaxed">
                    {post.description}
                  </p>
                </Link>
              </article>
            );
          })}
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}
