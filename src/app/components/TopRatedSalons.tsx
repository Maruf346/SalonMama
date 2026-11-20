import { useState } from 'react';
import { Link } from 'react-router';
import { Star, MapPin, Sparkles, SlidersHorizontal } from 'lucide-react';
import { SalonCard } from './SalonCard';
import { Reveal, Stagger, StaggerItem, AnimatedTabPill } from './motion';
import { motion, AnimatePresence } from 'motion/react';

export function TopRatedSalons() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'women' | 'men' | 'spa'>('all');

  const allSalons = [
    {
      id: 1,
      name: 'Glamour Studio',
      rating: 4.9,
      reviews: 234,
      location: 'Gulshan 2, Dhaka',
      price: '৳500',
      category: 'women',
      services: ['Haircut', 'Facial', 'Spa'],
      isOpen: true,
      image:
        'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 2,
      name: 'Elite Barber House',
      rating: 4.8,
      reviews: 189,
      location: 'Banani, Dhaka',
      price: '৳400',
      category: 'men',
      services: ['Haircut', 'Beard', 'Styling'],
      isOpen: true,
      image:
        'https://images.unsplash.com/photo-1776850476481-2bccba2e35c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 3,
      name: 'Royal Hair Lounge',
      rating: 4.7,
      reviews: 156,
      location: 'Dhanmondi, Dhaka',
      price: '৳600',
      category: 'spa',
      services: ['Hair Color', 'Treatment', 'Styling'],
      isOpen: false,
      image:
        'https://images.unsplash.com/photo-1600948835780-9c4a8b55cf50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 4,
      name: 'The Style Hub',
      rating: 4.9,
      reviews: 298,
      location: 'Uttara, Dhaka',
      price: '৳450',
      category: 'women',
      services: ['Haircut', 'Facial', 'Massage'],
      isOpen: true,
      image:
        'https://images.unsplash.com/photo-1600948836587-02c1842c9140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Featured' },
    { id: 'women', label: 'Women & Unisex' },
    { id: 'men', label: "Gentlemen's Barbers" },
    { id: 'spa', label: 'Spa & Colorists' },
  ];

  const filteredSalons =
    activeCategory === 'all'
      ? allSalons
      : allSalons.filter((s) => s.category === activeCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#007BFF] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Handpicked Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Top Rated Studios in Dhaka
          </h2>
          <p className="text-base text-[#64748b] mt-2">
            Highest customer reviews, certified hygienic standards, and verified master stylists.
          </p>

          {/* Category Filter Tabs with AnimatedTabPill */}
          <div className="mt-8 flex items-center justify-center gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer z-10 ${
                    active ? 'text-[#007BFF]' : 'text-[#64748b] hover:text-[#0f172a]'
                  }`}
                >
                  {active && (
                    <AnimatedTabPill
                      layoutId="topSalonsTabPill"
                      className="bg-white shadow-sm border border-blue-100"
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSalons.map((salon) => (
              <motion.div
                layout
                key={salon.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3 }}
              >
                <SalonCard {...salon} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="text-center mt-12">
          <Link
            to="/browse-salons"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-[#007BFF] font-semibold text-sm hover:border-[#007BFF] hover:bg-blue-50/50 shadow-sm transition-all"
          >
            Explore All 150+ Verified Salons →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
