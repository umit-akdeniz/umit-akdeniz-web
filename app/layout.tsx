import { Inter } from 'next/font/google';
import '../src/app/globals.css';
import Header from '../components/Header';


const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: 'Ümit Akdeniz',
  description: 'Personal website of Ümit Akdeniz.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1 p-2 sm:p-4 md:p-6 md:pl-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="max-w-full sm:max-w-5xl mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}