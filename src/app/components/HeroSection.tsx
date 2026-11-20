import { Search, Sparkles, MapPin, CheckCircle, ShieldCheck, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { Button } from './Button';
import { useState } from 'react';
import { motion } from 'motion/react';
import {
  fadeUpVariants,
  staggerContainer,
  Marquee,
  AnimatedNumber,
  Magnetic,
} from './motion';

export function HeroSection() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (customQuery?: string) => {
    const q = (customQuery !== undefined ? customQuery : query).trim();
    navigate(q ? `/browse-salons?q=${encodeURIComponent(q)}` : '/browse-salons');
  };

  // Bangladesh SEO-driven popular search terms
  const QUICK_TAGS = [
    'Gulshan 2',
    'Banani 11',
    'Dhanmondi',
    'Uttara',
    'Men Haircut',
    'Ladies Parlour',
    'Hair Color',
    'Facial & Spa',
  ];

  const BRAND_PARTNERS = [
    '150+ Verified Salons in Dhaka',
    'Top Parlours in Gulshan & Banani',
    'bKash & Nagad Payment Accepted',
    'Pay at Salon Available',
    'Best Haircut & Beard Grooming',
    'Bridal & Party Makeup Packages',
    'Free AI Hairstyle Finder',
  ];

  return (
    <section className="relative pt-16 overflow-hidden bg-slate-900">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Best salon in Dhaka Bangladesh"
          className="w-full h-full object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B172E]/90 via-[#005ECE]/85 to-[#007BFF]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(54,162,255,0.25),transparent_60%)] pointer-events-none" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 sm:pb-28"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-spin" style={{ animationDuration: '6s' }} />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              Dhaka’s Trusted Salon Booking App
            </span>
          </motion.div>

          {/* Main Heading (Targeting top Bangladesh SEO keywords) */}
          <motion.h1
            variants={fadeUpVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Find & Book the Best
            <br />
            <span className="bg-gradient-to-r from-white via-[#EAF6FF] to-blue-200 bg-clip-text text-transparent">
              Salons in Dhaka
            </span>
          </motion.h1>

          {/* Subheading (Clear, friendly, Bangladesh English) */}
          <motion.p
            variants={fadeUpVariants}
            className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto"
          >
            Discover top-rated barbers, ladies parlours, and hair spas near you. Test new hairstyles
            with our free AI tool and book your slot in seconds.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Magnetic>
              <Link to="/ai-style-finder">
                <Button variant="secondary" size="lg" className="group w-full sm:w-auto shadow-2xl">
                  <Sparkles className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform text-[#007BFF]" />
                  Try AI Hairstyle Finder
                </Button>
              </Link>
            </Magnetic>

            <Magnetic>
              <Link to="/browse-salons">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/20"
                >
                  <MapPin className="mr-2 w-5 h-5 text-white" />
                  Find Salons Near You
                </Button>
              </Link>
            </Magnetic>
          </motion.div>

          {/* Search Bar */}
          <motion.div variants={fadeUpVariants} className="max-w-3xl mx-auto pt-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
              className="relative shadow-2xl rounded-2xl group"
            >
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b] group-focus-within:text-[#007BFF] transition-colors" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search salon name, area (Gulshan, Banani, Dhanmondi, Uttara)..."
                className="w-full pl-14 pr-32 py-4 sm:py-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/60 focus:ring-4 focus:ring-blue-300/40 outline-none shadow-2xl text-[#1E293B] text-base placeholder:text-[#94a3b8] transition-all"
              />
              <button
                type="submit"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all cursor-pointer"
              >
                Search
              </button>
            </form>

            {/* Quick search tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              <span className="text-xs text-white/75 font-medium">Popular Searches:</span>
              {QUICK_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleSearch(tag)}
                  className="px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white text-xs font-medium backdrop-blur-sm transition-all cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Animated Quick Stats */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-wrap justify-center items-center gap-8 pt-6"
          >
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white mb-0.5">
                <AnimatedNumber value={150} suffix="+" />
              </div>
              <div className="text-white/80 text-xs uppercase tracking-wider font-medium">
                Verified Salons
              </div>
            </div>
            <div className="w-px h-10 bg-white/25 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white mb-0.5">
                <AnimatedNumber value={45} suffix="K+" />
              </div>
              <div className="text-white/80 text-xs uppercase tracking-wider font-medium">
                Happy Customers
              </div>
            </div>
            <div className="w-px h-10 bg-white/25 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-extrabold text-yellow-300 mb-0.5">4.9★</div>
              <div className="text-white/80 text-xs uppercase tracking-wider font-medium">
                Customer Rating
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Infinite Marquee Ticker */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md border-y border-white/15 py-3">
        <Marquee speed={40}>
          {BRAND_PARTNERS.map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-wider text-white/90 whitespace-nowrap px-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
              {brand}
            </div>
          ))}
        </Marquee>
      </div>

      {/* Bottom Wave Shape */}
      <div className="relative bottom-0 left-0 right-0 z-0">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto text-[#fafbfc] fill-current"
        >
          <path d="M0 90L60 82C120 75 240 60 360 52C480 45 600 45 720 48C840 52 960 60 1080 64C1200 68 1320 68 1380 68L1440 68V90H1380C1320 90 1200 90 1080 90C960 90 840 90 720 90C600 90 480 90 360 90C240 90 120 90 60 90H0V90Z" />
        </svg>
      </div>
    </section>
  );
}
