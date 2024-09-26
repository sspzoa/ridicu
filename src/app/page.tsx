'use client';

import { CardCarousel } from '@/components/cardCarousel';

export default function Home(): JSX.Element {
  return (
    <div className="flex h-[100dvh] items-center justify-center">
      <CardCarousel />
    </div>
  );
}
