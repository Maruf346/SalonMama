import { Menu, X, Sparkles, Calendar, BookOpen, Store, PhoneCall, HelpCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { fadeUpVariants, staggerContainer, AnimatedTabPill, Magnetic } from './motion';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  // Simple, friendly Bangladesh English navigation
  const NAV_ITEMS = [
    { path: '/', label: 'Home' },
    { path: '/browse-salons', label: 'Find Salons' },
    { path: '/lookbook', label: 'Style Guide' },
    { path: '/ai-style-finder', label: 'AI Style Finder', isSpecial: true },
    { path: '/rewards', label: 'Rewards' },
    { path: '/for-salons', label: 'For Salon Owners' },
    { path: '/contact', label: 'Help & Contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          scrolled
            ? 'bg-white/95 backdrop-blur-2xl shadow-[0_4px_28px_rgba(0,123,255,0.08)] border-b border-gray-100/90 py-1'
            : 'bg-white/80 backdrop-blur-xl border-b border-white/40 py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group leading-none">
              <div className="h-11 w-auto max-w-[170px] flex items-center">
                <img
                  src="/logo.png"
                  alt="SalonMama - Best Salon Booking in Dhaka"
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="hidden xl:inline-block px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-semibold text-[#007BFF] tracking-wide">
                Dhaka
              </span>
            </Link>

            {/* Center Pill Nav — Desktop */}
            <div className="hidden lg:flex items-center flex-1 justify-center">
              <div className="flex items-center bg-[#f1f5f9]/85 backdrop-blur-md rounded-full p-1 gap-1 border border-gray-200/60 shadow-inner">
                {NAV_ITEMS.map((item) => {
                  const active = isActive(item.path);

                  if (item.isSpecial) {
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap z-10 ${
                          active
                            ? 'bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white shadow-md shadow-blue-300/60'
                            : 'bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white hover:opacity-95 shadow-sm'
                        }`}
                      >
                        <Sparkles className="w-3 h-3 animate-pulse" />
                        {item.label}
                      </Link>
                    );
                  }

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-300 whitespace-nowrap z-10 ${
                        active ? 'text-[#007BFF]' : 'text-[#64748b] hover:text-[#0f172a]'
                      }`}
                    >
                      {active && (
                        <AnimatedTabPill
                          layoutId="desktopNavPill"
                          className="bg-white shadow-sm border border-blue-100/80"
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right Auth & Pass — Desktop */}
            <div className="hidden md:flex items-center gap-2.5 ml-auto">
              <Link
                to="/my-bookings"
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  isActive('/my-bookings')
                    ? 'bg-blue-50 text-[#007BFF] border border-blue-200'
                    : 'text-[#475569] hover:text-[#007BFF] hover:bg-slate-100/80'
                }`}
              >
                <Calendar className="w-3.5 h-3.5 text-[#007BFF]" />
                <span>My Bookings</span>
              </Link>

              <Magnetic>
                <Link
                  to="/browse-salons"
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white text-xs font-bold shadow-[0_4px_14px_rgba(0,123,255,0.25)] hover:shadow-[0_6px_20px_rgba(0,123,255,0.4)] transition-all flex items-center gap-1.5"
                >
                  Book Salon
                </Link>
              </Magnetic>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden ml-auto w-10 h-10 rounded-xl bg-[#f1f5f9] flex items-center justify-center hover:bg-[#e2e8f0] transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-[#475569]" />
              ) : (
                <Menu className="w-5 h-5 text-[#475569]" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Slide-Down Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-x-0 top-16 z-40 bg-white/98 backdrop-blur-2xl border-b border-gray-100 shadow-2xl lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <motion.div
              className="max-w-7xl mx-auto px-4 py-4 space-y-1.5"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {NAV_ITEMS.map((item) => (
                <motion.div key={item.path} variants={fadeUpVariants}>
                  <Link
                    to={item.path}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive(item.path)
                        ? 'bg-[#EAF6FF] text-[#007BFF]'
                        : 'text-[#475569] hover:bg-[#f8fafc]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    {item.isSpecial && <Sparkles className="w-4 h-4 text-[#36A2FF]" />}
                  </Link>
                </motion.div>
              ))}

              <div className="pt-3 pb-2 border-t border-gray-100 space-y-2">
                <Link
                  to="/my-bookings"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-800 text-sm font-semibold hover:bg-slate-100 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#007BFF]" />
                    My Bookings & Pass
                  </span>
                </Link>

                <Link
                  to="/browse-salons"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full py-3 rounded-xl bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white text-center text-sm font-bold shadow-md shadow-blue-200"
                >
                  Book Salon Now
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
