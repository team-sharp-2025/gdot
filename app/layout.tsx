import './globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'GDOT Technologies - Premium Software Development Services',
  description: 'Leading software development company specializing in web development, mobile apps, cloud solutions, AI/ML, and digital transformation. Get your free consultation today.',
  keywords: 'software development, web development, mobile apps, cloud solutions, AI, ML, UI/UX design',
  authors: [{ name: 'GDOT Technologies' }],
  openGraph: {
    title: 'GDOT Technologies - Premium Software Development Services',
    description: 'Transform your business with our cutting-edge software solutions',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}