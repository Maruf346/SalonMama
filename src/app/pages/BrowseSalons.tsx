import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import {
  MapPin,
  Star,
  Clock,
  Filter,
  X,
  Search,
  SlidersHorizontal,
  LayoutGrid,
  List,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ArrowUpDown,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Button } from '../components/Button';
import { MotionPage, Reveal, PageHeaderReveal, Stagger, StaggerItem, AnimatedTabPill, TiltCard } from '../components/motion';
import { BookingModal } from '../components/BookingModal';
import { SEOHead } from '../components/SEOHead';

interface Salon {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  location: string;
  area: string;
  price: string;
  priceNumeric: number;
  priceRange: number;
  services: string[];
  gender: string[];
  isOpen: boolean;
  image: string;
  hours: string;
  distance: string;
  distanceNumeric: number;
}

export function BrowseSalons() {
  const [searchParams] = useSearchParams();

  const [selectedFilters, setSelectedFilters] = useState({
    location: 'all',
    rating: 'all',
    serviceType: 'all',
    gender: 'all',
    priceRange: 'all',
  });

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'distance' | 'reviews'>('rating');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') ?? '');
  const [bookingSalon, setBookingSalon] = useState<string | null>(null);

  useEffect(() => {
    const q = searchParams.get('q') ?? '';
    setSearchQuery(q);
  }, [searchParams]);

  const salons: Salon[] = [
    {
      id: 1,
      name: 'Glamour Studio',
      rating: 4.9,
      reviews: 234,
      location: 'Gulshan 2, Dhaka',
      area: 'Gulshan',
      price: '৳500',
      priceNumeric: 500,
      priceRange: 2,
      services: ['Haircut', 'Facial', 'Spa', 'Massage'],
      gender: ['Women', 'Men'],
      isOpen: true,
      image:
        'https://images.unsplash.com/photo-1695527081874-b674c46f40fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      hours: '9:00 AM - 9:00 PM',
      distance: '2.3 km',
      distanceNumeric: 2.3,
    },
    {
      id: 2,
      name: 'Elite Barber House',
      rating: 4.8,
      reviews: 189,
      location: 'Banani, Dhaka',
      area: 'Banani',
      price: '৳400',
      priceNumeric: 400,
      priceRange: 2,
      services: ['Haircut', 'Beard', 'Styling', 'Shave'],
      gender: ['Men'],
      isOpen: true,
      image:
        'https://images.unsplash.com/photo-1759134155377-4207d89b39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      hours: '10:00 AM - 10:00 PM',
      distance: '3.1 km',
      distanceNumeric: 3.1,
    },
    {
      id: 3,
      name: 'Royal Hair Lounge',
      rating: 4.7,
      reviews: 156,
      location: 'Dhanmondi, Dhaka',
      area: 'Dhanmondi',
      price: '৳600',
      priceNumeric: 600,
      priceRange: 3,
      services: ['Hair Color', 'Treatment', 'Styling', 'Keratin'],
      gender: ['Women'],
      isOpen: false,
      image:
        'https://images.unsplash.com/photo-1773904215697-e6c21fc27ac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      hours: '10:00 AM - 8:00 PM',
      distance: '4.5 km',
      distanceNumeric: 4.5,
    },
    {
      id: 4,
      name: 'The Style Hub',
      rating: 4.9,
      reviews: 298,
      location: 'Uttara, Dhaka',
      area: 'Uttara',
      price: '৳450',
      priceNumeric: 450,
      priceRange: 2,
      services: ['Haircut', 'Facial', 'Massage', 'Waxing'],
      gender: ['Women', 'Men'],
      isOpen: true,
      image:
        'https://images.unsplash.com/photo-1630835425197-50feeba99ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      hours: '9:00 AM - 9:00 PM',
      distance: '5.2 km',
      distanceNumeric: 5.2,
    },
    {
      id: 5,
      name: 'Luxe Salon & Spa',
      rating: 4.8,
      reviews: 176,
      location: 'Mirpur, Dhaka',
      area: 'Mirpur',
      price: '৳550',
      priceNumeric: 550,
      priceRange: 3,
      services: ['Spa', 'Massage', 'Facial', 'Body Treatment'],
      gender: ['Women'],
      isOpen: true,
      image:
        'https://images.unsplash.com/photo-1695527081793-91a2d4b5b103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      hours: '10:00 AM - 8:00 PM',
      distance: '6.1 km',
      distanceNumeric: 6.1,
    },
    {
      id: 6,
      name: 'Modern Cuts',
      rating: 4.6,
      reviews: 143,
      location: 'Mohakhali, Dhaka',
      area: 'Mohakhali',
      price: '৳350',
      priceNumeric: 350,
      priceRange: 1,
      services: ['Haircut', 'Styling', 'Beard'],
      gender: ['Men'],
      isOpen: true,
      image:
        'https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      hours: '9:00 AM - 10:00 PM',
      distance: '1.8 km',
      distanceNumeric: 1.8,
    },
    {
      id: 7,
      name: 'Beauty Haven',
      rating: 4.7,
      reviews: 201,
      location: 'Bashundhara, Dhaka',
      area: 'Bashundhara',
      price: '৳650',
      priceNumeric: 650,
      priceRange: 3,
      services: ['Hair Color', 'Highlights', 'Treatment', 'Styling'],
      gender: ['Women'],
      isOpen: true,
      image:
        'https://images.unsplash.com/photo-1695527081882-a8b051dac51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      hours: '10:00 AM - 8:00 PM',
      distance: '7.3 km',
      distanceNumeric: 7.3,
    },
    {
      id: 8,
      name: 'Chaps & Co',
      rating: 4.9,
      reviews: 267,
      location: 'Banani, Dhaka',
      area: 'Banani',
      price: '৳700',
      priceNumeric: 700,
      priceRange: 3,
      services: ['Premium Cut', 'Beard', 'Hot Towel Shave', 'Grooming'],
      gender: ['Men'],
      isOpen: true,
      image:
        'https://images.unsplash.com/photo-1759142235060-3191ee596c81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      hours: '11:00 AM - 10:00 PM',
      distance: '3.5 km',
      distanceNumeric: 3.5,
    },
    {
      id: 9,
      name: 'Serenity Spa',
      rating: 4.8,
      reviews: 188,
      location: 'Gulshan 1, Dhaka',
      area: 'Gulshan',
      price: '৳800',
      priceNumeric: 800,
      priceRange: 3,
      services: ['Spa', 'Thai Massage', 'Aromatherapy', 'Body Scrub'],
      gender: ['Women', 'Men'],
      isOpen: false,
      image:
        'https://images.unsplash.com/photo-1695527081728-e3a42f0ce261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      hours: '10:00 AM - 9:00 PM',
      distance: '2.7 km',
      distanceNumeric: 2.7,
    },
  ];

  const DHAKA_AREAS = [
    { id: 'all', label: 'All Dhaka' },
    { id: 'Gulshan', label: 'Gulshan' },
    { id: 'Banani', label: 'Banani' },
    { id: 'Dhanmondi', label: 'Dhanmondi' },
    { id: 'Uttara', label: 'Uttara' },
    { id: 'Bashundhara', label: 'Bashundhara' },
    { id: 'Mirpur', label: 'Mirpur' },
  ];

  const filteredSalons = salons
    .filter((salon) => {
      if (
        searchQuery &&
        !salon.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !salon.location.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      if (selectedFilters.location !== 'all' && salon.area !== selectedFilters.location) {
        return false;
      }
      if (selectedFilters.rating !== 'all') {
        const minRating = parseFloat(selectedFilters.rating);
        if (salon.rating < minRating) return false;
      }
      if (
        selectedFilters.serviceType !== 'all' &&
        !salon.services.includes(selectedFilters.serviceType)
      ) {
        return false;
      }
      if (selectedFilters.gender !== 'all' && !salon.gender.includes(selectedFilters.gender)) {
        return false;
      }
      if (selectedFilters.priceRange !== 'all') {
        const range = parseInt(selectedFilters.priceRange);
        if (salon.priceRange !== range) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price') return a.priceNumeric - b.priceNumeric;
      if (sortBy === 'distance') return a.distanceNumeric - b.distanceNumeric;
      if (sortBy === 'reviews') return b.reviews - a.reviews;
      return 0;
    });

  return (
    <MotionPage className="min-h-screen bg-[#fafbfc] pt-16">
      <SEOHead
        title="Find Top Salons & Ladies Parlours in Dhaka"
        description="Browse 150+ verified salons in Dhaka (Gulshan, Banani, Dhanmondi, Uttara). Compare prices for haircut, facial, beard trim, hair color, and book instantly."
        keywords="salons in dhaka, best salon gulshan, ladies parlour banani, men haircut price dhaka, beauty parlour dhanmondi, facial salon dhaka"
      />
      {/* Header Banner - Immediate gentle load entrance */}
      <PageHeaderReveal>
        <section className="bg-gradient-to-br from-[#005ECE] via-[#007BFF] to-[#004BB5] text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-2xl space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                Verified Dhaka Salons & Parlours
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Find Trusted Salons in Dhaka
              </h1>
              <p className="text-white/85 text-sm sm:text-base">
                Browse 150+ verified barbers and ladies parlours across Dhaka. See exact prices, read customer reviews, and book easily.
              </p>
            </div>

            {/* Search bar inside header */}
            <div className="mt-8 max-w-2xl relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search salon by name, service, or neighborhood..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-800 text-sm shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300/40"
              />
            </div>

            {/* Dhaka Area Tabs with layoutId */}
            <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {DHAKA_AREAS.map((area) => {
                const active = selectedFilters.location === area.id;
                return (
                  <button
                    key={area.id}
                    onClick={() =>
                      setSelectedFilters((prev) => ({ ...prev, location: area.id }))
                    }
                    className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer z-10 ${active ? 'text-[#007BFF]' : 'text-white/80 hover:text-white'
                      }`}
                  >
                    {active && (
                      <AnimatedTabPill
                        layoutId="dhakaAreaPill"
                        className="bg-white shadow-md text-[#007BFF]"
                      />
                    )}
                    <span className="relative z-10">{area.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </PageHeaderReveal>

      {/* Main Content Area - Scroll Reveal */}
      <Reveal amount={0.08}>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Controls Toolbar: Filter toggle, Results count, Sort, View mode */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100 mb-8">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${showFilters
                    ? 'bg-[#007BFF] text-white border-[#007BFF] shadow-sm'
                    : 'bg-white text-slate-700 border-gray-200 hover:border-gray-300'
                  }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
                {Object.values(selectedFilters).filter((v) => v !== 'all').length > 0 && (
                  <span className="w-4 h-4 rounded-full bg-yellow-400 text-slate-900 text-[10px] flex items-center justify-center font-bold">
                    {Object.values(selectedFilters).filter((v) => v !== 'all').length}
                  </span>
                )}
              </button>

              <span className="text-xs text-[#64748b]">
                Showing <strong className="text-slate-900">{filteredSalons.length}</strong> studios
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Sort Dropdown */}
              <div className="flex items-center gap-1.5 text-xs">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#64748b]" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-white border border-gray-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
                >
                  <option value="rating">Highest Rated</option>
                  <option value="price">Lowest Price</option>
                  <option value="distance">Nearest to You</option>
                  <option value="reviews">Most Reviewed</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-100 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white text-[#007BFF] shadow-sm' : 'text-gray-500'
                    }`}
                  aria-label="Grid View"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white text-[#007BFF] shadow-sm' : 'text-gray-500'
                    }`}
                  aria-label="List View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Collapsible Filters Drawer */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden mb-8"
              >
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Service Type
                    </label>
                    <select
                      value={selectedFilters.serviceType}
                      onChange={(e) =>
                        setSelectedFilters({ ...selectedFilters, serviceType: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#007BFF] outline-none"
                    >
                      <option value="all">All Services</option>
                      <option value="Haircut">Haircut</option>
                      <option value="Beard">Beard Sculpt</option>
                      <option value="Facial">Facial & Skin</option>
                      <option value="Spa">Spa & Massage</option>
                      <option value="Hair Color">Hair Color</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Gender</label>
                    <select
                      value={selectedFilters.gender}
                      onChange={(e) =>
                        setSelectedFilters({ ...selectedFilters, gender: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#007BFF] outline-none"
                    >
                      <option value="all">All Genders</option>
                      <option value="Men">Men Only</option>
                      <option value="Women">Women Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Minimum Rating</label>
                    <select
                      value={selectedFilters.rating}
                      onChange={(e) =>
                        setSelectedFilters({ ...selectedFilters, rating: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#007BFF] outline-none"
                    >
                      <option value="all">Any Rating</option>
                      <option value="4.5">4.5★ & Above</option>
                      <option value="4.8">4.8★ & Above</option>
                    </select>
                  </div>

                  <div className="flex items-end">
                    <button
                      onClick={() => {
                        setSelectedFilters({
                          location: 'all',
                          rating: 'all',
                          serviceType: 'all',
                          gender: 'all',
                          priceRange: 'all',
                        });
                        setSearchQuery('');
                      }}
                      className="w-full py-2 rounded-xl border border-gray-200 hover:bg-gray-50 text-xs font-semibold text-slate-600 transition-colors"
                    >
                      Reset All Filters
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Salons Render (Grid vs List) */}
          {viewMode === 'grid' ? (
            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredSalons.map((salon) => (
                  <motion.div
                    layout
                    key={salon.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-blue-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,123,255,0.09)] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-52 overflow-hidden bg-slate-100">
                        <img
                          src={salon.image}
                          alt={salon.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                        <div className="absolute top-3 right-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-sm ${salon.isOpen ? 'bg-emerald-500/90 text-white' : 'bg-rose-500/90 text-white'
                              }`}
                          >
                            {salon.isOpen ? 'Open Now' : 'Closed'}
                          </span>
                        </div>

                        <div className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-blue-300" />
                          <span>{salon.distance} away</span>
                        </div>
                      </div>

                      <div className="p-5 space-y-3">
                        <div>
                          <h3 className="font-bold text-lg text-[#0f172a] group-hover:text-[#007BFF] transition-colors">
                            {salon.name}
                          </h3>

                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                              <span className="font-bold text-xs text-[#0f172a]">{salon.rating}</span>
                              <span className="text-xs text-[#94a3b8]">({salon.reviews})</span>
                            </div>
                            <span className="text-gray-300">•</span>
                            <span className="text-xs text-[#64748b] truncate">{salon.location}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {salon.services.slice(0, 3).map((serv, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#007BFF] text-[11px] font-semibold"
                            >
                              {serv}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div>
                          <p className="text-[10px] uppercase text-[#94a3b8] font-medium">Starting from</p>
                          <p className="text-base font-extrabold text-[#007BFF]">{salon.price}</p>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setBookingSalon(salon.name)}
                            className="px-3.5 py-2 rounded-xl bg-blue-50 text-[#007BFF] hover:bg-blue-100 text-xs font-bold transition-colors"
                          >
                            Book Slot
                          </button>
                          <Link to={`/salon/${salon.id}`}>
                            <Button variant="primary" size="sm">
                              Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* List View Mode */
            <motion.div layout className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filteredSalons.map((salon) => (
                  <motion.div
                    layout
                    key={salon.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={salon.image}
                        alt={salon.name}
                        className="w-20 h-20 rounded-xl object-cover shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-base text-[#0f172a]">{salon.name}</h3>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${salon.isOpen ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                              }`}
                          >
                            {salon.isOpen ? 'Open' : 'Closed'}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-[#64748b] mt-1">
                          <span className="flex items-center gap-1 font-semibold text-slate-800">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            {salon.rating} ({salon.reviews})
                          </span>
                          <span>•</span>
                          <span>{salon.location}</span>
                          <span>•</span>
                          <span>{salon.distance}</span>
                        </div>
                        <p className="text-xs text-[#94a3b8] mt-1">{salon.services.join(' • ')}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
                      <div className="text-right">
                        <p className="text-[10px] uppercase text-[#94a3b8]">From</p>
                        <p className="text-base font-bold text-[#007BFF]">{salon.price}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setBookingSalon(salon.name)}
                          className="px-3.5 py-2 rounded-xl bg-blue-50 text-[#007BFF] hover:bg-blue-100 text-xs font-bold transition-colors"
                        >
                          Book Slot
                        </button>
                        <Link to={`/salon/${salon.id}`}>
                          <Button variant="primary" size="sm">
                            Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Empty state */}
          {filteredSalons.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 p-8">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-[#007BFF] flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-1">No Studios Found</h3>
              <p className="text-xs text-[#64748b] mb-6">
                No salons matched your current filters. Try resetting to explore all areas.
              </p>
              <Button
                variant="primary"
                onClick={() => {
                  setSelectedFilters({
                    location: 'all',
                    rating: 'all',
                    serviceType: 'all',
                    gender: 'all',
                    priceRange: 'all',
                  });
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </section>
      </Reveal>

      {/* Booking Modal */}
      <BookingModal
        isOpen={!!bookingSalon}
        onClose={() => setBookingSalon(null)}
        salonName={bookingSalon || 'Glamour Studio'}
      />
    </MotionPage>
  );
}
