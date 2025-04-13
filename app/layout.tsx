"use client";
import { Inter } from 'next/font/google';
import '../src/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });

const metadata = {
  title: 'Ümit Akdeniz',
  description: 'Personal website of Ümit Akdeniz.',
  icons: {
    icon: '/favicon.ico',
  },
};

// Minimal Mobil menü bileşeni
function MobileMenu({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) {
  return (
    <>
      {/* Mobil Menü Butonu */}
      <div className="fixed bottom-4 right-4 z-30 md:hidden">
        <button 
          onClick={toggleMenu}
          className="bg-gray-800 text-white rounded-full p-2 shadow-md"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Minimal Mobil Menüyü Aşağıdan Yukarı Çıkar */}
      <div 
        className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-lg z-20 transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex justify-center p-2">
          <div className="w-10 h-1 bg-gray-200 rounded-full"></div>
        </div>
        
        <nav className="py-6">
          <ul className="flex flex-col items-center space-y-5">
            <li>
              <Link href="/" 
                className="text-gray-700 hover:text-gray-900 text-lg"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link href="/diary" 
                className="text-gray-700 hover:text-gray-900 text-lg"
                onClick={toggleMenu}
              >
                Diary
              </Link>
            </li>
            <li>
              <Link href="/essays" 
                className="text-gray-700 hover:text-gray-900 text-lg"
                onClick={toggleMenu}
              >
                Essays
              </Link>
            </li>
            <li>
              <Link href="/journey" 
                className="text-gray-700 hover:text-gray-900 text-lg"
                onClick={toggleMenu}
              >
                Journey
              </Link>
            </li>
            <li>
              <Link href="/links" 
                className="text-gray-700 hover:text-gray-900 text-lg"
                onClick={toggleMenu}
              >
                Links
              </Link>
            </li>
            <li>
              <Link href="/books" 
                className="text-gray-700 hover:text-gray-900 text-lg"
                onClick={toggleMenu}
              >
                Books
              </Link>
            </li>
            <li>
              <Link href="/tweets" 
                className="text-gray-700 hover:text-gray-900 text-lg"
                onClick={toggleMenu}
              >
                Tweets
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

// İstemci bileşeni: Sidebar ve Menü
function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Ekran boyutunu kontrol et
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 fixed h-full bg-white shadow-sm border-r border-gray-50">
        <div className="p-6 flex flex-col h-full">
          {/* Profil Fotoğrafı ve İsim */}
          <div className="flex flex-col items-center mb-10">
            <Image
              src="/profile.jpg"
              alt="Profile Photo"
              width={80}
              height={80}
              className="w-20 h-20 rounded-full mb-3 object-cover"
            />
            <h1 className="text-xl font-semibold text-gray-800">
              Ümit Akdeniz
            </h1>
          </div>

          {/* PC Menü */}
          <nav className="flex-1 flex flex-col justify-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-gray-900 text-lg transition-colors duration-200">
              Home
            </Link>
            <Link href="/diary" className="text-gray-700 hover:text-gray-900 text-lg transition-colors duration-200">
              Diary
            </Link>
            <Link href="/essays" className="text-gray-700 hover:text-gray-900 text-lg transition-colors duration-200">
              Essays
            </Link>
            <Link href="/journey" className="text-gray-700 hover:text-gray-900 text-lg transition-colors duration-200">
              Journey
            </Link>
            <Link href="/links" className="text-gray-700 hover:text-gray-900 text-lg transition-colors duration-200">
              Links
            </Link>
            <Link href="/books" className="text-gray-700 hover:text-gray-900 text-lg transition-colors duration-200">
              Books
            </Link>
            <Link href="/tweets" className="text-gray-700 hover:text-gray-900 text-lg transition-colors duration-200">
              Tweets
            </Link>
          </nav>
          
          <div className="mt-auto pt-4 border-t border-gray-50">
            <p className="text-xs text-gray-500 text-center">© 2025 Ümit Akdeniz</p>
          </div>
        </div>
      </div>

      {/* Ultra Minimal Mobil header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white z-10 py-3 px-4 shadow-sm">
        <div className="flex justify-center">
          <h1 className="text-lg font-medium text-gray-800">
            Ümit Akdeniz
          </h1>
        </div>
      </div>

      {/* Mobil Menü */}
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased min-h-screen`}>
        {/* Sidebar */}
        <Sidebar />

        {/* Ana İçerik */}
        <main className="md:pl-64 pt-14 md:pt-0 pb-16 md:pb-0 p-4 md:p-6">
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}