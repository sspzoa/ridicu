'use client';

import { CardCarousel } from '@/components/cardCarousel';

export default function Home(): JSX.Element {
  return (
    <div className="flex justify-center items-center h-[100dvh]">
      <CardCarousel />
    </div>
  );
}
