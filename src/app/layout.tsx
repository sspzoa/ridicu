import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import type React from 'react';

const WantedSansVariable = localFont({
  src: [
    {
      path: './fonts/WantedSansVariable.woff2',
    },
  ],
  variable: '--font-WantedSansVariable',
});

export const metadata: Metadata = {
  title: 'Word Learner',
  description: 'Best Word Learning App powered by AI',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={WantedSansVariable.variable}>{children}</body>
    </html>
  );
}
