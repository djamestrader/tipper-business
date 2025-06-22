import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fair Dinkum Rubbish Removal - Professional Rubbish Removal & Tipper Hire in Sydney',
  description: 'Fast, reliable, and eco-friendly rubbish removal services in Sydney. Choose between self-load tipper trailer hire or our full-service team for all your waste removal needs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}