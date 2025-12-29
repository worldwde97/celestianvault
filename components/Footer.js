import Link from 'next/link';
import { BRAND_NAME } from '@/config/brand';

export default function Footer() {
  const footerLinks = {
    Product: [
      { name: 'Web Wallet', href: '/web-wallet' },
      { name: 'Exchange', href: '/exchange' },
      { name: 'Get Started', href: '/register' },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
    ],
  };

  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="container-custom px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-blue rounded-lg flex items-center justify-center font-bold text-xl">
                {BRAND_NAME.charAt(0)}
              </div>
              <span className="text-xl font-bold gradient-text">{BRAND_NAME}</span>
            </div>
            <p className="text-gray-400 text-sm">
              Secure and convenient online crypto wallet for Bitcoin and other assets available anywhere at anytime.
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © 2024 {BRAND_NAME}. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
