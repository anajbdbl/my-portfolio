import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Ana Julia's Portfolio",
  description: 'Personal website for Ana Julia Bortolossi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body>
        <div className="layout">
          <Navbar />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

