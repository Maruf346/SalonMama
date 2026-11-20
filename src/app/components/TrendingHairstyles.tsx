import { useState } from 'react';
import { Heart, Bookmark, Sparkles, ArrowRight, X, Check, Eye } from 'lucide-react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Reveal, Stagger, StaggerItem, TiltCard, Magnetic } from './motion';
import { Button } from './Button';
import { BookingModal } from './BookingModal';

interface Hairstyle {
  id: number;
  name: string;
  popularity: string;
  category: string;
  image: string;
  salon: string;
  price: string;
  description: string;
}

export function TrendingHairstyles() {
  const [savedStyles, setSavedStyles] = useState<number[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<Hairstyle | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const hairstyles: Hairstyle[] = [
    {
      id: 1,
      name: 'Korean Two-Block',
      popularity: '95%',
      category: 'Men',
      salon: 'Elite Barber House (Banani)',
      price: '৳800',
      description: 'Clean tapered sides with an effortlessly textured, disconnected top length.',
      image:
        'https://images.unsplash.com/photo-1659355751333-cf3aa64ec7cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 2,
      name: 'Soft Waves with Curtain Bangs',
      popularity: '92%',
      category: 'Women',
      salon: 'Glamour Studio (Gulshan)',
      price: '৳1,500',
      description: 'Airy, face-framing curtain bangs with bouncy, dimensional heat-sculpted waves.',
      image:
        'https://images.unsplash.com/photo-1553519420-c78a0a7082b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 3,
      name: 'Executive Fade with Texture',
      popularity: '89%',
      category: 'Men',
      salon: 'The Style Hub (Uttara)',
      price: '৳700',
      description: 'Crisp skin fade transitioning into natural matte quiff texture.',
      image:
        'https://images.unsplash.com/photo-1768363646793-d58847947aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 4,
      name: 'Layered French Bob',
      popularity: '87%',
      category: 'Women',
      salon: 'Royal Hair Lounge (Dhanmondi)',
      price: '৳1,200',
      description: 'Chic collarbone graze with invisible layers for maximum root lift.',
      image:
        'https://images.unsplash.com/photo-1600632078977-22210c2e7414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 5,
      name: 'Undercut Textured Pompadour',
      popularity: '85%',
      category: 'Men',
      salon: 'Elite Barber House (Banani)',
      price: '৳950',
      description: 'High-volume classic pompadour updated with modern shear texture.',
      image:
        'https://images.unsplash.com/photo-1562055268-53091cacdb37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 6,
      name: 'Caramel Balayage Sunlit Waves',
      popularity: '94%',
      category: 'Women',
      salon: 'Glamour Studio (Gulshan)',
      price: '৳4,500',
      description: 'Hand-painted honey caramel ribbons seamlessly blended into deep dark espresso roots.',
      image:
        'https://images.unsplash.com/photo-1740593236449-78c950327cab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
  ];

  const toggleHeart = (id: number, name: string) => {
    setSavedStyles((prev) => {
      const exists = prev.includes(id);
      const next = exists ? prev.filter((i) => i !== id) : [...prev, id];
      setToastMessage(exists ? `Removed ${name} from saved` : `Saved ${name} to Wishlist!`);
      setTimeout(() => setToastMessage(null), 2500);
      return next;
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#fafbfc] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Toast */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-slate-900 text-white text-xs font-semibold shadow-2xl flex items-center gap-2 border border-slate-700"
            >
              <Check className="w-4 h-4 text-green-400" />
              {toastMessage}
            </motion.div>
          )}
        </AnimatePresence>

        <Reveal className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#007BFF] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Seasonal Trend Watch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Trending Hairstyles This Month
          </h2>
          <p className="text-base text-[#64748b] mt-2">
            Most requested cuts and coloring formulas across premier Dhaka salons.
          </p>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hairstyles.map((style) => {
            const isSaved = savedStyles.includes(style.id);
            return (
              <StaggerItem key={style.id}>
                <div className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-blue-200 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,123,255,0.08)] transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <img
                      src={style.image}
                      alt={style.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    <div className="absolute top-3 right-3 flex gap-2">
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        onClick={() => toggleHeart(style.id, style.name)}
                        className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#64748b] hover:text-red-500 shadow-sm transition-all"
                      >
                        <Heart
                          className={`w-4 h-4 transition-colors ${
                            isSaved ? 'text-red-500 fill-red-500' : 'text-[#64748b]'
                          }`}
                        />
                      </motion.button>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="font-semibold text-yellow-300">
                        ★ {style.popularity} client match
                      </span>
                      <span className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20 font-medium">
                        {style.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-bold text-lg text-[#0f172a] group-hover:text-[#007BFF] transition-colors">
                        {style.name}
                      </h3>
                      <p className="text-xs text-[#64748b] mt-1 line-clamp-2">{style.description}</p>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#94a3b8]">Popularity index</span>
                        <span className="font-bold text-[#007BFF]">{style.popularity}</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#36A2FF] to-[#007BFF] rounded-full"
                          style={{ width: style.popularity }}
                        />
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] uppercase text-[#94a3b8] font-semibold">
                          Avg. Price
                        </p>
                        <p className="text-sm font-bold text-[#007BFF]">{style.price}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedStyle(style)}
                          className="px-3 py-1.5 rounded-xl bg-blue-50 text-[#007BFF] text-xs font-semibold hover:bg-blue-100 transition-colors"
                        >
                          Details
                        </button>
                        <Link
                          to="/ai-style-finder"
                          className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white text-xs font-semibold shadow-sm hover:shadow-md transition-all flex items-center gap-1"
                        >
                          <Sparkles className="w-3 h-3" />
                          Try on
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal className="text-center mt-12">
          <Link
            to="/lookbook"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-[#007BFF] font-semibold text-sm hover:border-[#007BFF] hover:bg-blue-50/50 shadow-sm transition-all"
          >
            Explore Full Editorial Lookbook (2026 Collection) →
          </Link>
        </Reveal>
      </div>

      {/* Style Details Modal */}
      <AnimatePresence>
        {selectedStyle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setSelectedStyle(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="relative max-w-lg w-full bg-white rounded-3xl shadow-2xl overflow-hidden z-10 p-6 sm:p-8 space-y-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-[#007BFF]">
                  {selectedStyle.category} Trending Look
                </span>
                <button
                  onClick={() => setSelectedStyle(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="h-56 rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={selectedStyle.image}
                  alt={selectedStyle.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0f172a]">{selectedStyle.name}</h3>
                <p className="text-sm text-[#64748b] mt-1">{selectedStyle.description}</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f8fafc] border border-gray-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#94a3b8]">Verified Provider</span>
                  <p className="font-semibold text-sm text-[#0f172a]">{selectedStyle.salon}</p>
                </div>
                <div className="text-right">
                  <span className="text-[#94a3b8]">Estimated Price</span>
                  <p className="font-bold text-base text-[#007BFF]">{selectedStyle.price}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link to="/ai-style-finder" className="w-full">
                  <Button variant="outline" className="w-full text-xs">
                    <Sparkles className="w-3.5 h-3.5 mr-1 text-[#007BFF]" />
                    Try in AI Simulator
                  </Button>
                </Link>
                <Button
                  variant="primary"
                  className="w-full text-xs"
                  onClick={() => {
                    setSelectedStyle(null);
                    setIsBookingOpen(true);
                  }}
                >
                  Book at Studio
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        salonName="Glamour Studio"
      />
    </section>
  );
}
