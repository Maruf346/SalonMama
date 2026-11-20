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
          <StaggerItem className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-flex items-center gap-2">
              <img
                src="/logo2.png"
                alt="SalonMama logo"
                className="h-11 w-auto object-contain"
              />
              <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold tracking-widest uppercase">
                Luxe CMS
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Dhaka’s premier luxury salon discovery, computer-vision AI style matching, and
              verified appointment booking platform. Connecting style seekers with certified master
              studios.
            </p>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              All Systems & Booking Escrow Operational
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
                  Browse Salons
                </Link>
              </li>
              <li>
                <Link to="/lookbook" className="hover:text-white transition-colors flex items-center gap-1.5">
                  Editorial Lookbook
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/30 text-blue-200">
                    New
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/ai-style-finder" className="hover:text-white transition-colors flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-blue-400" />
                  AI Style Finder
                </Link>
              </li>
              <li>
                <Link to="/rewards" className="hover:text-white transition-colors">
                  Rewards & Loyalty
                </Link>
              </li>
              <li>
                <Link to="/my-bookings" className="hover:text-white transition-colors">
                  My Bookings & QR Pass
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
                  Partner Platform & POS
                </Link>
              </li>
              <li>
                <Link to="/for-salons#calculator" className="hover:text-white transition-colors">
                  Revenue Growth Calculator
                </Link>
              </li>
              <li>
                <Link to="/for-salons" className="hover:text-white transition-colors">
                  List Your Salon (Free)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Commercial Support
                </Link>
              </li>
            </ul>
          </StaggerItem>

          {/* Col 4: Concierge & Contact */}
          <StaggerItem>
            <h4 className="font-bold text-sm tracking-wider uppercase text-white/90 mb-4">
              Concierge & Hubs
            </h4>
            <ul className="space-y-3 text-xs text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#36A2FF] shrink-0 mt-0.5" />
                <span>Gulshan, Banani, Dhanmondi, Uttara — Dhaka</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#36A2FF] shrink-0" />
                <span>+880 1700-000000 (24/7)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#36A2FF] shrink-0" />
                <span>concierge@salonmama.bd</span>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  VIP Concierge Desk →
                </Link>
              </li>
            </ul>
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
              className="text-gray-400 hover:text-white transition-colors"
            >
              Powered by QoderLabs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
