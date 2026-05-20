import { Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { Button } from './Button';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#36A2FF] to-[#007BFF] flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#36A2FF] to-[#007BFF] bg-clip-text text-transparent">
                SalonMama
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className={`transition-colors ${
                  isActive('/')
                    ? 'text-[#007BFF] font-medium'
                    : 'text-[#1E293B] hover:text-[#007BFF]'
                }`}
              >
                Home
              </Link>
              <Link
                to="/browse-salons"
                className={`transition-colors ${
                  isActive('/browse-salons')
                    ? 'text-[#007BFF] font-medium'
                    : 'text-[#1E293B] hover:text-[#007BFF]'
                }`}
              >
                Browse Salons
              </Link>
              <a href="#ai-style" className="text-[#1E293B] hover:text-[#007BFF] transition-colors">AI Style Finder</a>
              <a href="#rewards" className="text-[#1E293B] hover:text-[#007BFF] transition-colors">Rewards</a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">Login</Button>
            <Button variant="primary" size="sm">Sign Up</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              className={`block ${
                isActive('/')
                  ? 'text-[#007BFF] font-medium'
                  : 'text-[#1E293B] hover:text-[#007BFF]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/browse-salons"
              className={`block ${
                isActive('/browse-salons')
                  ? 'text-[#007BFF] font-medium'
                  : 'text-[#1E293B] hover:text-[#007BFF]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Browse Salons
            </Link>
            <a href="#ai-style" className="block text-[#1E293B] hover:text-[#007BFF]">AI Style Finder</a>
            <a href="#rewards" className="block text-[#1E293B] hover:text-[#007BFF]">Rewards</a>
            <div className="flex flex-col gap-2 pt-3">
              <Button variant="ghost" size="sm">Login</Button>
              <Button variant="primary" size="sm">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
