'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Writing', href: '/writing', index: '01' },
  { label: 'About', href: '/about', index: '02' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-void/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="font-header text-xl tracking-tight text-bleach hover:text-white transition-colors flex items-center gap-3 group"
        >
          <div className="w-3 h-3 bg-safety group-hover:rotate-45 transition-transform duration-300" />
          MY JOURNEY
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-mono uppercase tracking-widest hover:text-safety transition-colors relative',
                pathname === link.href || (link.href === '/writing' && pathname.startsWith('/writing'))
                  ? 'text-white font-bold'
                  : 'text-dust'
              )}
            >
              <span className="mr-2 opacity-30 text-xs text-safety">{link.index}</span>
              {link.label}
            </Link>
          ))}
          <Link
            href="/writing"
            className="ml-6 px-5 py-2.5 border border-white/20 text-safety text-xs font-mono uppercase tracking-widest hover:bg-safety hover:text-void hover:border-safety transition-all shadow-glow"
          >
            Read_Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-dust hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-20 bg-void z-40 flex flex-col p-6 space-y-6 animate-fade-in border-t border-white/10 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-header text-dust hover:text-safety text-left transition-colors flex items-center gap-4"
              >
                <span className="text-sm text-safety font-mono">/</span>
                {link.label}
              </Link>
            ))}
            <Link
              href="/writing"
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-header text-safety text-left mt-4 border border-safety/30 p-4"
            >
              Read_Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

