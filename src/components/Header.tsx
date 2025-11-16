import { Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Turnkey', href: '#turnkey' },
    { label: 'Investment', href: '#investment' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="text-2xl font-bold text-blue-600">F-TEX</div>
              <span className="hidden sm:inline text-xs text-gray-600 font-medium">Industries</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
            >
              Get Quote
            </a>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block m-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded text-center hover:bg-blue-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Quote
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
