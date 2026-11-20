import { useState, useId } from 'react';
import {
  TrendingUp,
  Users,
  Calendar,
  ShieldCheck,
  Sparkles,
  Zap,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Smartphone,
  Star,
  Clock,
  ChevronRight,
  HelpCircle,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MotionPage,
  Reveal,
  Stagger,
  StaggerItem,
  TiltCard,
  Magnetic,
  AnimatedNumber,
  GlowSpotlight,
} from '../components/motion';
import { Button } from '../components/Button';

export function ForSalons() {
  // Calculator state
  const [chairs, setChairs] = useState(4);
  const [ticketPrice, setTicketPrice] = useState(850);
  const [dailyClients, setDailyClients] = useState(6);

  // Modal application state
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    salonName: '',
    ownerName: '',
    phone: '',
    area: 'Gulshan',
    salonType: 'Unisex',
    chairsCount: '4',
  });

  // Calculate monthly metrics (26 operating days per month)
  const baseMonthly = chairs * dailyClients * ticketPrice * 26;
  const upliftPercentage = 0.32; // 32% increase via AI matching & off-peak fills
  const extraRevenue = Math.round(baseMonthly * upliftPercentage);
  const totalRevenue = baseMonthly + extraRevenue;
  const hoursSaved = chairs * 4.5;

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep state
    }, 1500);
  };

  return (
    <MotionPage className="min-h-screen bg-[#fafbfc] pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1528] via-[#0F1E36] to-[#0A1220] text-white py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#007BFF]/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#36A2FF] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                SalonMama Business Partner Platform
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold leading-[1.1] tracking-tight">
                Turn Empty Chairs Into
                <br />
                <span className="bg-gradient-to-r from-[#36A2FF] via-[#60A5FA] to-white bg-clip-text text-transparent">
                  Predictable Revenue.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl">
                Bangladesh’s premier salon operating ecosystem. Fill slow hours with AI-matched
                clients, eliminate no-shows with automated WhatsApp reminders, and streamline daily
                billing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Magnetic>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => setIsApplyOpen(true)}
                    className="shadow-xl shadow-blue-500/25 px-8"
                  >
                    List Your Salon (Free 30 Days)
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Magnetic>

                <a
                  href="#calculator"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all"
                >
                  Calculate Potential Revenue
                </a>
              </div>

              {/* Fast credibility metrics */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    <AnimatedNumber value={150} suffix="+" />
                  </div>
                  <p className="text-xs text-white/60 mt-1">Verified Dhaka Studios</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-green-400">
                    <AnimatedNumber value={32} suffix="%" />
                  </div>
                  <p className="text-xs text-white/60 mt-1">Avg. Revenue Uplift</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#36A2FF]">
                    <AnimatedNumber value={98} suffix=".4%" />
                  </div>
                  <p className="text-xs text-white/60 mt-1">Appointment Turnout</p>
                </div>
              </div>
            </Reveal>

            {/* Right: Interactive Live CMS Dashboard Mockup */}
            <Reveal className="lg:col-span-5" delay={0.2}>
              <TiltCard maxTilt={6} className="w-full">
                <div className="bg-[#16233B]/90 backdrop-blur-xl border border-white/15 rounded-3xl p-6 shadow-2xl text-white space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#007BFF] to-[#36A2FF] flex items-center justify-center font-bold text-sm">
                        GS
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Glamour Studio — Gulshan</h4>
                        <span className="text-[11px] text-green-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Live Booking Stream Active
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium">
                      PRO Partner
                    </span>
                  </div>

                  {/* Today's Schedule Feed */}
                  <div className="space-y-3">
                    <div className="text-xs text-white/60 uppercase tracking-wider font-semibold">
                      Upcoming Today (7 Slots Booked)
                    </div>

                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 text-[#36A2FF] flex items-center justify-center text-xs font-bold">
                          11:30
                        </div>
                        <div>
                          <p className="text-xs font-semibold">Nusrat Khan • Korean Two-Block</p>
                          <p className="text-[11px] text-white/60">Stylist: Ahmed • bKash Pre-paid</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-green-400">৳1,200</span>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-xs font-bold">
                          01:00
                        </div>
                        <div>
                          <p className="text-xs font-semibold">Tanvir Alam • Beard & Keratin</p>
                          <p className="text-[11px] text-white/60">Stylist: Mehedi • AI Match</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-green-400">৳2,400</span>
                    </div>
                  </div>

                  {/* Performance Snapshot */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-[11px] text-white/60">This Week Bookings</p>
                      <p className="text-lg font-bold text-white mt-0.5">84 Appointments</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-[11px] text-white/60">Net Payout (Auto)</p>
                      <p className="text-lg font-bold text-[#36A2FF] mt-0.5">৳142,800</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Interactive Revenue Calculator */}
      <section id="calculator" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#007BFF] text-xs font-semibold mb-3">
            <DollarSign className="w-3.5 h-3.5" />
            ROI & Revenue Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a]">
            Calculate Your Salon’s Growth Potential
          </h2>
          <p className="text-base text-[#64748b] mt-3">
            Adjust your salon specs below to see how SalonMama unlocks off-peak bookings and repeat
            client retention.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Controls */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] space-y-8">
            {/* Slider 1: Chairs */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-[#1E293B]">
                  Number of Active Styling Chairs / Stations
                </label>
                <span className="text-base font-bold text-[#007BFF] px-3 py-1 bg-blue-50 rounded-lg">
                  {chairs} Chairs
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={chairs}
                onChange={(e) => setChairs(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#007BFF]"
              />
              <div className="flex justify-between text-xs text-[#94a3b8]">
                <span>1 Chair (Boutique)</span>
                <span>10 Chairs</span>
                <span>20 Chairs (Flagship)</span>
              </div>
            </div>

            {/* Slider 2: Average Service Ticket */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-[#1E293B]">
                  Average Service Ticket Value (BDT)
                </label>
                <span className="text-base font-bold text-[#007BFF] px-3 py-1 bg-blue-50 rounded-lg">
                  ৳{ticketPrice.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="300"
                max="3500"
                step="50"
                value={ticketPrice}
                onChange={(e) => setTicketPrice(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#007BFF]"
              />
              <div className="flex justify-between text-xs text-[#94a3b8]">
                <span>৳300 (Basic Haircut)</span>
                <span>৳1,500</span>
                <span>৳3,500 (Color & Spa)</span>
              </div>
            </div>

            {/* Slider 3: Clients per Chair */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-[#1E293B]">
                  Avg. Clients Serviced Per Chair Per Day
                </label>
                <span className="text-base font-bold text-[#007BFF] px-3 py-1 bg-blue-50 rounded-lg">
                  {dailyClients} Clients/day
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="12"
                value={dailyClients}
                onChange={(e) => setDailyClients(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#007BFF]"
              />
              <div className="flex justify-between text-xs text-[#94a3b8]">
                <span>2 Clients</span>
                <span>6 Clients</span>
                <span>12 Clients</span>
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#007BFF] via-[#0066DF] to-[#004DBF] text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden space-y-6">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <span className="text-xs uppercase font-semibold text-blue-200 tracking-wider">
                  Estimated Monthly Gross
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold mt-1 tracking-tight">
                  ৳{totalRevenue.toLocaleString()}
                </div>
                <p className="text-xs text-blue-100 mt-2">
                  Includes ~৳{extraRevenue.toLocaleString()} in incremental revenue from SalonMama
                  smart slots & AI matching.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/20">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80">Monthly Appointments</span>
                  <span className="font-bold">{(chairs * dailyClients * 26).toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80">Phone Call Hours Saved</span>
                  <span className="font-bold text-green-300">~{hoursSaved} hrs/mo</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80">No-Show Reduction</span>
                  <span className="font-bold text-yellow-300">Down to &lt; 2.5%</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="w-full py-4 rounded-xl bg-white text-[#007BFF] font-bold text-sm hover:bg-blue-50 transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  Join as Verified Partner
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillars */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a]">
              Engineered for Modern Salon Operations
            </h2>
            <p className="text-base text-[#64748b] mt-3">
              Everything required to run, market, and scale your salon without hiring extra front-desk staff.
            </p>
          </Reveal>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerItem className="p-6 rounded-2xl bg-[#fafbfc] border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#007BFF] flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#0f172a]">Live Stylist Schedule</h3>
              <p className="text-sm text-[#64748b] leading-relaxed">
                Color-coded chair calendar that syncs instantly with both in-salon walk-ins and SalonMama app bookings.
              </p>
            </StaggerItem>

            <StaggerItem className="p-6 rounded-2xl bg-[#fafbfc] border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#0f172a]">WhatsApp Automation</h3>
              <p className="text-sm text-[#64748b] leading-relaxed">
                Automated 2-hour and 24-hour reminder messages sent to clients in Bengali and English to virtually eliminate no-shows.
              </p>
            </StaggerItem>

            <StaggerItem className="p-6 rounded-2xl bg-[#fafbfc] border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#0f172a]">AI Style Finder Leads</h3>
              <p className="text-sm text-[#64748b] leading-relaxed">
                When users try virtual hair colors or haircut styles on the app, your salon is recommended as the certified execution partner.
              </p>
            </StaggerItem>

            <StaggerItem className="p-6 rounded-2xl bg-[#fafbfc] border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#0f172a]">Instant Next-Day Payouts</h3>
              <p className="text-sm text-[#64748b] leading-relaxed">
                Direct bank, bKash Merchant, or Nagad settlement every morning with zero delayed lock-ins.
              </p>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Partner Testimonials */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F172A] rounded-3xl p-8 sm:p-14 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-2xl sm:text-3xl font-medium leading-relaxed">
                "Before SalonMama, our Monday to Wednesday weekday mornings in Banani were nearly empty.
                Now we run at 85%+ capacity all 7 days with zero phone coordination headache."
              </blockquote>
              <div>
                <p className="font-bold text-lg text-white">Rafiqul Islam</p>
                <p className="text-sm text-white/60">Founder, Elite Barber House (Banani & Dhanmondi)</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
              <h4 className="text-lg font-bold">Partner Onboarding Guarantee</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                  Free high-resolution salon photoshoot by SalonMama team
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                  Staff onboarding & live POS tablet configuration in 48 hours
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                  0% platform commission on your first 50 bookings
                </li>
              </ul>
              <Button
                variant="primary"
                size="lg"
                onClick={() => setIsApplyOpen(true)}
                className="w-full bg-[#36A2FF] hover:bg-[#007BFF]"
              >
                Apply to Become a Partner
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Drawer / Modal */}
      <AnimatePresence>
        {isApplyOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setIsApplyOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative max-w-lg w-full bg-white rounded-3xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a]">Salon Partnership Request</h3>
                  <p className="text-xs text-[#64748b]">Get your studio live in Dhaka within 48 hours</p>
                </div>
                <button
                  onClick={() => setIsApplyOpen(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0f172a]">Application Received!</h4>
                  <p className="text-sm text-[#64748b] max-w-xs mx-auto">
                    Our Dhaka partner account manager will contact you at {formData.phone || '+880 17...'} within 24 business hours to schedule your onboarding.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setIsApplyOpen(false);
                    }}
                  >
                    Done
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="pt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1E293B] mb-1">
                      Salon Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hair Couture Lounge"
                      value={formData.salonName}
                      onChange={(e) => setFormData({ ...formData, salonName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#1E293B] mb-1">
                        Owner / Manager Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.ownerName}
                        onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1E293B] mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+880 17..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#1E293B] mb-1">
                        Dhaka Location Area
                      </label>
                      <select
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
                      >
                        <option value="Gulshan">Gulshan 1 & 2</option>
                        <option value="Banani">Banani</option>
                        <option value="Dhanmondi">Dhanmondi</option>
                        <option value="Uttara">Uttara</option>
                        <option value="Bashundhara">Bashundhara R/A</option>
                        <option value="Mirpur">Mirpur</option>
                        <option value="Mohakhali">Mohakhali / DOHS</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1E293B] mb-1">
                        Salon Type
                      </label>
                      <select
                        value={formData.salonType}
                        onChange={(e) => setFormData({ ...formData, salonType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
                      >
                        <option value="Unisex">Unisex Salon & Spa</option>
                        <option value="Women">Women Only Studio</option>
                        <option value="Men">Men’s Barber House</option>
                        <option value="Medispa">Aesthetic Medispa</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      Submit Partner Application
                    </Button>
                  </div>
                  <p className="text-[11px] text-center text-[#94a3b8]">
                    No upfront setup fees. You can pause or cancel anytime.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </MotionPage>
  );
}
