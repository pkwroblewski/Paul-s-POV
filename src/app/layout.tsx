import type { Metadata } from 'next';
import { Chakra_Petch, Space_Mono, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';

const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-chakra',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-source-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${chakra.variable} ${spaceMono.variable} ${sourceSerif.variable}`}>
      <body className="bg-grid min-h-screen font-mono text-bleach bg-void antialiased">
        {children}
      </body>
    </html>
  );
}
