'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/writing', label: 'Writing' },
    { href: '/journey', label: 'Journey' },
    { href: '/workspace', label: 'Workspace' },
    { href: '/bookmarks', label: 'Bookmarks' },
  ];

  return (
    <>
      {/* Mobil Menü Düğmesi */}
      <div className="md:hidden p-4 fixed top-0 left-0 z-50 bg-gray-50">
        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Ana Menü */}
      <nav
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:block w-full md:w-56 bg-white border-r border-gray-200 fixed top-0 left-0 h-full z-40 md:static flex items-center justify-center`}
      >
        <div className="p-4 w-full max-w-xs">
          <h2 className="text-lg font-semibold text-gray-800 mb-6 text-center">My Site</h2>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)} // Mobilde kapanır
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