'use client';

import { FormEvent, useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // TODO: Implement actual newsletter subscription
    // For now, simulate a successful subscription
    await new Promise((resolve) => setTimeout(resolve, 500));
    setStatus('success');
    setEmail('');
    
    // Reset status after 3 seconds
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="newsletter" className="py-24 px-6 relative overflow-hidden bg-void">
      <div className="max-w-3xl mx-auto relative z-10 border border-white/10 bg-void-light p-8 md:p-12">
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-void via-safety to-void" />

        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left content */}
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 text-safety text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 bg-safety animate-pulse" />
              Signal Active
            </div>
            <h2 className="font-header text-2xl md:text-3xl mb-4 text-bleach">
              Want to follow along?
            </h2>
            <p className="text-dust font-mono text-sm leading-relaxed">
              I send occasional updates when I publish something new. No spam, just signal.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex-1 w-full flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your email"
              disabled={status === 'loading' || status === 'success'}
              className="w-full bg-void border border-white/10 p-3 text-sm text-white placeholder-dust/50 focus:outline-none focus:border-safety transition-colors font-mono disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="w-full bg-safety text-void font-bold px-6 py-3 text-sm font-mono uppercase tracking-wider hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Connecting...' : status === 'success' ? 'You\'re in!' : 'Signal_In'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

