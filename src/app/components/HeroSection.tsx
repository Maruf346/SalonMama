import { Search, Sparkles, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from './Button';

export function HeroSection() {
  return (
    <section className="relative pt-16 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Professional salon styling"
          className="w-full h-full object-cover"
        />
        {/* Vibrant Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#36A2FF]/55 via-[#007BFF]/60 to-[#0056D2]/85" />
        {/* Additional radial gradients for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(54,162,255,0.2),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm text-white font-medium">AI-Powered Style Recommendations</span>
          </div> */}

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Find Salons That Match
            <br />
            Your Style
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Browse salons, discover hairstyles with AI, and book instantly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#ai-style">
              <Button variant="secondary" size="lg" className="group w-full sm:w-auto shadow-xl">
                <Sparkles className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                Try AI Style Finder
              </Button>
            </a>
            <Link to="/browse-salons">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white/20"
              >
                <MapPin className="mr-2 w-5 h-5" />
                Browse Nearby Salons
              </Button>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto pt-8">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-[#64748b]" />
              <input
                type="text"
                placeholder="Search salon, service, or location in Dhaka..."
                className="w-full pl-16 pr-6 py-5 rounded-2xl bg-white border-none focus:ring-4 focus:ring-white/30 outline-none shadow-2xl text-[#1E293B] text-lg placeholder:text-[#94a3b8]"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-3 bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white rounded-xl font-medium hover:shadow-lg transition-all">
                Search
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-white/80 text-sm">Verified Salons</div>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">10K+</div>
              <div className="text-white/80 text-sm">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">50K+</div>
              <div className="text-white/80 text-sm">Bookings Done</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Scroll Indicator — positioned above the wave (wave peak ~60px from bottom) */}
      {/* <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 animate-float hidden sm:flex flex-col items-center gap-2">
        <span className="text-white/60 text-xs font-medium tracking-widest uppercase mb-1">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 bg-white rounded-full animate-bounce" />
        </div>
      </div> */}
    </section>
  );
}
