import Image from 'next/image';
import { Hash } from 'lucide-react';
import { Header, Footer, Newsletter } from '@/components/layout';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Product designer and writer exploring the intersection of technology and human psychology.',
};

const socialLinks = [
  { label: 'Twitter / X', href: siteConfig.links.twitter || '#' },
  { label: 'LinkedIn', href: siteConfig.links.linkedin || '#' },
  { label: 'Email', href: `mailto:${siteConfig.author.email}` },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-24 px-6 max-w-6xl mx-auto w-full animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          {/* Portrait Image - Left on desktop, bottom on mobile */}
          <div className="relative order-2 md:order-1 bg-void-light p-4 border border-white/10">
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000"
                alt="Portrait"
                fill
                className="object-cover grayscale mix-blend-luminosity opacity-80 hover:opacity-100 transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-void-light to-transparent" />
              {/* Name overlay */}
              <div className="absolute bottom-4 left-4 font-header text-white text-2xl">
                Paul.V
              </div>
            </div>
          </div>

          {/* Bio Content - Right on desktop, top on mobile */}
          <div className="flex flex-col justify-center order-1 md:order-2">
            {/* Section indicator */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 bg-safety" />
              <span className="font-mono text-xs text-safety uppercase tracking-widest">
                User_Profile_01
              </span>
              <div className="h-px bg-white/10 flex-grow" />
            </div>

            {/* Title */}
            <h1 className="font-header text-4xl md:text-6xl mb-8 text-white leading-none">
              Hello<span className="text-safety">_</span>World.
            </h1>

            {/* Bio paragraphs */}
            <div className="space-y-6 font-mono text-dust leading-relaxed text-sm">
              <p className="border-l border-white/10 pl-6 hover:border-safety transition-colors">
                I am a product designer and writer based in San Francisco. My work explores the fuzzy edge where technology meets human psychology.
              </p>
              <p className="border-l border-white/10 pl-6 hover:border-safety transition-colors">
                For the past decade, I&apos;ve helped build products at companies like Stripe and Linear, focusing on tools that respect user attention rather than exploiting it.
              </p>
              <p className="border-l border-white/10 pl-6 hover:border-safety transition-colors">
                This site is my digital garden—a place where I cultivate ideas about design ethics, slow technology, and the creative process.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-12 border-t border-white/10">
              <h3 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">
                Connect Protocols
              </h3>
              <ul className="grid grid-cols-2 gap-4 font-mono text-sm">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-3 text-dust hover:text-safety transition-colors bg-void-light p-3 border border-white/5 hover:border-safety"
                    >
                      <Hash size={14} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}

