import { cn } from '@/lib/utils';

interface CalloutProps {
  children: React.ReactNode;
  type?: 'info' | 'warning' | 'system';
  className?: string;
}

/**
 * Callout Component
 * 
 * A styled callout box for important information.
 * Warm and readable while maintaining character.
 */
export function Callout({ 
  children, 
  type = 'system',
  className 
}: CalloutProps) {
  const prefix = type === 'system' ? 'Note:' : 
                 type === 'warning' ? 'Important:' : 
                 'Tip:';

  return (
    <aside className={cn(
      'my-6 py-4 px-5 bg-void-light/50 border-l-3 border-safety/60 rounded-r text-dust/90 font-body',
      className
    )}>
      <span className="text-safety font-medium">{prefix}</span>{' '}
      <span className="italic">{children}</span>
    </aside>
  );
}

