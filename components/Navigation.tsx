'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold tracking-tight" style={{ color: 'var(--forest-green)' }}>
              Wildora Expeditions
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#14432a] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#14432a] transition-colors">
              About Wild India
            </Link>
            <Link href="/trips" className="text-gray-700 hover:text-[#14432a] transition-colors">
              Trips
            </Link>
            <Link href="/when-to-visit" className="text-gray-700 hover:text-[#14432a] transition-colors">
              When to Visit
            </Link>
            <Link href="/experts" className="text-gray-700 hover:text-[#14432a] transition-colors">
              Our Experts
            </Link>
            <Link href="/species" className="text-gray-700 hover:text-[#14432a] transition-colors">
              Species
            </Link>
            <Link href="/schools" className="text-gray-700 hover:text-[#14432a] transition-colors">
              Custom Groups
            </Link>
            <Link href="/practical" className="text-gray-700 hover:text-[#14432a] transition-colors">
              Practical Info
            </Link>
            <Link
              href="/contact"
              className="bg-[#ea580c] text-white px-4 py-2 rounded-md hover:bg-[#c2410c] transition-colors"
            >
              Plan a Tour
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#14432a] focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
              About Wild India
            </Link>
            <Link href="/trips" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
              Trips
            </Link>
            <Link href="/when-to-visit" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
              When to Visit
            </Link>
            <Link href="/experts" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
              Our Experts
            </Link>
            <Link href="/species" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
              Species
            </Link>
            <Link href="/schools" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
              Custom Groups
            </Link>
            <Link href="/practical" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
              Practical Info
            </Link>
            <Link href="/contact" className="block px-3 py-2 bg-[#ea580c] text-white rounded-md hover:bg-[#c2410c]">
              Plan a Tour
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
