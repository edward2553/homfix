import type { Metadata } from 'next';
import './globals.css';
import { defaultFont } from '@/config';

export const metadata: Metadata = {
  title: 'HomFix: Expertos en cuidar tu casa',
  description:
    'Te conecta instantáneamente con profesionales capacitados para servicios en el mismo día como limpieza, montaje de muebles, reparaciones del hogar y más. Realiza las tareas del hogar de manera eficiente y sin esfuerzo con HomFix.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={defaultFont.className}>{children}</body>
    </html>
  );
}
