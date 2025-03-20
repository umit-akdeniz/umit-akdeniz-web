import { Inter } from 'next/font/google';
import '../src/app/globals.css';
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: 'My Personal Website',
  description: 'A modern personal site with a single menu.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased flex flex-col min-h-screen md:flex-row`}>
        <Header />
        <main className="flex-1 p-6 md:pl-56">
          <div className="w-full mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}