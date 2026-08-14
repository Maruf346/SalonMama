import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import { MapPin, Star, Clock, Filter, X, Search, SlidersHorizontal } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Button } from '../components/Button';
import { MotionPage, Reveal, Stagger, fadeUpVariants } from '../components/motion';

interface Salon {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  location: string;
  area: string;
  price: string;
  priceRange: number;
  services: string[];
  gender: string[];
  isOpen: boolean;
  image: string;
  hours: string;
  distance: string;
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

  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') ?? '');

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
      priceRange: 2,
      services: ['Haircut', 'Facial', 'Spa', 'Massage'],
      gender: ['Women', 'Men'],
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1695527081874-b674c46f40fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      hours: '9:00 AM - 9:00 PM',
      distance: '2.3 km',
    },
    {
      id: 2,
      name: 'Elite Barber House',
      rating: 4.8,
      reviews: 189,
      location: 'Banani, Dhaka',
      area: 'Banani',
      price: '৳400',
      priceRange: 2,
      services: ['Haircut', 'Beard', 'Styling', 'Shave'],
      gender: ['Men'],
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1759134155377-4207d89b39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      hours: '10:00 AM - 10:00 PM',
      distance: '3.1 km',
    },
    {
      id: 3,
      name: 'Royal Hair Lounge',
      rating: 4.7,
      reviews: 156,
      location: 'Dhanmondi, Dhaka',
      area: 'Dhanmondi',
      price: '৳600',
      priceRange: 3,
      services: ['Hair Color', 'Treatment', 'Styling', 'Keratin'],
      gender: ['Women'],
      isOpen: false,
      image: 'https://images.unsplash.com/photo-1773904215697-e6c21fc27ac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      hours: '10:00 AM - 8:00 PM',
      distance: '4.5 km',
    },
    {
      id: 4,
      name: 'The Style Hub',
      rating: 4.9,
      reviews: 298,
      location: 'Uttara, Dhaka',
      area: 'Uttara',
      price: '৳450',
      priceRange: 2,
      services: ['Haircut', 'Facial', 'Massage', 'Waxing'],
      gender: ['Women', 'Men'],
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1630835425197-50feeba99ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      hours: '9:00 AM - 9:00 PM',
      distance: '5.2 km',
    },
    {
      id: 5,
      name: 'Luxe Salon & Spa',
      rating: 4.8,
      reviews: 176,
      location: 'Mirpur, Dhaka',
      area: 'Mirpur',
      price: '৳550',
      priceRange: 3,
      services: ['Spa', 'Massage', 'Facial', 'Body Treatment'],
      gender: ['Women'],
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1695527081793-91a2d4b5b103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      hours: '10:00 AM - 8:00 PM',
      distance: '6.1 km',
    },
    {
      id: 6,
      name: 'Modern Cuts',
      rating: 4.6,
      reviews: 143,
      location: 'Mohakhali, Dhaka',
      area: 'Mohakhali',
      price: '৳350',
      priceRange: 1,
      services: ['Haircut', 'Styling', 'Beard'],
      gender: ['Men'],
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      hours: '9:00 AM - 10:00 PM',
      distance: '1.8 km',
    },
    {
      id: 7,
      name: 'Beauty Haven',
      rating: 4.7,
      reviews: 201,
      location: 'Bashundhara, Dhaka',
      area: 'Bashundhara',
      price: '৳650',
      priceRange: 3,
      services: ['Hair Color', 'Highlights', 'Treatment', 'Styling'],
      gender: ['Women'],
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1695527081882-a8b051dac51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      hours: '10:00 AM - 8:00 PM',
      distance: '7.3 km',
    },
    {
      id: 8,
      name: 'Chaps & Co',
      rating: 4.9,
      reviews: 267,
      location: 'Banani, Dhaka',
      area: 'Banani',
      price: '৳700',
      priceRange: 3,
      services: ['Premium Cut', 'Beard', 'Hot Towel Shave', 'Grooming'],
      gender: ['Men'],
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1759142235060-3191ee596c81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      hours: '11:00 AM - 10:00 PM',
      distance: '3.5 km',
    },
    {
      id: 9,
      name: 'Serenity Spa',
      rating: 4.8,
      reviews: 188,
      location: 'Gulshan 1, Dhaka',
      area: 'Gulshan',
      price: '৳800',
      priceRange: 3,
      services: ['Spa', 'Thai Massage', 'Aromatherapy', 'Body Scrub'],
      gender: ['Women', 'Men'],
      isOpen: false,
      image: 'https://images.unsplash.com/photo-1695527081728-e3a42f0ce261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      hours: '10:00 AM - 9:00 PM',
      distance: '2.7 km',
    },
  ];

  const filteredSalons = salons.filter((salon) => {
    if (searchQuery && !salon.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !salon.location.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (selectedFilters.location !== 'all' && salon.area !== selectedFilters.location) {
      return false;
    }
    if (selectedFilters.rating !== 'all') {
      const minRating = parseFloat(selectedFilters.rating);
      if (salon.rating < minRating) return false;
    }
    if (selectedFilters.serviceType !== 'all' && !salon.services.includes(selectedFilters.serviceType)) {
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
  });

  return (
    <MotionPage className="min-h-screen bg-gradient-to-b from-white via-[#EAF6FF]/20 to-white">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-[#36A2FF] to-[#007BFF] pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />

        <Stagger className="max-w-7xl mx-auto relative z-10" staggerChildren={0.18}>
          <motion.div variants={fadeUpVariants} className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Browse Salons
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Discover the best salons in Dhaka. Filter by location, services, and more.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div variants={fadeUpVariants} className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" />
              <input
                type="text"
                placeholder="Search salons by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-white/50 outline-none shadow-xl text-[#1E293B]"
              />
            </div>
          </motion.div>
        </Stagger>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Bar */}
        <Reveal className="mb-8" duration={0.9} amount={0.15}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-[#1E293B]">
                {filteredSalons.length} Salons Found
              </h2>
              {Object.values(selectedFilters).some(v => v !== 'all') && (
                <button
                  onClick={() => setSelectedFilters({
                    location: 'all',
                    rating: 'all',
                    serviceType: 'all',
                    gender: 'all',
                    priceRange: 'all',
                  })}
                  className="text-sm text-[#007BFF] hover:text-[#36A2FF] flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  Clear Filters
                </button>
              )}
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:border-[#36A2FF]/50 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>

          {/* Filter Options */}
          <AnimatePresence initial={false}>
            {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -12 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden bg-white rounded-2xl border border-gray-200 shadow-lg mb-6"
            >
              <div className="p-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">
                    Location
                  </label>
                  <select
                    value={selectedFilters.location}
                    onChange={(e) => setSelectedFilters({ ...selectedFilters, location: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-[#36A2FF] focus:ring-2 focus:ring-[#36A2FF]/20 outline-none"
                  >
                    <option value="all">All Areas</option>
                    <option value="Gulshan">Gulshan</option>
                    <option value="Banani">Banani</option>
                    <option value="Dhanmondi">Dhanmondi</option>
                    <option value="Uttara">Uttara</option>
                    <option value="Mirpur">Mirpur</option>
                    <option value="Mohakhali">Mohakhali</option>
                    <option value="Bashundhara">Bashundhara</option>
                  </select>
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">
                    Minimum Rating
                  </label>
                  <select
                    value={selectedFilters.rating}
                    onChange={(e) => setSelectedFilters({ ...selectedFilters, rating: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-[#36A2FF] focus:ring-2 focus:ring-[#36A2FF]/20 outline-none"
                  >
                    <option value="all">All Ratings</option>
                    <option value="4.5">4.5+ Stars</option>
                    <option value="4.7">4.7+ Stars</option>
                    <option value="4.8">4.8+ Stars</option>
                  </select>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">
                    Service Type
                  </label>
                  <select
                    value={selectedFilters.serviceType}
                    onChange={(e) => setSelectedFilters({ ...selectedFilters, serviceType: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-[#36A2FF] focus:ring-2 focus:ring-[#36A2FF]/20 outline-none"
                  >
                    <option value="all">All Services</option>
                    <option value="Haircut">Haircut</option>
                    <option value="Beard">Beard</option>
                    <option value="Facial">Facial</option>
                    <option value="Spa">Spa</option>
                    <option value="Massage">Massage</option>
                    <option value="Hair Color">Hair Color</option>
                  </select>
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">
                    Gender
                  </label>
                  <select
                    value={selectedFilters.gender}
                    onChange={(e) => setSelectedFilters({ ...selectedFilters, gender: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-[#36A2FF] focus:ring-2 focus:ring-[#36A2FF]/20 outline-none"
                  >
                    <option value="all">All</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">
                    Price Range
                  </label>
                  <select
                    value={selectedFilters.priceRange}
                    onChange={(e) => setSelectedFilters({ ...selectedFilters, priceRange: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-[#36A2FF] focus:ring-2 focus:ring-[#36A2FF]/20 outline-none"
                  >
                    <option value="all">All Prices</option>
                    <option value="1">৳ - Budget</option>
                    <option value="2">৳৳ - Moderate</option>
                    <option value="3">৳৳৳ - Premium</option>
                  </select>
                </div>
              </div>
              </div>
            </motion.div>
          )}
          </AnimatePresence>
        </Reveal>

        {/* Salons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSalons.map((salon, index) => (
            <Reveal
              key={salon.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#36A2FF]/50 hover:shadow-xl transition-all duration-300"
              variant={fadeUpVariants}
              delay={(index % 3) * 0.1}
              duration={0.85}
              amount={0.35}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={salon.image}
                  alt={salon.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                    salon.isOpen
                      ? 'bg-green-100/90 text-green-700'
                      : 'bg-red-100/90 text-red-700'
                  }`}>
                    {salon.isOpen ? 'Open' : 'Closed'}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-2 text-white text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{salon.distance} away</span>
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-4">
                <div>
                  <h3 className="font-semibold text-xl text-[#1E293B] mb-2">{salon.name}</h3>

                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-[#1E293B]">{salon.rating}</span>
                      <span className="text-sm text-[#64748b]">({salon.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-[#64748b] mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>{salon.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-[#64748b]">
                    <Clock className="w-4 h-4" />
                    <span>{salon.hours}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {salon.services.slice(0, 3).map((service, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-[#EAF6FF] text-[#007BFF] text-xs"
                    >
                      {service}
                    </span>
                  ))}
                  {salon.services.length > 3 && (
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-[#64748b] text-xs">
                      +{salon.services.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-[#64748b]">Starting from</p>
                    <p className="text-lg font-semibold text-[#007BFF]">{salon.price}</p>
                  </div>
                  <Link to={`/salon/${salon.id}`}>
                    <Button variant="primary" size="sm">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {filteredSalons.length === 0 && (
          <Reveal className="text-center py-16" duration={0.85}>
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#EAF6FF] flex items-center justify-center">
              <Filter className="w-12 h-12 text-[#007BFF]" />
            </div>
            <h3 className="text-2xl font-bold text-[#1E293B] mb-2">No salons found</h3>
            <p className="text-[#64748b] mb-6">Try adjusting your filters or search query</p>
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
              Clear All Filters
            </Button>
          </Reveal>
        )}
      </div>
    </MotionPage>
  );
}
