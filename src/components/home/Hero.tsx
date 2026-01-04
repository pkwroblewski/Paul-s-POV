import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

/**
 * Hero Component
 * 
 * The main hero section for the homepage with the
 * "PAUL'S POV" title and status indicator.
 */
export function Hero({ className }: HeroProps) {
  return (
    <section className={cn('px-6 max-w-6xl mx-auto mb-12 animate-fade-in', className)}>
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-6">
        {/* Left: Title */}
        <div className="relative">
          <div className="text-safety font-mono text-xs uppercase tracking-widest mb-4">
            System Status: Online
          </div>
          <h1 className="font-header text-5xl md:text-7xl font-normal uppercase leading-none mb-2">
            <span className="text-[#FF603E]">Paul&apos;s</span>{' '}
            <span className="text-dust">POV</span>
          </h1>
        </div>

        {/* Right: Description */}
        <div className="max-w-md pb-2">
          <p className="text-sm font-mono text-dust leading-relaxed border-l-2 border-safety pl-4">
            Analyzing the intersection of algorithmic systems and human
            consciousness.
            <br />
            <span className="text-safety">v.2.0.4 Loaded</span>
          </p>
        </div>
      </div>
    </section>
  );
}

