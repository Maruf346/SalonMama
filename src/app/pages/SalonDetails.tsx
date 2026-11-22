import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import {
  Star, MapPin, Clock, Phone, Globe, Heart, Share2,
  CheckCircle, Award, Sparkles, ChevronLeft, ChevronRight,
  X, Calendar, ZoomIn, Users, ChevronDown, ChevronUp,
} from 'lucide-react';
import { BookingModal } from '../components/BookingModal';
import { MotionPage, Reveal, PageHeaderReveal } from '../components/motion';
import { SEOHead } from '../components/SEOHead';

const TODAY_SLOTS = [
  { time: '10:00 AM', available: true },
  { time: '11:30 AM', available: false },
  { time: '1:00 PM', available: true },
  { time: '2:30 PM', available: true },
  { time: '4:00 PM', available: false },
  { time: '5:30 PM', available: true },
  { time: '7:00 PM', available: true },
];

export function SalonDetails() {
  const { id } = useParams();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [saved, setSaved] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(0);

  const salon = {
    id: 1,
    name: 'Glamour Studio',
    tagline: 'Where Style Meets Excellence',
    rating: 4.9,
    reviews: 234,
    location: 'House 45, Road 12, Gulshan 2, Dhaka 1212',
    area: 'Gulshan 2',
    phone: '+880 1700-123456',
    website: 'www.glamourstudio.bd',
    hours: 'Mon – Sun  9:00 AM – 9:00 PM',
    isOpen: true,
    priceStart: '৳500',
    about:
      "Glamour Studio is Dhaka's premier luxury salon offering world-class hair and beauty services. With over 10 years of experience, our team of expert stylists brings out your natural beauty through personalized treatments and the latest techniques.",
    coverImage:
      'https://images.unsplash.com/photo-1695527081874-b674c46f40fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    features: [
      'Premium Quality Products',
      'Expert Certified Stylists',
      'Hygienic Environment',
      'Modern Equipment',
      'Complimentary Refreshments',
      'Free Parking Available',
    ],
  };

  const services = [
    {
      category: 'Haircut & Styling',
      icon: '✂️',
      items: [
        { name: "Men's Haircut", price: '৳500', duration: '45 min' },
        { name: "Women's Haircut", price: '৳800', duration: '1 hour' },
        { name: 'Kids Haircut', price: '৳400', duration: '30 min' },
        { name: 'Hair Styling', price: '৳600', duration: '45 min' },
      ],
    },
    {
      category: 'Hair Color & Treatment',
      icon: '🎨',
      items: [
        { name: 'Full Hair Color', price: '৳2,500', duration: '2–3 hours' },
        { name: 'Highlights', price: '৳3,000', duration: '2–3 hours' },
        { name: 'Keratin Treatment', price: '৳4,000', duration: '3 hours' },
        { name: 'Hair Spa', price: '৳1,500', duration: '1.5 hours' },
      ],
    },
    {
      category: 'Facial & Skin Care',
      icon: '✨',
      items: [
        { name: 'Classic Facial', price: '৳1,200', duration: '1 hour' },
        { name: 'Deep Cleansing Facial', price: '৳1,800', duration: '1.5 hours' },
        { name: 'Anti-Aging Facial', price: '৳2,500', duration: '1.5 hours' },
        { name: 'Acne Treatment', price: '৳2,000', duration: '1 hour' },
      ],
    },
    {
      category: 'Spa & Massage',
      icon: '💆',
      items: [
        { name: 'Head Massage', price: '৳800', duration: '30 min' },
        { name: 'Full Body Massage', price: '৳3,000', duration: '1.5 hours' },
        { name: 'Foot Spa', price: '৳1,000', duration: '45 min' },
        { name: 'Manicure & Pedicure', price: '৳1,500', duration: '1.5 hours' },
      ],
    },
  ];

  const stylists = [
    {
      id: 1,
      name: 'Ahmed Rahman',
      role: 'Senior Hair Stylist',
      experience: '10+ years',
      specialty: "Men's Haircuts, Beard Styling",
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1598524374912-6b0b0bab43dd?crop=entropy&cs=tinysrgb&fit=crop&w=200&h=200&q=80',
    },
    {
      id: 2,
      name: 'Fatima Khan',
      role: 'Color Specialist',
      experience: '8+ years',
      specialty: 'Hair Coloring, Highlights',
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1578390432942-d323db577792?crop=entropy&cs=tinysrgb&fit=crop&w=200&h=200&q=80',
    },
    {
      id: 3,
      name: 'Mehedi Hasan',
      role: 'Master Barber',
      experience: '12+ years',
      specialty: 'Classic Cuts, Hot Shaves',
      rating: 5.0,
      image:
        'https://images.unsplash.com/photo-1553521041-d168abd31de3?crop=entropy&cs=tinysrgb&fit=crop&w=200&h=200&q=80',
    },
    {
      id: 4,
      name: 'Nadia Islam',
      role: 'Beauty Specialist',
      experience: '6+ years',
      specialty: 'Facials, Skin Care',
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1605497787865-e6d4762b386f?crop=entropy&cs=tinysrgb&fit=crop&w=200&h=200&q=80',
    },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1614438865362-9137f7e3036e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1706629505300-168aa1604912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1675034743339-0b0747047727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1760862652442-e8ff7ebdd2f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  ];

  const reviews = [
    {
      id: 1,
      name: 'Ayesha Rahman',
      rating: 5,
      date: 'May 10, 2026',
      comment:
        'Absolutely amazing experience! Ahmed did a fantastic job with my haircut. The atmosphere is so professional and welcoming. Will definitely come back!',
      service: 'Haircut & Styling',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=crop&w=80&h=80&q=80',
    },
    {
      id: 2,
      name: 'Karim Hassan',
      rating: 5,
      date: 'May 8, 2026',
      comment:
        "Best barber in Dhaka! Mehedi is a true master of his craft. The hot towel shave was incredibly relaxing. Highly recommended!",
      service: 'Hot Shave',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&w=80&h=80&q=80',
    },
    {
      id: 3,
      name: 'Nusrat Jahan',
      rating: 4,
      date: 'May 5, 2026',
      comment:
        "Great service and very clean facility. Fatima did an excellent job with my hair color. The only downside was the wait time, but it was worth it!",
      service: 'Hair Color',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=crop&w=80&h=80&q=80',
    },
  ];

  const availableCount = TODAY_SLOTS.filter(s => s.available).length;

  // Lightbox keyboard navigation
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (lightboxIdx === null) return;
    if (e.key === 'Escape') setLightboxIdx(null);
    if (e.key === 'ArrowLeft') setLightboxIdx(i => i !== null ? Math.max(0, i - 1) : null);
    if (e.key === 'ArrowRight') setLightboxIdx(i => i !== null ? Math.min(gallery.length - 1, i + 1) : null);
  }, [lightboxIdx, gallery.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIdx !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIdx]);

  return (
    <MotionPage>
      <SEOHead
        title={`${salon.name} - ${salon.area}, Dhaka | Prices, Stylists & Booking`}
        description={`Book appointment at ${salon.name} in ${salon.area}, Dhaka. Haircut starting from ${salon.priceStart}. Check stylists, reviews, services list, and available slots today.`}
        keywords={`${salon.name.toLowerCase()}, salon in ${salon.area.toLowerCase()}, haircut price ${salon.area.toLowerCase()}, best salon dhaka, book ${salon.name.toLowerCase()}`}
      />
      <div className="min-h-screen bg-white">

        {/* ─── Hero Cover - Immediate gentle load entrance ─── */}
        <PageHeaderReveal>
          <div className="relative h-[480px] sm:h-[540px] overflow-hidden">
            <img
              src={salon.coverImage}
              alt={salon.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

            {/* Breadcrumb */}
            <div className="absolute top-20 left-0 right-0 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                  <ChevronRight className="w-4 h-4" />
                  <Link to="/browse-salons" className="hover:text-white transition-colors">Browse Salons</Link>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white font-medium">{salon.name}</span>
                </div>
              </div>
            </div>

            {/* Action buttons top-right */}
            <div className="absolute top-20 right-4 sm:right-6 lg:right-8 flex gap-2">
              <div className="max-w-7xl mx-auto flex gap-2">
                <button
                  onClick={() => setSaved(s => !s)}
                  className={`w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all ${
                    saved ? 'bg-rose-500 shadow-lg' : 'bg-white/20 border border-white/30 hover:bg-white/30'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${saved ? 'fill-white text-white' : 'text-white'}`} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Share2 className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Salon Info Glass Card */}
            <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-8">
              <div className="max-w-7xl mx-auto">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 sm:p-6 shadow-xl">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h1 className="text-2xl sm:text-3xl font-bold text-white">{salon.name}</h1>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          salon.isOpen
                            ? 'bg-green-500/20 text-green-300 border border-green-400/30'
                            : 'bg-red-500/20 text-red-300 border border-red-400/30'
                        }`}>
                          <span className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 ${salon.isOpen ? 'bg-green-400' : 'bg-red-400'} animate-pulse`} />
                          {salon.isOpen ? 'Open Now' : 'Closed'}
                        </span>
                      </div>
                      <p className="text-white/80 text-sm mb-3">{salon.tagline}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
                        <div className="flex items-center gap-1.5">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-white">{salon.rating}</span>
                          <span>({salon.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{salon.area}, Dhaka</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          <span>{salon.hours}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-green-400" />
                          <span className="text-green-300 font-semibold">{availableCount} slots today</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsBookingOpen(true)}
                      className="hidden sm:flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white font-semibold shadow-lg shadow-blue-900/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                    >
                      <Calendar className="w-4 h-4" />
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageHeaderReveal>

        {/* ─── Main Layout ─── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid lg:grid-cols-3 gap-8 items-start">

            {/* ── Left — Main Content ── */}
            <div className="lg:col-span-2 space-y-10">

              {/* About */}
              <Reveal>
              <section>
                <h2 className="text-xl font-bold text-[#1E293B] mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#007BFF]" />
                  About {salon.name}
                </h2>
                <p className="text-[#475569] leading-relaxed">{salon.about}</p>

                {/* Quick feature pills */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {salon.features.map((f, i) => (
                    <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EAF6FF] text-[#007BFF] text-xs font-medium border border-blue-100">
                      <CheckCircle className="w-3 h-3" />
                      {f}
                    </span>
                  ))}
                </div>
              </section>
              </Reveal>

              {/* Services — Accordion */}
              <Reveal>
              <section>
                <h2 className="text-xl font-bold text-[#1E293B] mb-5 flex items-center gap-2">
                  <span className="text-lg">🗂️</span>
                  Services & Pricing
                </h2>
                <div className="space-y-3">
                  {services.map((cat, catIdx) => (
                    <div key={catIdx} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                      <button
                        onClick={() => setExpandedService(expandedService === catIdx ? null : catIdx)}
                        className="w-full flex items-center justify-between p-5 bg-white hover:bg-[#f8fafc] transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{cat.icon}</span>
                          <span className="font-semibold text-[#1E293B]">{cat.category}</span>
                          <span className="text-xs text-[#94a3b8] font-medium">{cat.items.length} services</span>
                        </div>
                        {expandedService === catIdx
                          ? <ChevronUp className="w-4 h-4 text-[#64748b]" />
                          : <ChevronDown className="w-4 h-4 text-[#64748b]" />
                        }
                      </button>

                      <AnimatePresence initial={false}>
                      {expandedService === catIdx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="overflow-hidden border-t border-gray-50 divide-y divide-gray-50"
                        >
                          {cat.items.map((item, itemIdx) => (
                            <div
                              key={itemIdx}
                              className="flex items-center justify-between px-5 py-4 bg-[#fafbfc] hover:bg-[#EAF6FF]/30 transition-colors group"
                            >
                              <div>
                                <div className="font-medium text-[#1E293B] group-hover:text-[#007BFF] transition-colors text-sm">
                                  {item.name}
                                </div>
                                <div className="text-xs text-[#94a3b8] flex items-center gap-1 mt-0.5">
                                  <Clock className="w-3 h-3" />
                                  {item.duration}
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-base font-bold text-[#007BFF]">{item.price}</span>
                                <button
                                  onClick={() => setIsBookingOpen(true)}
                                  className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white text-xs font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                                >
                                  Book
                                </button>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </section>
              </Reveal>

              {/* Gallery */}
              <Reveal>
              <section>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-xl font-bold text-[#1E293B] flex items-center gap-2">
                    <span className="text-lg">🖼️</span>
                    Gallery
                  </h2>
                  <span className="text-sm text-[#64748b]">{gallery.length} photos</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {gallery.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setLightboxIdx(idx)}
                      className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition-shadow"
                    >
                      <img
                        src={img}
                        alt={`Gallery ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                        <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              </Reveal>

              {/* Team */}
              <Reveal>
              <section>
                <h2 className="text-xl font-bold text-[#1E293B] mb-5 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#007BFF]" />
                  Meet the Team
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {stylists.map(stylist => (
                    <div
                      key={stylist.id}
                      className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group"
                    >
                      <img
                        src={stylist.image}
                        alt={stylist.name}
                        className="w-16 h-16 rounded-xl object-cover flex-shrink-0 shadow-sm"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[#1E293B] group-hover:text-[#007BFF] transition-colors">{stylist.name}</div>
                        <div className="text-xs text-[#007BFF] font-medium mb-1">{stylist.role}</div>
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-semibold text-[#1E293B]">{stylist.rating}</span>
                          <span className="text-xs text-[#94a3b8]">· {stylist.experience}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-[#64748b] mb-3">
                          <Award className="w-3 h-3 text-[#007BFF] flex-shrink-0" />
                          {stylist.specialty}
                        </div>
                        <button
                          onClick={() => setIsBookingOpen(true)}
                          className="text-xs font-semibold text-[#007BFF] hover:text-[#0056D2] flex items-center gap-1 transition-colors"
                        >
                          Book with {stylist.name.split(' ')[0]}
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              </Reveal>

              {/* Reviews */}
              <Reveal>
              <section>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-xl font-bold text-[#1E293B] flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    Reviews
                  </h2>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-bold text-[#1E293B]">{salon.rating}</span>
                    <span className="text-sm text-[#64748b]">({salon.reviews})</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {reviews.map(review => (
                    <div key={review.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-start gap-3 mb-3">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <span className="font-semibold text-[#1E293B] text-sm">{review.name}</span>
                            <div className="flex items-center gap-1">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <div className="text-xs text-[#94a3b8] mt-0.5">{review.date}</div>
                        </div>
                      </div>
                      <p className="text-sm text-[#475569] leading-relaxed mb-3">{review.comment}</p>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#EAF6FF] text-[#007BFF] text-xs font-medium">
                        <Sparkles className="w-3 h-3" />
                        {review.service}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
              </Reveal>

            </div>

            {/* ── Right — Sticky Sidebar ── */}
            <div className="lg:col-span-1">
              <Reveal delay={0.15}>
                <div className="space-y-5 lg:sticky lg:top-24">

              {/* Book CTA */}
              <div className="bg-gradient-to-br from-[#36A2FF] to-[#007BFF] rounded-2xl p-6 text-white shadow-xl shadow-blue-200/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1),transparent_55%)] pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-1">Ready to Book?</h3>
                  <p className="text-white/80 text-sm mb-5">
                    Starting from <span className="font-bold text-white">{salon.priceStart}</span>
                  </p>

                  {/* Live availability */}
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-sm font-semibold">
                        {availableCount} slots available today
                      </span>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-1.5">
                      {TODAY_SLOTS.map((slot, i) => (
                        <button
                          key={i}
                          disabled={!slot.available}
                          onClick={() => slot.available && setIsBookingOpen(true)}
                          className={`px-2 py-1.5 rounded-lg text-[10px] font-semibold transition-all ${
                            slot.available
                              ? 'bg-white/20 border border-white/30 text-white hover:bg-white/30 hover:-translate-y-0.5'
                              : 'bg-white/5 border border-white/10 text-white/30 cursor-not-allowed line-through'
                          }`}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full py-3.5 rounded-xl bg-white text-[#007BFF] font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </button>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-[#1E293B] mb-4">Contact & Info</h3>
                <div className="space-y-3">
                  {[
                    { Icon: MapPin, label: 'Address', value: salon.location },
                    { Icon: Phone, label: 'Phone', value: salon.phone },
                    { Icon: Globe, label: 'Website', value: salon.website },
                    { Icon: Clock, label: 'Hours', value: salon.hours },
                  ].map(({ Icon, label, value }, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#EAF6FF] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-[#007BFF]" />
                      </div>
                      <div>
                        <div className="text-xs text-[#94a3b8] font-medium">{label}</div>
                        <div className="text-sm text-[#1E293B] font-medium">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Floating Book Button (Mobile) ─── */}
      <div className="fixed bottom-6 inset-x-4 lg:hidden z-40">
        <button
          onClick={() => setIsBookingOpen(true)}
          className="w-full py-4 bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white rounded-2xl shadow-2xl font-bold flex items-center justify-center gap-2 hover:shadow-blue-300/50 transition-all animate-pulse-glow"
        >
          <Sparkles className="w-5 h-5" />
          Book Now · from {salon.priceStart}
        </button>
      </div>

      {/* ─── Gallery Lightbox ─── */}
      <AnimatePresence>
      {lightboxIdx !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setLightboxIdx(null)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            onClick={() => setLightboxIdx(null)}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-20 z-10"
            onClick={e => { e.stopPropagation(); setLightboxIdx(i => i !== null ? Math.max(0, i - 1) : null); }}
            disabled={lightboxIdx === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <motion.img
            src={gallery[lightboxIdx]}
            alt={`Gallery ${lightboxIdx + 1}`}
            className="max-w-[88vw] max-h-[82vh] object-contain rounded-xl shadow-2xl animate-scale-in"
            onClick={e => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
          />

          {/* Next */}
          <button
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-20 z-10"
            onClick={e => { e.stopPropagation(); setLightboxIdx(i => i !== null ? Math.min(gallery.length - 1, i + 1) : null); }}
            disabled={lightboxIdx === gallery.length - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
            {lightboxIdx + 1} / {gallery.length}
          </div>

          {/* Thumbnail strip */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={e => { e.stopPropagation(); setLightboxIdx(i); }}
                className={`w-10 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                  i === lightboxIdx ? 'border-white scale-110' : 'border-white/20 hover:border-white/50'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>
      )}
      </AnimatePresence>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        salonName={salon.name}
      />
    </MotionPage>
  );
}
