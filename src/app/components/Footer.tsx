import { Link } from 'react-router';
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ShieldCheck,
  Heart,
  HelpCircle,
} from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from './motion';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0F172A] to-[#080D1A] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Stagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12"
          amount={0.1}
        >
          {/* Col 1: Brand & Bio */}
          <StaggerItem className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <img
                src="/logo2.png"
                alt="SalonMama logo - Salon booking in Dhaka"
                className="h-11 w-auto object-contain"
              />
              <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold tracking-wider uppercase">
                Dhaka
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Dhaka’s trusted platform for finding top salons, testing hairstyles with AI, and booking
              appointments without waiting in queues.
            </p>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Online Bookings Active Across Dhaka
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#007BFF] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E1306C] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1DA1F2] flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </StaggerItem>

          {/* Col 2: Discover */}
          <StaggerItem>
            <h4 className="font-bold text-sm tracking-wider uppercase text-white/90 mb-4">
              Explore & Book
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link to="/browse-salons" className="hover:text-white transition-colors">
                  Find Salons
                </Link>
              </li>
              <li>
                <Link to="/lookbook" className="hover:text-white transition-colors flex items-center gap-1.5">
                  Style Guide
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/30 text-blue-200">
                    Trends
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/ai-style-finder" className="hover:text-white transition-colors flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-blue-400" />
                  AI Hairstyle Tool
                </Link>
              </li>
              <li>
                <Link to="/rewards" className="hover:text-white transition-colors">
                  Points & Rewards
                </Link>
              </li>
              <li>
                <Link to="/my-bookings" className="hover:text-white transition-colors">
                  My Bookings
                </Link>
              </li>
            </ul>
          </StaggerItem>

          {/* Col 3: For Businesses */}
          <StaggerItem>
            <h4 className="font-bold text-sm tracking-wider uppercase text-white/90 mb-4">
              For Salon Owners
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link to="/for-salons" className="hover:text-white transition-colors font-semibold text-[#36A2FF]">
                  List Your Salon Free
                </Link>
              </li>
              <li>
                <Link to="/for-salons#calculator" className="hover:text-white transition-colors">
                  Earnings Calculator
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Partner Support
                </Link>
              </li>
            </ul>
          </StaggerItem>

          {/* Col 4: Contact & Help */}
          <StaggerItem>
            <h4 className="font-bold text-sm tracking-wider uppercase text-white/90 mb-4">
              Help & Contact
            </h4>
            <ul className="space-y-3 text-xs text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#36A2FF] shrink-0 mt-0.5" />
                <span>Gulshan, Banani, Dhanmondi, Uttara — Dhaka</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#36A2FF] shrink-0" />
                <span>+880 1700-000000 (Daily 9am–10pm)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#36A2FF] shrink-0" />
                <span>support@salonmama.bd</span>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-[#36A2FF]" />
                  Customer Help Desk →
                </Link>
              </li>
            </ul>

            <div className="mt-6 border-t border-white/10 pt-5">
              <a
                href="http://qoderlabs.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-xs text-gray-400 transition-colors hover:text-white group"
              >
                <span className="w-9 h-9 rounded-full bg-white p-1.5 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    src="/qoderlabs.png"
                    alt="QoderLabs"
                    className="w-full h-full object-contain"
                  />
                </span>
                <span>
                  Powered by{' '}
                  <span className="font-semibold text-white">QoderLabs</span>
                </span>
              </a>
            </div>
          </StaggerItem>
        </Stagger>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} SalonMama Ltd. All rights reserved. Dhaka, Bangladesh.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-slate-400">
              Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for Dhaka Beauty
            </span>
            <a
              href="http://qoderlabs.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <span>Powered by</span>
              <span className="w-6 h-6 rounded-full bg-white p-1 flex items-center justify-center shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform">
                <img
                  src="/qoderlabs.png"
                  alt="QoderLabs"
                  className="w-full h-full object-contain"
                />
              </span>
              <span className="font-semibold text-white">QoderLabs</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
