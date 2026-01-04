'use client';

import { FormEvent, useState } from 'react';

/**
 * InlineNewsletter Component
 * 
 * A compact newsletter form for use in article pages
 */
export function InlineNewsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // TODO: Implement actual newsletter subscription
    await new Promise((resolve) => setTimeout(resolve, 500));
    setStatus('success');
    setEmail('');
    
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="bg-void-light border border-white/10 p-8 md:p-12 text-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-safety/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      <div className="relative z-10">
        <p className="mb-2 font-header text-xl text-bleach">
          Enjoyed this?
        </p>
        <p className="mb-6 font-mono text-sm text-dust">
          I&apos;ll email you when there&apos;s something new. No spam.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your email"
            disabled={status === 'loading' || status === 'success'}
            className="flex-1 bg-void border border-white/10 p-2 text-sm focus:outline-none focus:border-safety text-white font-mono disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="bg-white/5 border border-white/10 text-white px-6 py-2 text-xs font-mono uppercase hover:bg-safety hover:text-void hover:border-safety transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? '...' : status === 'success' ? 'Done!' : 'Signal_In'}
          </button>
        </form>
      </div>
    </div>
  );
}

