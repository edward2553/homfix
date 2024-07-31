
import { TopBar } from '@/components';
import React from 'react';

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen">
      <TopBar />
      <div className="px-2">{children}</div>
    </main>
  );
}
