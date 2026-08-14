import { Link } from 'react-router';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from './motion';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1E293B] to-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Stagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          amount={0.12}
          staggerChildren={0.18}
          delayChildren={0.08}
        >
          <StaggerItem>
            <Link to="/" className="inline-flex items-center mb-6">
              <img
                src="/logo2.png"
                alt="SalonMama logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-white/70 mb-6">
              Your trusted platform for discovering and booking the best salons in Bangladesh.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </StaggerItem>

          <StaggerItem>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/browse-salons" className="text-white/70 hover:text-white transition-colors">Browse Salons</Link></li>
              <li><a href="#ai-style" className="text-white/70 hover:text-white transition-colors">AI Style Finder</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Trending Styles</a></li>
              <li><a href="#rewards" className="text-white/70 hover:text-white transition-colors">Rewards Program</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Download App</a></li>
            </ul>
          </StaggerItem>

          <StaggerItem>
            <h3 className="font-semibold text-lg mb-4">For Businesses</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">List Your Salon</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Business Dashboard</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Support</a></li>
            </ul>
          </StaggerItem>

          <StaggerItem>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#36A2FF] mt-0.5 flex-shrink-0" />
                <span className="text-white/70">support@salonmama.bd</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#36A2FF] mt-0.5 flex-shrink-0" />
                <span className="text-white/70">+880 1700-000000</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#36A2FF] mt-0.5 flex-shrink-0" />
                <span className="text-white/70">Dhaka, Bangladesh</span>
              </li>
            </ul>
            <div className="mt-6 border-t border-white/10 pt-5">
              <a
                href="http://qoderlabs.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white"
              >
                <span className="w-9 h-9 rounded-full bg-white p-2 flex items-center justify-center shadow-md flex-shrink-0">
                  <img
                    src="/qoderlabs.png"
                    alt="QoderLabs"
                    className="w-full h-full object-contain"
                  />
                </span>
                <span>
                  Made with care by{' '}
                  <span className="font-semibold text-white">QoderLabs</span>
                </span>
              </a>
            </div>
          </StaggerItem>
        </Stagger>

        <Reveal className="pt-8 border-t border-white/10" duration={0.9} amount={0.12}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2026 SalonMama. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
