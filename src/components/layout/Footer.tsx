import Link from 'next/link';
import { Twitter, Linkedin, Github, Terminal } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, label: 'X', href: '#' },
  { icon: Linkedin, label: 'In', href: '#' },
  { icon: Github, label: 'Git', href: '#' },
];

const footerLinks = [
  // { label: 'RSS', href: '/rss' },  // TODO: Implement RSS feed
  { label: 'Styleguide', href: '/styleguide' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-void-light py-20 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <h4 className="font-header text-xl mb-6 text-white tracking-wide flex items-center gap-2">
            <Terminal size={18} className="text-safety" />
            Paul
          </h4>
          <p className="text-dust max-w-sm mb-8 font-mono text-sm leading-relaxed">
            Exploration of digital cognition. Building resilient interfaces for a focused future.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-dust hover:text-safety hover:border-safety border border-white/10 p-2 transition-all"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col md:items-end justify-between">
          <div className="flex gap-8 text-xs font-mono text-dust uppercase tracking-widest">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-white hover:underline decoration-safety underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-[10px] font-mono text-white/20 uppercase">
            © {new Date().getFullYear()} Paul. Systems Online.
          </div>
        </div>
      </div>
    </footer>
  );
}

