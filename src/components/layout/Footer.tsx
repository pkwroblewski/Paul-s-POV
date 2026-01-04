import { Terminal } from 'lucide-react';

// TODO: Add real social links when available
// const socialLinks = [
//   { icon: Twitter, label: 'X', href: 'https://twitter.com/...' },
//   { icon: Linkedin, label: 'In', href: 'https://linkedin.com/in/...' },
//   { icon: Github, label: 'Git', href: 'https://github.com/...' },
// ];

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
          <p className="text-dust max-w-sm font-mono text-sm leading-relaxed">
            Exploration of digital cognition. Building resilient interfaces for a focused future.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col md:items-end justify-between">
          <div className="text-[10px] font-mono text-white/20 uppercase">
            © {new Date().getFullYear()} Paul. Systems Online.
          </div>
        </div>
      </div>
    </footer>
  );
}

