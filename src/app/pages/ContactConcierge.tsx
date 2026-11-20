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
  HelpCircle,
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
import { SEOHead } from '../components/SEOHead';

interface FAQ {
  q: string;
  a: string;
  category: string;
}

const FAQ_DATA: FAQ[] = [
  {
    category: 'Booking & Payment',
    q: 'Can I pay directly at the salon or through bKash/Nagad?',
    a: 'Yes, you can pay using whatever is easiest for you! You can pre-pay with bKash, Nagad, or debit/credit card to get extra discount points, or simply choose "Pay at Salon" when you arrive.',
  },
  {
    category: 'Booking & Payment',
    q: 'How do I cancel or reschedule my salon booking?',
    a: 'You can cancel or change your time easily from the "My Bookings" page up to 2 hours before your appointment without any cancellation fee. Any pre-paid money is refunded immediately to your account.',
  },
  {
    category: 'AI Style Finder',
    q: 'How does the free AI Style Finder work?',
    a: 'You just take or upload a selfie. Our tool automatically checks your face shape (Oval, Round, Square, or Heart) and recommends haircuts that look best on you, along with salons in Dhaka that do that style.',
  },
  {
    category: 'Group Bookings',
    q: 'Can I book for bridal makeup or a group of friends?',
    a: 'Yes! If you have a wedding, party, or group of friends wanting haircuts or makeup together, send us a WhatsApp message or fill out the form below. We will coordinate everything with the salon.',
  },
  {
    category: 'Salon Owners',
    q: 'How can a salon or parlour in Dhaka join SalonMama?',
    a: 'If you run a salon in Gulshan, Banani, Dhanmondi, Uttara or anywhere in Dhaka, visit our "For Salon Owners" page or call us. We will set up your profile and tablet in less than 48 hours.',
  },
];

const DHAKA_HUBS = [
  {
    area: 'Gulshan 1 & 2',
    salons: 42,
    badge: 'Popular for Hair Color & Spa',
    address: 'Road 11, Road 12 & South Avenue',
    image: 'https://images.unsplash.com/photo-1695527081874-b674c46f40fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    area: 'Banani',
    salons: 38,
    badge: 'Top Barbers & Ladies Parlours',
    address: 'Road 11 & Kemal Ataturk Avenue',
    image: 'https://images.unsplash.com/photo-1759134155377-4207d89b39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    area: 'Dhanmondi',
    salons: 29,
    badge: 'Trending Haircuts & Treatments',
    address: 'Satmasjid Road & Road 27',
    image: 'https://images.unsplash.com/photo-1600948835780-9c4a8b55cf50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    area: 'Uttara',
    salons: 24,
    badge: 'Family Salons & Bridal Care',
    address: 'Sector 3, Sector 7 & Sector 11',
    image: 'https://images.unsplash.com/photo-1600948836587-02c1842c9140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
];

export function ContactConcierge() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [faqSearch, setFaqSearch] = useState('');
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'Bridal & Party Makeup',
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
    setRequestSent(true);
  };

  return (
    <MotionPage className="min-h-screen bg-[#fafbfc] pt-16">
      <SEOHead
        title="Contact Us & Booking Help | Customer Support"
        description="Need help booking a salon in Dhaka? Contact SalonMama customer support on WhatsApp or phone. Book bridal makeup, group appointments, and get quick assistance."
        keywords="salon customer support dhaka, contact salon mama, salon booking help dhaka, bridal makeup booking dhaka, salon in gulshan contact"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#EAF6FF]/70 via-white to-[#fafbfc] py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#007BFF] text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Customer Support & Booking Help
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-tight">
            How Can We Help You Today?
          </h1>
          <p className="text-base sm:text-lg text-[#64748b] mt-4 leading-relaxed">
            Need help booking a haircut, wedding makeup for your family, or finding a trusted parlour
            near you in Dhaka? Our support team replies within a few minutes.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/8801700000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp (+880 1700-000000)
            </a>
            <a
              href="tel:+8801700000000"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 text-[#1E293B] font-bold text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-[#007BFF]" />
              Call Customer Care
            </a>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Dhaka Hubs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: Booking Help Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div className="mb-6">
                <span className="text-xs font-bold text-[#007BFF] uppercase tracking-wider">
                  Quick Booking Help
                </span>
                <h3 className="text-2xl font-bold text-[#0f172a] mt-1">
                  Book for a Wedding, Group, or Special Occasion
                </h3>
                <p className="text-xs text-[#64748b] mt-1">
                  Tell us what you need and our Dhaka team will confirm the best time and salon for you.
                </p>
              </div>

              {requestSent ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0f172a]">Request Received!</h4>
                  <p className="text-sm text-[#64748b] max-w-sm mx-auto">
                    Thank you, {formData.name}. Our Dhaka support manager will message or call you at{' '}
                    <span className="font-semibold text-slate-800">{formData.phone}</span> shortly.
                  </p>
                  <Button variant="outline" onClick={() => setRequestSent(false)}>
                    Send Another Request
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
                        Service Needed
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
                      >
                        <option value="Bridal & Party Makeup">Bridal / Party Makeup</option>
                        <option value="Haircut & Styling">Haircut & Styling</option>
                        <option value="Hair Color & Highlights">Hair Color & Highlights</option>
                        <option value="Facial & Skin Care">Facial & Skin Care</option>
                        <option value="Group / Family Grooming">Group or Family Package</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1E293B] mb-1">
                        Number of People
                      </label>
                      <select
                        value={formData.partySize}
                        onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
                      >
                        <option value="1">1 Person</option>
                        <option value="2-3">2 – 3 Persons</option>
                        <option value="4-7">4 – 7 Persons</option>
                        <option value="8+">8+ Persons</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1E293B] mb-1">
                        Area in Dhaka
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
                        <option value="Mirpur">Mirpur</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1E293B] mb-1">
                      Notes or Specific Preferences (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention preferred dates, times, or any specific salon you want to visit..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
                    />
                  </div>

                  <div className="pt-2">
                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      Send Request
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
                Our Salons
              </span>
              <h3 className="text-2xl font-bold text-[#0f172a] mt-1">
                Verified Salons Across Dhaka
              </h3>
              <p className="text-xs text-[#64748b] mt-1">
                All listed salons follow strict cleanliness and fair pricing guidelines.
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
                      alt={`Salons in ${hub.area} Dhaka`}
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
                    <p className="text-[10px] text-[#94a3b8]">salons</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <Reveal className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#007BFF] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl font-bold text-[#0f172a]">Questions & Answers</h2>
          <div className="mt-4 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Search (e.g. bKash, refund, bridal, booking)..."
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
                    transition={{ duration: 0.3 }}
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
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
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
