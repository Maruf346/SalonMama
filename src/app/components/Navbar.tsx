import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-white/95 backdrop-blur-2xl shadow-[0_2px_24px_rgba(0,123,255,0.10)] border-b border-gray-100'
            : 'bg-white/70 backdrop-blur-xl border-b border-white/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#36A2FF] to-[#007BFF] flex items-center justify-center shadow-[0_4px_14px_rgba(0,123,255,0.35)] group-hover:shadow-[0_6px_20px_rgba(0,123,255,0.5)] group-hover:scale-105 transition-all duration-200">
                <span className="text-white font-extrabold text-base leading-none select-none">S</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent to-white/15 pointer-events-none" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[17px] font-bold bg-gradient-to-r from-[#007BFF] to-[#0056D2] bg-clip-text text-transparent tracking-tight">
                  SalonMama
                </span>
                <span className="text-[9px] font-semibold text-[#94a3b8] tracking-[0.18em] uppercase mt-0.5">
                  Beauty Redefined
                </span>
              </div>
            </Link>

            {/* Center Pill Nav — Desktop */}
            <div className="hidden lg:flex items-center flex-1 justify-center">
              <div className="flex items-center bg-[#f1f5f9]/90 rounded-full p-1.5 gap-0.5 border border-gray-200/70">

                <Link
                  to="/"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive('/')
                      ? 'bg-white text-[#007BFF] shadow-sm border border-blue-100/80'
                      : 'text-[#64748b] hover:text-[#007BFF] hover:bg-white/70'
                  }`}
                >
                  Home
                </Link>

                <Link
                  to="/browse-salons"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive('/browse-salons')
                      ? 'bg-white text-[#007BFF] shadow-sm border border-blue-100/80'
                      : 'text-[#64748b] hover:text-[#007BFF] hover:bg-white/70'
                  }`}
                >
                  Browse Salons
                </Link>

                {/* AI Style Finder — Gradient pill */}
                <Link
                  to="/ai-style-finder"
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                    isActive('/ai-style-finder')
                      ? 'bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white shadow-md shadow-blue-200/70'
                      : 'bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white shadow-sm shadow-blue-100 hover:shadow-md hover:shadow-blue-200 hover:-translate-y-0.5'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  AI Style Finder
                </Link>

                <Link
                  to="/rewards"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive('/rewards')
                      ? 'bg-white text-[#007BFF] shadow-sm border border-blue-100/80'
                      : 'text-[#64748b] hover:text-[#007BFF] hover:bg-white/70'
                  }`}
                >
                  Rewards
                </Link>

              </div>
            </div>

            {/* Right Auth — Desktop */}
            <div className="hidden md:flex items-center gap-2 ml-auto">
              <button className="px-4 py-2 rounded-full text-sm font-medium text-[#475569] hover:text-[#007BFF] hover:bg-[#EAF6FF] transition-all duration-200">
                Login
              </button>
              <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white text-sm font-semibold shadow-[0_4px_14px_rgba(0,123,255,0.3)] hover:shadow-[0_6px_20px_rgba(0,123,255,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
                Sign Up Free
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden ml-auto w-9 h-9 rounded-xl bg-[#f1f5f9] flex items-center justify-center hover:bg-[#e2e8f0] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen
                ? <X className="w-[18px] h-[18px] text-[#475569]" />
                : <Menu className="w-[18px] h-[18px] text-[#475569]" />
              }
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Slide-Down Menu */}
      <div
        className={`fixed inset-x-0 top-16 z-40 bg-white/98 backdrop-blur-2xl border-b border-gray-100 shadow-xl transition-all duration-300 ease-out md:hidden ${
          isMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">

          <Link
            to="/"
            className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              isActive('/') ? 'bg-[#EAF6FF] text-[#007BFF] font-semibold' : 'text-[#475569] hover:bg-[#f8fafc]'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/browse-salons"
            className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              isActive('/browse-salons') ? 'bg-[#EAF6FF] text-[#007BFF] font-semibold' : 'text-[#475569] hover:bg-[#f8fafc]'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Browse Salons
          </Link>

          <Link
            to="/ai-style-finder"
            className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
              isActive('/ai-style-finder')
                ? 'bg-gradient-to-r from-[#EAF6FF] to-[#dbeafe] text-[#007BFF]'
                : 'text-[#007BFF] bg-[#EAF6FF]/50 hover:bg-[#EAF6FF]'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Sparkles className="w-4 h-4" />
            AI Style Finder
          </Link>

          <Link
            to="/rewards"
            className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              isActive('/rewards') ? 'bg-[#EAF6FF] text-[#007BFF] font-semibold' : 'text-[#475569] hover:bg-[#f8fafc]'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Rewards
          </Link>

          <div className="pt-3 pb-1 flex flex-col gap-2.5 border-t border-gray-100 mt-2">
            <button className="w-full py-3 rounded-xl border-2 border-gray-200 text-sm font-semibold text-[#475569] hover:border-[#007BFF] hover:text-[#007BFF] transition-all">
              Login
            </button>
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white text-sm font-semibold shadow-md shadow-blue-200">
              Sign Up Free
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
