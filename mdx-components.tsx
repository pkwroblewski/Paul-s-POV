import type { MDXComponents } from 'mdx/types';
import { TerminalBlock, Callout, SectionHeading } from '@/components/mdx';

/**
 * MDX Components Configuration
 * 
 * This file provides custom components to MDX content.
 * These components can be used directly in .mdx files without importing.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom components available in MDX
    TerminalBlock,
    Callout,
    SectionHeading,
    
    // Override default HTML elements with styled versions
    h1: ({ children }) => (
      <h1 className="font-header text-3xl md:text-5xl font-medium leading-tight text-white mb-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-header font-semibold text-white mt-12 mb-6">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-header font-semibold text-white mt-10 mb-4">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-6 text-lg leading-relaxed text-bleach/90">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mb-8 text-dust pl-6 border-l-2 border-safety/40 italic">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-void-light px-1.5 py-0.5 text-sm text-safety font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-void-light border border-white/10 p-6 my-8 font-mono text-sm overflow-x-auto">
        {children}
      </pre>
    ),
    a: ({ href, children }) => (
      <a 
        href={href} 
        className="text-safety hover:underline underline-offset-4"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-6 space-y-2 text-bleach/90">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-6 space-y-2 text-bleach/90">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-lg leading-relaxed">
        {children}
      </li>
    ),
    hr: () => (
      <hr className="my-12 border-white/10" />
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-white">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic text-dust">
        {children}
      </em>
    ),
    ...components,
  };
}

