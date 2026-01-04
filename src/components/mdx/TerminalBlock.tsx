import { cn } from '@/lib/utils';

interface TerminalBlockProps {
  children: React.ReactNode;
  prompt?: string;
  className?: string;
}

/**
 * TerminalBlock Component
 * 
 * A styled terminal/code block for code examples.
 * Subtle and readable, maintains technical feel.
 */
export function TerminalBlock({ 
  children, 
  prompt = '$',
  className 
}: TerminalBlockProps) {
  return (
    <div className={cn(
      'bg-void-light border border-white/8 p-5 my-6 font-mono text-sm rounded overflow-x-auto',
      className
    )}>
      <span className="text-safety/70 select-none">{prompt}</span>{' '}
      <span className="text-bleach/90">{children}</span>
    </div>
  );
}

