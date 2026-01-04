import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  children: React.ReactNode;
  number: string | number;
  className?: string;
}

/**
 * SectionHeading Component
 * 
 * A numbered section heading with warm styling.
 * Example: "01. The Curatorial Shift"
 */
export function SectionHeading({ 
  children, 
  number,
  className 
}: SectionHeadingProps) {
  const formattedNumber = typeof number === 'number' 
    ? String(number).padStart(2, '0')
    : number;

  return (
    <h2 className={cn(
      'text-xl font-header font-medium text-bleach/95 mt-10 mb-4 flex items-center',
      className
    )}>
      <span className="text-safety/80 mr-2 text-base">{formattedNumber}.</span>
      {children}
    </h2>
  );
}

