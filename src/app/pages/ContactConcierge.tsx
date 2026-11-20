import { useState } from 'react';
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Send,
  Search,
  ExternalLink,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MotionPage,
  Reveal,
  Stagger,
  StaggerItem,
  TiltCard,
  Magnetic,
} from '../components/motion';
import { Button } from '../components/Button';

interface FAQ {
  q: string;
  a: string;
  category: string;
}

const FAQ_DATA: FAQ[] = [
  {
    category: 'Booking & Payment',
    q: 'Can I pay directly at the salon or through bKash/Nagad?',
    a: 'Both! You can pre-pay securely via bKash, Nagad, Visa/Mastercard to unlock instant discounts and bonus rewards points, or choose "Pay at Studio" upon arrival.',
  },
  {
    category: 'Booking & Payment',
    q: 'What happens if I need to reschedule or cancel my appointment?',
    a: 'You can reschedule or cancel free of charge up to 2 hours before your reserved slot directly from your "My Bookings" page. Any prepaid balance is immediately converted to SalonMama credits or refunded.',
  },
  {
    category: 'AI Style Finder',
    q: 'How does the AI Style Finder determine the best haircut for me?',
    a: 'Our neural vision model evaluates 12 facial biometric landmarks (jawline angle, cheekbone-to-forehead proportion, forehead height) to identify your face shape, then filters styles that balance your unique geometry.',
  },
  {
    category: 'VIP Concierge',
    q: 'How do I book for a wedding party or corporate group?',
    a: 'Our VIP Concierge coordinates group appointments, private bridal suites, and simultaneous stylists at top partner salons in Gulshan and Banani. Submit the concierge form on this page or message us directly on WhatsApp.',
  },
  {
    category: 'Salon Partners',
    q: 'I own a salon in Dhaka. How do I get verified and listed on SalonMama?',
    a: 'Visit our "For Salons" page or click "List Your Salon". Our Dhaka partner team audits hygiene standards, equips your front desk with our booking tablet, and gets you live in under 48 hours.',
  },
];

const DHAKA_HUBS = [
  {
    area: 'Gulshan 1 & 2',
    salons: 42,
    badge: 'Premier Flagships',
    address: 'Road 12 & Gulshan South Ave',
    image: 'https://images.unsplash.com/photo-1695527081874-b674c46f40fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    area: 'Banani',
    salons: 38,
    badge: 'Barber & Aesthetic',
    address: 'Road 11 & Kemal Ataturk Ave',
    image: 'https://images.unsplash.com/photo-1759134155377-4207d89b39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    area: 'Dhanmondi',
    salons: 29,
    badge: 'Color & Hair Spa',
    address: 'Satmasjid Road & Road 27',
    image: 'https://images.unsplash.com/photo-1600948835780-9c4a8b55cf50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    area: 'Uttara',
    salons: 24,
    badge: 'Family & Bridal',
    address: 'Sector 3, 7 & 11',
    image: 'https://images.unsplash.com/photo-1600948836587-02c1842c9140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
];

export function ContactConcierge() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [faqSearch, setFaqSearch] = useState('');
  const [conciergeSent, setConciergeSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'Bridal Entourage',
    partySize: '1',
    preferredArea: 'Gulshan',
    notes: '',
  });

  const filteredFaqs = FAQ_DATA.filter(
    (f) =>
      f.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      f.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConciergeSent(true);
  };

  return (
    <MotionPage className="min-h-screen bg-[#fafbfc] pt-16">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#EAF6FF]/70 via-white to-[#fafbfc] py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#007BFF] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            24/7 Dedicated Client Concierge
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0f172a] leading-tight">
            We’re Here to Perfect
            <br />
            <span className="bg-gradient-to-r from-[#007BFF] to-[#36A2FF] bg-clip-text text-transparent">
              Your Beauty Experience.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#64748b] mt-4 leading-relaxed">
            Need bespoke bridal party scheduling, private salon room booking, or immediate assistance
            with your reservation? Our Dhaka concierge team responds in under 15 minutes.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/8801700000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold text-sm shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp Concierge
            </a>
            <a
              href="tel:+8801700000000"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-[#1E293B] font-semibold text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-[#007BFF]" />
              Call +880 1700-000000
            </a>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Dhaka Hubs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: VIP Concierge Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div className="mb-6">
                <span className="text-xs font-bold text-[#007BFF] uppercase tracking-wider">
                  Direct Request
                </span>
                <h3 className="text-2xl font-bold text-[#0f172a] mt-1">
                  Book with VIP Concierge Desk
                </h3>
                <p className="text-xs text-[#64748b] mt-1">
                  Ideal for weddings, multi-stylist group bookings, or custom salon requests.
                </p>
              </div>

              {conciergeSent ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0f172a]">Request Assigned to Concierge!</h4>
                  <p className="text-sm text-[#64748b] max-w-sm mx-auto">
                    Thank you, {formData.name}. Our senior concierge agent will WhatsApp/call you at{' '}
                    <span className="font-semibold text-slate-800">{formData.phone}</span> shortly.
                  </p>
                  <Button variant="outline" onClick={() => setConciergeSent(false)}>
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1E293B] mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Nusrat Jahan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1E293B] mb-1">
                        Phone Number (WhatsApp)
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

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1E293B] mb-1">
                        Occasion / Service
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
                      >
                        <option value="Bridal Entourage">Bridal Entourage</option>
                        <option value="VIP Private Suite">VIP Private Suite</option>
                        <option value="Master Colorist Booking">Master Colorist</option>
                        <option value="Corporate Grooming">Corporate Group</option>
                        <option value="Special Event Styling">Gala / Eid Styling</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1E293B] mb-1">
                        Party Size
                      </label>
                      <select
                        value={formData.partySize}
                        onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
                      >
                        <option value="1">1 Person (VIP Solo)</option>
                        <option value="2-3">2 – 3 Persons</option>
                        <option value="4-7">4 – 7 Persons</option>
                        <option value="8+">8+ Persons</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1E293B] mb-1">
                        Preferred Area
                      </label>
                      <select
                        value={formData.preferredArea}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredArea: e.target.value })
                        }
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
                      >
                        <option value="Gulshan">Gulshan</option>
                        <option value="Banani">Banani</option>
                        <option value="Dhanmondi">Dhanmondi</option>
                        <option value="Uttara">Uttara</option>
                        <option value="Bashundhara">Bashundhara</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1E293B] mb-1">
                      Specific Notes & Stylist Preferences
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us dates, specific hairstyles from our Lookbook, or special requirements..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
                    />
                  </div>

                  <div className="pt-2">
                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      Submit Concierge Request
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right: Dhaka Coverage Hubs */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#007BFF] uppercase tracking-wider">
                Dhaka Network
              </span>
              <h3 className="text-2xl font-bold text-[#0f172a] mt-1">
                Studio Hubs Across the City
              </h3>
              <p className="text-xs text-[#64748b] mt-1">
                All salons undergo in-person hygiene checks and stylist skill verifications.
              </p>
            </div>

            <div className="space-y-4">
              {DHAKA_HUBS.map((hub, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center justify-between gap-4 hover:border-blue-200 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={hub.image}
                      alt={hub.area}
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-sm text-[#0f172a]">{hub.area}</h4>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-[#007BFF]">
                          {hub.badge}
                        </span>
                      </div>
                      <p className="text-xs text-[#64748b] mt-0.5">{hub.address}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-sm font-bold text-[#007BFF]">{hub.salons}</span>
                    <p className="text-[10px] text-[#94a3b8]">studios</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section with Smooth Animated Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <Reveal className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#007BFF] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl font-bold text-[#0f172a]">Everything You Need to Know</h2>
          <div className="mt-4 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Search questions (e.g. refund, bKash, wedding)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
            />
          </div>
        </Reveal>

        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-semibold text-sm sm:text-base text-[#0f172a]">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-[#007BFF]"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 text-xs sm:text-sm text-[#64748b] leading-relaxed border-t border-gray-50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </MotionPage>
  );
}
