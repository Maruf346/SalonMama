import { HeroSection } from '../components/HeroSection';
import { TopRatedSalons } from '../components/TopRatedSalons';
import { TrendingHairstyles } from '../components/TrendingHairstyles';
import { AIFeatureShowcase } from '../components/AIFeatureShowcase';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { RewardsBanner } from '../components/RewardsBanner';
import { DownloadAppCTA } from '../components/DownloadAppCTA';
import { MotionPage, Reveal, TiltCard, Magnetic } from '../components/motion';
import { Link } from 'react-router';
import { Sparkles, ArrowRight, BookOpen, Store, CheckCircle2 } from 'lucide-react';

export function HomePage() {
  return (
    <MotionPage className="bg-[#fafbfc]">
      <HeroSection />

      <Reveal>
        <TopRatedSalons />
      </Reveal>

      <Reveal>
        <TrendingHairstyles />
      </Reveal>

      <Reveal>
        <AIFeatureShowcase />
      </Reveal>

      {/* Editorial Lookbook & Partner Showcase Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: Editorial Lookbook */}
          <TiltCard maxTilt={5}>
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-8 sm:p-10 shadow-2xl h-full flex flex-col justify-between group">
              <img
                src="https://images.unsplash.com/photo-1546804784-896d0dca3805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Editorial Lookbook"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

              <div className="relative z-10 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-yellow-300">
                  <BookOpen className="w-3.5 h-3.5" />
                  Editorial Lookbook 2026
                </span>
                <h3 className="text-3xl font-extrabold leading-tight">
                  Dhaka Couture Hair & Bridal Forecasts
                </h3>
                <p className="text-sm text-white/80 leading-relaxed max-w-sm">
                  Explore high-fashion editorial recipes, color formulas, and master stylist credits
                  from Gulshan & Banani flagships.
                </p>
              </div>

              <div className="relative z-10 pt-6">
                <Link
                  to="/lookbook"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-yellow-300 transition-colors shadow-lg"
                >
                  Explore Editorial Lookbook
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </TiltCard>

          {/* Card 2: For Salons B2B Platform */}
          <TiltCard maxTilt={5}>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#005ECE] to-[#003C8A] text-white p-8 sm:p-10 shadow-2xl h-full flex flex-col justify-between group">
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-white">
                  <Store className="w-3.5 h-3.5" />
                  SalonMama Business Network
                </span>
                <h3 className="text-3xl font-extrabold leading-tight">
                  Grow Your Salon’s Revenue by 32%
                </h3>
                <p className="text-sm text-blue-100 leading-relaxed max-w-sm">
                  Join 150+ verified Dhaka salons with smart chair booking, automated WhatsApp reminders,
                  and 0% upfront commissions.
                </p>
                <div className="flex items-center gap-3 text-xs text-blue-200">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-300" />
                    Free Photoshoot
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-300" />
                    Tablet POS Included
                  </span>
                </div>
              </div>

              <div className="relative z-10 pt-6">
                <Link
                  to="/for-salons"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#007BFF] font-bold text-xs hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Calculate Salon Revenue
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      <Reveal>
        <HowItWorks />
      </Reveal>

      <Reveal>
        <Testimonials />
      </Reveal>

      <Reveal>
        <RewardsBanner />
      </Reveal>

      <Reveal>
        <DownloadAppCTA />
      </Reveal>
    </MotionPage>
  );
}
