import { useState } from 'react';
import {
  Sparkles,
  Heart,
  Bookmark,
  Clock,
  ArrowRight,
  Share2,
  Calendar,
  X,
  CheckCircle2,
  Eye,
  SlidersHorizontal,
  BookOpen,
} from 'lucide-react';
import { Link } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import {
  MotionPage,
  Reveal,
  Stagger,
  StaggerItem,
  TiltCard,
  Magnetic,
  AnimatedTabPill,
} from '../components/motion';
import { Button } from '../components/Button';
import { BookingModal } from '../components/BookingModal';
import { SEOHead } from '../components/SEOHead';

interface LookbookItem {
  id: number;
  title: string;
  category: 'bridal' | 'korean' | 'mens' | 'color' | 'skincare';
  categoryLabel: string;
  readTime: string;
  stylist: string;
  salon: string;
  location: string;
  image: string;
  gallery: string[];
  trendingScore: number;
  likes: number;
  priceEstimate: string;
  description: string;
  formula: string[];
  recommendedHairType: string;
  duration: string;
}

const LOOKBOOK_DATA: LookbookItem[] = [
  {
    id: 1,
    title: 'Dhaka Traditional Bridal Makeup & Hair Styling',
    category: 'bridal',
    categoryLabel: 'Bridal & Party',
    readTime: '3 min read',
    stylist: 'Farzana Arman',
    salon: 'Glamour Studio',
    location: 'Gulshan 2',
    image: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1546804784-896d0dca3805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    trendingScore: 99,
    likes: 842,
    priceEstimate: '৳10,000 - ৳20,000',
    description:
      'Classic Bengali wedding bridal look featuring glowing, long-lasting base makeup, warm champagne eye tones, and elegant floral hair setting.',
    formula: ['Long-wear Bridal Base', '24K Gold Highlighter', 'Setting Spray for Dhaka Weather'],
    recommendedHairType: 'Medium to Long Hair (Straight or Wavy)',
    duration: '3 - 4 hours',
  },
  {
    id: 2,
    title: 'Korean Two-Block & Curtain Bangs Bob',
    category: 'korean',
    categoryLabel: 'Modern Korean',
    readTime: '2 min read',
    stylist: 'Kazi Tanvir',
    salon: 'The Style Hub',
    location: 'Uttara Sector 7',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1600632078977-22210c2e7414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    trendingScore: 96,
    likes: 615,
    priceEstimate: '৳800 - ৳1,500',
    description:
      'One of Dhaka’s most requested haircuts. Light layers that frame your face nicely and take very little effort to style every morning.',
    formula: ['Gentle Hair Spa Wash', 'Light Layering Scissors Cut', 'Argan Oil Finish'],
    recommendedHairType: 'Fine to Medium Hair',
    duration: '45 - 60 minutes',
  },
  {
    id: 3,
    title: 'Clean Low Fade Haircut & Beard Lineup',
    category: 'mens',
    categoryLabel: "Men's Grooming",
    readTime: '2 min read',
    stylist: 'Mehedi Hasan',
    salon: 'Elite Barber House',
    location: 'Banani 11',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    trendingScore: 94,
    likes: 489,
    priceEstimate: '৳600 - ৳1,200',
    description:
      'A sharp, professional side fade paired with a hot towel shave, beard conditioning, and clean razor lines.',
    formula: ['Matte Hair Clay', 'Hot Towel Steam & Eucalyptus Oil', 'Beard Nourishing Serum'],
    recommendedHairType: 'All Hair Types',
    duration: '40 - 50 minutes',
  },
  {
    id: 4,
    title: 'Warm Honey & Caramel Balayage Hair Color',
    category: 'color',
    categoryLabel: 'Color & Highlights',
    readTime: '3 min read',
    stylist: 'Sara Ahmed',
    salon: 'Royal Hair Lounge',
    location: 'Dhanmondi 27',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    trendingScore: 97,
    likes: 720,
    priceEstimate: '৳3,500 - ৳7,000',
    description:
      'Natural honey-caramel highlights seamlessly blended into natural dark hair. Looks natural even when your hair grows out.',
    formula: ['Ammonia-free Lightener', 'Gloss Toner for Natural Shine', 'Color Protect Hair Mask'],
    recommendedHairType: 'Wavy, Straight, or Naturally Dark Hair',
    duration: '2.5 - 3 hours',
  },
  {
    id: 5,
    title: 'Hydra Deep Cleansing Facial & Glowing Skin Treatment',
    category: 'skincare',
    categoryLabel: 'Facial & Glow',
    readTime: '3 min read',
    stylist: 'Dr. Nadia Kabir',
    salon: 'Bella Glow Medispa',
    location: 'Gulshan 1',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'https://images.unsplash.com/photo-1512290900672-1f487e4db549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    trendingScore: 95,
    likes: 534,
    priceEstimate: '৳2,500 - ৳5,000',
    description:
      'Deeply cleans blocked pores from city dust and pollution, hydrates dull skin, and leaves your face fresh and glowing.',
    formula: ['Hyaluronic Acid Hydrating Serum', 'Gentle Pore Extraction', 'Cooling Aloe Gel Mask'],
    recommendedHairType: 'All Skin Types (Oily, Dry, Normal)',
    duration: '60 minutes',
  },
  {
    id: 6,
    title: 'Modern Textured Shag with Soft Bangs',
    category: 'korean',
    categoryLabel: 'Modern Korean',
    readTime: '2 min read',
    stylist: 'Rezaul Karim',
    salon: 'Urban Edge Studio',
    location: 'Bashundhara R/A',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    trendingScore: 91,
    likes: 390,
    priceEstimate: '৳900 - ৳1,600',
    description:
      'Trendy, fun haircut with light layers that adds natural bounce to your hair without needing heavy styling gels.',
    formula: ['Volumizing Sea Salt Spray', 'Weightless Hair Serum'],
    recommendedHairType: 'Wavy or Curly Textures',
    duration: '45 minutes',
  },
];

export function EditorialLookbook() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedLook, setSelectedLook] = useState<LookbookItem | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSalonName, setBookingSalonName] = useState('Glamour Studio');
  const [savedLooks, setSavedLooks] = useState<number[]>([]);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const categories = [
    { id: 'all', label: 'All Styles' },
    { id: 'bridal', label: 'Bridal & Party' },
    { id: 'korean', label: 'Modern Korean' },
    { id: 'mens', label: "Men's Cuts" },
    { id: 'color', label: 'Color & Highlights' },
    { id: 'skincare', label: 'Facial & Glow' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? LOOKBOOK_DATA
      : LOOKBOOK_DATA.filter((item) => item.category === activeCategory);

  const toggleSave = (id: number) => {
    setSavedLooks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleBookLook = (salon: string) => {
    setBookingSalonName(salon);
    setSelectedLook(null);
    setIsBookingOpen(true);
  };

  return (
    <MotionPage className="min-h-screen bg-[#fafbfc] pt-16">
      <SEOHead
        title="Popular Hairstyles & Trends in Dhaka | Style Guide"
        description="Explore popular hairstyles, haircuts, and bridal makeup trends in Dhaka. View prices, styling times, and book directly with top salons in Gulshan, Banani, and Dhanmondi."
        keywords="popular hairstyles in dhaka, haircut styles for men dhaka, ladies haircut trends bangladesh, bridal makeup ideas dhaka, balayage hair color price dhaka"
      />

      {/* Style Guide Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF6FF]/60 via-white to-[#fafbfc] py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#007BFF] text-xs font-semibold tracking-wider uppercase mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              Dhaka Hairstyle & Beauty Guide
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-tight mb-4">
              Trending Hairstyles &
              <br />
              <span className="bg-gradient-to-r from-[#007BFF] to-[#36A2FF] bg-clip-text text-transparent">
                Beauty Looks in Dhaka
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#64748b] leading-relaxed max-w-2xl">
              Wondering what hairstyle to try next? Explore popular cuts, hair colors, and bridal
              looks done by top stylists in Gulshan, Banani, and Dhanmondi. See prices and book the look easily.
            </p>
          </Reveal>

          {/* Category Pill Bar with gentle motion */}
          <div className="mt-10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer z-10 ${
                    active ? 'text-[#007BFF]' : 'text-[#64748b] hover:text-[#1E293B]'
                  }`}
                >
                  {active && (
                    <AnimatedTabPill
                      layoutId="editorialFilter"
                      className="bg-white shadow-[0_4px_16px_rgba(0,123,255,0.12)] border border-blue-100"
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Style Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0f172a]">
              {categories.find((c) => c.id === activeCategory)?.label}
            </h2>
            <p className="text-xs sm:text-sm text-[#64748b]">
              Showing {filteredItems.length} popular styles
            </p>
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const isSaved = savedLooks.includes(item.id);
              return (
                <motion.article
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,123,255,0.09)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Canvas */}
                    <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={`${item.title} at ${item.salon} Dhaka`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#007BFF] shadow-sm">
                          {item.categoryLabel}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/40 text-white border border-white/20">
                          {item.duration}
                        </span>
                      </div>

                      <button
                        onClick={() => toggleSave(item.id)}
                        aria-label="Save Look"
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-gray-700 hover:text-red-500 shadow-sm transition-all"
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            isSaved ? 'fill-red-500 text-red-500' : 'text-gray-700'
                          }`}
                        />
                      </button>

                      <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between text-xs">
                        <span>By {item.stylist}</span>
                        <span className="font-semibold text-yellow-300">
                          ★ {item.trendingScore}% popular
                        </span>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-lg font-bold text-[#0f172a] group-hover:text-[#007BFF] transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#64748b] leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Salon attribution & actions */}
                  <div className="p-6 pt-0 space-y-4">
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                      <div>
                        <p className="text-[#94a3b8]">Done at</p>
                        <p className="font-bold text-[#1E293B]">
                          {item.salon}{' '}
                          <span className="font-normal text-[#64748b]">({item.location})</span>
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-[#94a3b8]">Est. Price</p>
                        <p className="font-bold text-sm text-[#007BFF]">{item.priceEstimate}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedLook(item)}
                        className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-[#007BFF] bg-blue-50 hover:bg-blue-100 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Details
                      </button>
                      <button
                        onClick={() => handleBookLook(item.salon)}
                        className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#36A2FF] to-[#007BFF] hover:shadow-md transition-all flex items-center justify-center gap-1 cursor-pointer"
                      >
                        Book Look
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Style Details Modal */}
      <AnimatePresence>
        {selectedLook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setSelectedLook(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="relative max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10"
            >
              <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-900 shrink-0">
                <img
                  src={selectedLook.image}
                  alt={selectedLook.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <button
                  onClick={() => setSelectedLook(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#007BFF] text-white">
                    {selectedLook.categoryLabel}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold mt-2 leading-tight">
                    {selectedLook.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#94a3b8] mb-1.5">
                    About This Hairstyle
                  </h4>
                  <p className="text-[#334155] leading-relaxed text-sm">
                    {selectedLook.description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#f8fafc] border border-gray-100">
                  <div>
                    <span className="text-[11px] text-[#94a3b8]">Salon & Stylist</span>
                    <p className="font-semibold text-xs text-[#0f172a] mt-0.5">
                      {selectedLook.stylist}
                    </p>
                    <p className="text-xs text-[#007BFF] font-medium">{selectedLook.salon}</p>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#94a3b8]">Service Duration</span>
                    <p className="font-semibold text-xs text-[#0f172a] mt-0.5">
                      {selectedLook.duration}
                    </p>
                    <p className="text-[11px] text-[#64748b]">Includes wash & setting</p>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#94a3b8]">Estimated Cost</span>
                    <p className="font-bold text-sm text-[#007BFF] mt-0.5">
                      {selectedLook.priceEstimate}
                    </p>
                    <p className="text-[11px] text-[#64748b]">Pay at salon or bKash</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between gap-4 border-t border-gray-100">
                  <Link
                    to="/ai-style-finder"
                    className="text-xs font-semibold text-[#64748b] hover:text-[#007BFF] flex items-center gap-1"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#36A2FF]" />
                    Try this style on your selfie
                  </Link>

                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => handleBookLook(selectedLook.salon)}
                    className="shadow-md shadow-blue-200"
                  >
                    Book at {selectedLook.salon}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        salonName={bookingSalonName}
      />
    </MotionPage>
  );
}
