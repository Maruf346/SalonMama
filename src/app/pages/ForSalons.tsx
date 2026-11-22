import { useState } from 'react';
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
  Store,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MotionPage,
  Reveal,
  PageHeaderReveal,
  Stagger,
  StaggerItem,
  TiltCard,
  Magnetic,
  AnimatedNumber,
  GlowSpotlight,
} from '../components/motion';
import { Button } from '../components/Button';
import { SEOHead } from '../components/SEOHead';

export function ForSalons() {
  // Calculator state
  const [chairs, setChairs] = useState(4);
  const [ticketPrice, setTicketPrice] = useState(700);
  const [dailyClients, setDailyClients] = useState(5);

  // Application modal state
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

  // Calculate monthly earnings (26 working days per month)
  const baseMonthly = chairs * dailyClients * ticketPrice * 26;
  const upliftPercentage = 0.3; // 30% extra from off-peak slots and AI recommendations
  const extraRevenue = Math.round(baseMonthly * upliftPercentage);
  const totalRevenue = baseMonthly + extraRevenue;
  const hoursSaved = chairs * 4;

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <MotionPage className="min-h-screen bg-[#fafbfc] pt-16">
      <SEOHead
        title="List Your Salon & Grow Your Business | For Salon Owners"
        description="Join SalonMama and get more customers for your salon or parlour in Dhaka. Free salon profile, automated WhatsApp reminders, and daily bKash/bank payouts."
        keywords="list salon dhaka, salon partner bangladesh, parlour software dhaka, salon mama business, increase salon clients dhaka"
      />

      {/* Hero Section - Immediate gentle load entrance */}
      <PageHeaderReveal>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1528] via-[#0F1E36] to-[#0A1220] text-white py-20 sm:py-26">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#36A2FF] text-xs font-semibold uppercase tracking-wider">
                  <Store className="w-3.5 h-3.5" />
                  For Salon & Parlour Owners in Dhaka
                </div>

                <h1 className="text-4xl sm:text-6xl font-extrabold leading-[1.15] tracking-tight">
                  Grow Your Salon Business
                  <br />
                  <span className="bg-gradient-to-r from-[#36A2FF] via-[#60A5FA] to-white bg-clip-text text-transparent">
                    With More Regular Clients.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
                  Get more customers every week, fill empty chairs on slow weekdays, and avoid missed
                  appointments with automatic WhatsApp reminders.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
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
                    Estimate Monthly Earnings
                  </a>
                </div>

                {/* Fast credibility metrics */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-white">
                      <AnimatedNumber value={150} suffix="+" />
                    </div>
                    <p className="text-xs text-white/60 mt-1">Salons in Dhaka</p>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-green-400">
                      <AnimatedNumber value={30} suffix="%" />
                    </div>
                    <p className="text-xs text-white/60 mt-1">More Bookings</p>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-[#36A2FF]">
                      <AnimatedNumber value={98} suffix="%" />
                    </div>
                    <p className="text-xs text-white/60 mt-1">Customer Turnout</p>
                  </div>
                </div>
              </div>

              {/* Right: Live Schedule Mockup */}
              <div className="lg:col-span-5">
                <TiltCard maxTilt={5} className="w-full">
                  <div className="bg-[#16233B]/90 backdrop-blur-xl border border-white/15 rounded-3xl p-6 shadow-2xl text-white space-y-5">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#007BFF] to-[#36A2FF] flex items-center justify-center font-bold text-sm">
                          GS
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">Glamour Studio — Gulshan</h4>
                          <span className="text-[11px] text-green-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Online Bookings Active
                          </span>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium">
                        Verified Partner
                      </span>
                    </div>

                    {/* Today's Schedule Feed */}
                    <div className="space-y-2.5">
                      <div className="text-xs text-white/60 uppercase tracking-wider font-semibold">
                        Today's Bookings (6 Slots)
                      </div>

                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-500/20 text-[#36A2FF] flex items-center justify-center text-xs font-bold">
                            11:30
                          </div>
                          <div>
                            <p className="text-xs font-semibold">Nusrat Khan • Korean Haircut</p>
                            <p className="text-[11px] text-white/60">bKash pre-paid • Stylist: Ahmed</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-green-400">৳1,200</span>
                      </div>

                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-xs font-bold">
                            02:00
                          </div>
                          <div>
                            <p className="text-xs font-semibold">Tanvir Alam • Fade & Beard</p>
                            <p className="text-[11px] text-white/60">Pay at salon • Stylist: Mehedi</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-green-400">৳850</span>
                      </div>
                    </div>

                    {/* Performance Snapshot */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-[11px] text-white/60">This Week Bookings</p>
                        <p className="text-base font-bold text-white mt-0.5">84 Clients</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-[11px] text-white/60">Weekly Earnings</p>
                        <p className="text-base font-bold text-[#36A2FF] mt-0.5">৳72,400</p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </section>
      </PageHeaderReveal>

      {/* Revenue Calculator - Scroll Reveal */}
      <Reveal amount={0.12}>
        <section id="calculator" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#007BFF] text-xs font-semibold mb-3">
              <DollarSign className="w-3.5 h-3.5" />
              Earnings Estimator
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a]">
              How Much Could Your Salon Earn?
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] mt-2">
              Move the sliders below to see your potential monthly income with SalonMama bookings.
            </p>
          </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Controls */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] space-y-8">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-[#1E293B]">
                  Number of Chairs in Your Salon
                </label>
                <span className="text-base font-bold text-[#007BFF] px-3 py-1 bg-blue-50 rounded-lg">
                  {chairs} Chairs
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                value={chairs}
                onChange={(e) => setChairs(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#007BFF]"
              />
              <div className="flex justify-between text-xs text-[#94a3b8]">
                <span>1 Chair (Small Parlour)</span>
                <span>8 Chairs</span>
                <span>15 Chairs (Big Salon)</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-[#1E293B]">
                  Average Price per Customer (BDT)
                </label>
                <span className="text-base font-bold text-[#007BFF] px-3 py-1 bg-blue-50 rounded-lg">
                  ৳{ticketPrice.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="300"
                max="2500"
                step="50"
                value={ticketPrice}
                onChange={(e) => setTicketPrice(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#007BFF]"
              />
              <div className="flex justify-between text-xs text-[#94a3b8]">
                <span>৳300 (Haircut)</span>
                <span>৳1,200</span>
                <span>৳2,500 (Color & Spa)</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-[#1E293B]">
                  Customers per Chair Each Day
                </label>
                <span className="text-base font-bold text-[#007BFF] px-3 py-1 bg-blue-50 rounded-lg">
                  {dailyClients} Customers/day
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="10"
                value={dailyClients}
                onChange={(e) => setDailyClients(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#007BFF]"
              />
              <div className="flex justify-between text-xs text-[#94a3b8]">
                <span>2 Customers</span>
                <span>5 Customers</span>
                <span>10 Customers</span>
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#007BFF] via-[#0066DF] to-[#004DBF] text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden space-y-6">
              <div>
                <span className="text-xs uppercase font-semibold text-blue-200 tracking-wider">
                  Estimated Monthly Earnings
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold mt-1 tracking-tight">
                  ৳{totalRevenue.toLocaleString()}
                </div>
                <p className="text-xs text-blue-100 mt-2">
                  Includes ~৳{extraRevenue.toLocaleString()} extra revenue from weekday appointments
                  and AI recommendations.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/20">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80">Monthly Customers</span>
                  <span className="font-bold">{(chairs * dailyClients * 26).toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80">Phone Time Saved</span>
                  <span className="font-bold text-green-300">~{hoursSaved} hrs/month</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80">Missed Appointments</span>
                  <span className="font-bold text-yellow-300">Reduced by 85%</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="w-full py-4 rounded-xl bg-white text-[#007BFF] font-bold text-sm hover:bg-blue-50 transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  List My Salon Free
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* Feature Pillars - Scroll Reveal */}
      <Reveal amount={0.12}>
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a]">
                Why Salons in Dhaka Love SalonMama
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] mt-2">
                Everything you need to get new customers and manage your daily bookings without extra staff.
              </p>
            </div>

            <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <StaggerItem className="p-6 rounded-2xl bg-[#fafbfc] border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#007BFF] flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[#0f172a]">Easy Booking Calendar</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                  See all your stylist chairs on your phone or tablet. Walk-ins and online bookings
                  stay organized in one place.
                </p>
              </StaggerItem>

              <StaggerItem className="p-6 rounded-2xl bg-[#fafbfc] border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all space-y-3">
                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[#0f172a]">WhatsApp Reminders</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                  Customers automatically receive friendly reminder messages on WhatsApp so they don't
                  forget their appointment time.
                </p>
              </StaggerItem>

              <StaggerItem className="p-6 rounded-2xl bg-[#fafbfc] border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all space-y-3">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[#0f172a]">Free Customer Photoshoot</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                  Our Dhaka team visits your salon to take high-quality professional photos of your space
                  and haircut work for free.
                </p>
              </StaggerItem>

              <StaggerItem className="p-6 rounded-2xl bg-[#fafbfc] border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[#0f172a]">Daily bKash Payouts</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                  Receive your pre-paid booking money directly into your bank account or bKash Merchant
                  wallet every morning.
                </p>
              </StaggerItem>
            </Stagger>
          </div>
        </section>
      </Reveal>

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
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="relative max-w-lg w-full bg-white rounded-3xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a]">List Your Salon</h3>
                  <p className="text-xs text-[#64748b]">Get your salon on SalonMama in 48 hours</p>
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
                    Our Dhaka onboarding team will call you at {formData.phone || 'your phone number'} within 24 hours to set up your profile.
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
                      placeholder="e.g. Dhaka Barber Lounge"
                      value={formData.salonName}
                      onChange={(e) => setFormData({ ...formData, salonName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#1E293B] mb-1">
                        Owner Name
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
                        Area in Dhaka
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
                        <option value="Bashundhara">Bashundhara</option>
                        <option value="Mirpur">Mirpur</option>
                        <option value="Mohakhali">Mohakhali</option>
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
                        <option value="Unisex">Unisex Salon</option>
                        <option value="Women">Ladies Parlour</option>
                        <option value="Men">Men’s Barber</option>
                        <option value="Spa">Beauty Spa</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      Submit Salon Details
                    </Button>
                  </div>
                  <p className="text-[11px] text-center text-[#94a3b8]">
                    Zero setup fee. You can cancel anytime.
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
