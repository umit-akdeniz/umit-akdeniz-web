'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/cv', label: 'CV' },
    { href: '/essays', label: 'Essays' },
    { href: '/links', label: 'Links' },
  ];

  return (
    <>
      {/* Mobil Menü Düğmesi */}
      <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-white p-3 rounded-full shadow-lg border border-gray-200">
        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X className="h-8 w-8 text-gray-800" /> : <Menu className="h-8 w-8 text-gray-800" />}
        </Button>
      </div>

      {/* Mobil Menü */}
      <nav
        className={`${
          isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
        } md:hidden fixed bottom-0 left-0 w-full h-1/2 bg-white border-t border-gray-200 z-40 transition-transform duration-300 ease-in-out flex items-center justify-center`}
      >
        <div className="p-4 w-full max-w-xs">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">Ümit Akdeniz</h2>
          <p className="text-sm text-gray-600 mb-4 text-center">A curious mind exploring life.</p>
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors duration-200 text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Masaüstü Menü */}
      <nav className="hidden md:block w-64 bg-white border-r border-gray-200 fixed top-0 left-0 h-full z-40 flex items-center justify-center">
        <div className="p-4 w-full max-w-xs">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">Ümit Akdeniz</h2>
          <p className="text-sm text-gray-600 mb-6 text-center">A curious mind exploring life. thats it.</p>
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}