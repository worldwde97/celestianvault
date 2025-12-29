'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BRAND_NAME } from '@/config/brand';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Web Wallet', href: '/web-wallet' },
    { name: 'Exchange', href: '/exchange' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/95 backdrop-blur-sm border-b border-dark-border">
      <nav className="container-custom px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt={`${BRAND_NAME} Logo`}
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold gradient-text">{BRAND_NAME}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-300 hover:text-primary transition-colors">
              Login
            </Link>
            <Link href="/register" className="btn-primary">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t border-dark-border">
              <Link href="/login" className="btn-secondary text-center">
                Login
              </Link>
              <Link href="/register" className="btn-primary text-center">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
