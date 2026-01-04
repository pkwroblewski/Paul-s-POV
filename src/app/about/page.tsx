import { Hash } from 'lucide-react';
import { Header, Footer, Newsletter } from '@/components/layout';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'An experienced professional exploring the transformational changes of AI. Sharing notes, discoveries, and lessons from the journey.',
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

      <main className="flex-grow pt-32 pb-24 px-6 max-w-2xl mx-auto w-full animate-fade-in">
        <div className="flex flex-col">
          {/* Bio Content */}
          <div className="flex flex-col justify-center">
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
                I&apos;m an experienced professional based in the Benelux region. My career has been shaped by years in corporate and consulting environments—structured, strategic, and always moving at pace.
              </p>
              <p className="border-l border-white/10 pl-6 hover:border-safety transition-colors">
                But something shifted. The transformational changes happening with AI felt too significant to observe from the sidelines. Not just important—fascinating. The kind of shift that rewires how we work, create, and think.
              </p>
              <p className="border-l border-white/10 pl-6 hover:border-safety transition-colors">
                So I embarked on a new journey. I&apos;m still relatively new to this world—a novice, really—but that&apos;s precisely why I&apos;m documenting it. This site is where I share my notes, discoveries, and examples as I learn.
              </p>
              <p className="border-l border-white/10 pl-6 hover:border-safety transition-colors">
                If you&apos;re curious about AI&apos;s impact on business, content, and strategy, maybe my journey can offer some useful signposts along the way.
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
        
        {/* Visual element - abstract journey representation */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex items-center gap-4 font-mono text-xs text-dust">
            <span className="text-safety">01</span>
            <div className="h-px bg-gradient-to-r from-safety/50 via-hologram/30 to-transparent flex-grow" />
            <span>corporate</span>
            <div className="h-px bg-white/10 w-8" />
            <span className="text-safety">02</span>
            <div className="h-px bg-gradient-to-r from-safety/50 via-hologram/30 to-transparent flex-grow" />
            <span>discovery</span>
            <div className="h-px bg-white/10 w-8" />
            <span className="text-safety">03</span>
            <div className="h-px bg-gradient-to-r from-safety to-hologram flex-grow animate-pulse" />
            <span className="text-bleach">now</span>
          </div>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}

