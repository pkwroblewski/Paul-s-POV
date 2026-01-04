import { Header, Footer, Newsletter } from '@/components/layout';
import { Hero, FeaturedPosts, LatestPosts } from '@/components/home';
import { getFeaturedPosts, getLatestPosts } from '@/lib/posts';

export default function HomePage() {
  const featuredPosts = getFeaturedPosts();
  const latestPosts = getLatestPosts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main content */}
      <main className="flex-grow pt-24">
        <Hero />
        <FeaturedPosts posts={featuredPosts} />
        <LatestPosts posts={latestPosts} />
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}
