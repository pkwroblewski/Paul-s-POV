/**
 * Animation durations (in milliseconds)
 */
export const ANIMATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

/**
 * Breakpoints matching Tailwind defaults
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/**
 * Z-index scale for consistent layering
 */
export const Z_INDEX = {
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
} as const;

/**
 * Content limits
 */
export const LIMITS = {
  excerptLength: 160,
  titleLength: 100,
  postsPerPage: 10,
  featuredPosts: 3,
  recentPosts: 3,
} as const;

/**
 * Social media links (placeholder - update in config/site.ts)
 */
export const SOCIAL_LABELS = {
  twitter: 'X',
  linkedin: 'In',
  github: 'Git',
} as const;

