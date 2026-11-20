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
    title: 'Dhaka Royal Bridal Elegance & Golden Glass Makeup',
    category: 'bridal',
    categoryLabel: 'Bridal & Gala',
    readTime: '4 min read',
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
    priceEstimate: '৳12,000 - ৳25,000',
    description:
      'A harmonious blend of timeless Bengali wedding heritage with ultra-modern dewy base skin, sculpted champagne eyes, and architectural floral hair weaving.',
    formula: ['Charlotte Tilbury Pillow Talk', 'Dyson Supersonic Air Sculpt', '24K Gold Leaf Highlights'],
    recommendedHairType: 'Medium to Long Hair (Straight/Wavy)',
    duration: '3.5 - 4 hours',
  },
  {
    id: 2,
    title: 'Seoul Soft-Layered Curtain Bob with Caramel Babylights',
    category: 'korean',
    categoryLabel: 'Korean & Modern',
    readTime: '3 min read',
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
    priceEstimate: '৳2,800 - ৳4,500',
    description:
      'Effortless movement crafted through interior weight removal and soft French micro-curtain bangs that open up the cheekbones perfectly.',
    formula: ['Olaplex No. 3 Bond Building', 'L’Oréal Majirel 7.31 Warm Ash', 'Moroccanoil Treatment Light'],
    recommendedHairType: 'Fine to Medium Density',
    duration: '90 minutes',
  },
  {
    id: 3,
    title: 'Executive Low-Fade Textured Quiff & Precision Beard',
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
    priceEstimate: '৳900 - ৳1,600',
    description:
      'Clean foil fade blending into textured crown volume, accompanied by hot towel tea-tree beard hydration and razor-line definition.',
    formula: ['Uppercut Deluxe Matte Clay', 'Proraso Pre-Shave Eucalyptus', 'Jack Black Beard Oil'],
    recommendedHairType: 'Thick, Coarse, or Normal',
    duration: '50 minutes',
  },
  {
    id: 4,
    title: 'Smoky Espresso & Honey Sunlit Balayage Melt',
    category: 'color',
    categoryLabel: 'Color & Balayage',
    readTime: '5 min read',
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
    priceEstimate: '৳4,500 - ৳8,000',
    description:
      'Seamless gradient transitioning from rich deep espresso root into warm honeycomb tips, hand-painted with freehand clay lighteners.',
    formula: ['Wella Blondor Freelights', 'Redken Shades EQ Gloss 09NB + 08GI', 'Kérastase Chroma Absolu Mask'],
    recommendedHairType: 'Wavy or Naturally Dark Bases',
    duration: '3 hours',
  },
  {
    id: 5,
    title: 'Hydra-Oxygen Facial Glow & K-Beauty Glass Finish',
    category: 'skincare',
    categoryLabel: 'Skincare',
    readTime: '4 min read',
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
    priceEstimate: '৳3,500 - ৳6,000',
    description:
      'Non-invasive 7-stage transdermal peptide infusion that unclogs congested pores, boosts collagen synthesis, and yields an authentic glass veil.',
    formula: ['Hyaluronic Triple Molecular Serum', 'Medical Grade Pure O2 Infusion', 'Cryo-Sculpting Wand'],
    recommendedHairType: 'All Skin Types (Acne/Dry/Sensitive)',
    duration: '60 minutes',
  },
  {
    id: 6,
    title: 'The Modern Mullet-Shag with Textured Fringe',
    category: 'korean',
    categoryLabel: 'Korean & Modern',
    readTime: '3 min read',
    stylist: 'Rezaul Karim',
    salon: 'Urban Edge Studio',
    location: 'Bashundhara R/A',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    ],
    trendingScore: 91,
    likes: 390,
    priceEstimate: '৳1,200 - ৳2,200',
    description:
      'Alternative chic cut featuring feather-light layering, razored face-framing pieces, and soft wispy nape length for edgy attitude.',
    formula: ['Sea Salt Spray Volume Texturizer', 'Oribe Dry Texturizing Spray'],
    recommendedHairType: 'Natural Wavy or Curly Textures',
    duration: '60 minutes',
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
    { id: 'all', label: 'All Curations' },
    { id: 'bridal', label: 'Bridal & Gala' },
    { id: 'korean', label: 'Korean & Modern' },
    { id: 'mens', label: "Men's Grooming" },
    { id: 'color', label: 'Color & Balayage' },
    { id: 'skincare', label: 'Skincare' },
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
      {/* Editorial Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF6FF]/60 via-white to-[#fafbfc] py-16 sm:py-24 border-b border-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(54,162,255,0.08),transparent_50%)] pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#007BFF] text-xs font-semibold tracking-wider uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              SalonMama Editorial Lookbook 2026
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#0f172a] leading-[1.1] mb-6">
              The Art of Hair,
              <br />
              <span className="bg-gradient-to-r from-[#007BFF] to-[#36A2FF] bg-clip-text text-transparent">
                Couture & Glow.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-[#64748b] leading-relaxed max-w-2xl">
              Curated hairstyle trends, seasonal hair coloring recipes, and bridal aesthetics from
              Dhaka’s premier master stylists. Discover your aesthetic and book the exact look.
            </p>
          </Reveal>

          {/* CMS Category Pill Bar with animated Framer Motion layoutId */}
          <div className="mt-12 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer z-10 ${
                    active ? 'text-[#007BFF] font-semibold' : 'text-[#64748b] hover:text-[#1E293B]'
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

      {/* Editorial Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0f172a]">
              {categories.find((c) => c.id === activeCategory)?.label}
            </h2>
            <p className="text-sm text-[#64748b]">
              Showing {filteredItems.length} curated editorial masterpieces
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-[#64748b] font-medium">
            <SlidersHorizontal className="w-4 h-4 text-[#007BFF]" />
            Direct Salon Match Guaranteed
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
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,123,255,0.1)] transition-all duration-300 flex flex-col"
                >
                  {/* Image Canvas */}
                  <div className="relative h-72 sm:h-80 overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Floating pill badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-[#007BFF] shadow-sm">
                        {item.categoryLabel}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/40 backdrop-blur-md text-white border border-white/20">
                        {item.readTime}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 flex items-center gap-1.5">
                      <button
                        onClick={() => toggleSave(item.id)}
                        aria-label="Save Look"
                        className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-700 hover:text-red-500 hover:scale-105 transition-all shadow-sm"
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            isSaved ? 'fill-red-500 text-red-500' : 'text-gray-700'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Image Footer info */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center justify-between text-xs text-white/80">
                        <span>By {item.stylist}</span>
                        <span className="font-semibold text-yellow-300">
                          ★ {item.trendingScore}% match score
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#007BFF] transition-colors leading-snug mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#64748b] leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Salon attribution pill */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-[#94a3b8]">Verified Service at</p>
                        <p className="text-sm font-semibold text-[#1E293B]">
                          {item.salon}{' '}
                          <span className="text-xs font-normal text-[#64748b]">
                            ({item.location})
                          </span>
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-xs text-[#94a3b8]">Est. Price</p>
                        <p className="text-sm font-bold text-[#007BFF]">{item.priceEstimate}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => setSelectedLook(item)}
                        className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#007BFF] bg-[#EAF6FF] hover:bg-blue-100 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Look Details
                      </button>
                      <button
                        onClick={() => handleBookLook(item.salon)}
                        className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#36A2FF] to-[#007BFF] hover:shadow-md hover:shadow-blue-200 transition-all flex items-center justify-center gap-1"
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

      {/* Editorial Modal Details */}
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
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-3xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10"
            >
              {/* Header image banner */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900 shrink-0">
                <img
                  src={selectedLook.image}
                  alt={selectedLook.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <button
                  onClick={() => setSelectedLook(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#007BFF] text-white">
                    {selectedLook.categoryLabel}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-2 leading-tight">
                    {selectedLook.title}
                  </h2>
                </div>
              </div>

              {/* Scrollable specs */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#94a3b8] mb-2">
                    Stylist Breakdown
                  </h4>
                  <p className="text-[#334155] leading-relaxed text-base">
                    {selectedLook.description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-[#f8fafc] border border-gray-100">
                  <div>
                    <span className="text-xs text-[#94a3b8]">Salon & Stylist</span>
                    <p className="font-semibold text-sm text-[#0f172a] mt-0.5">
                      {selectedLook.stylist}
                    </p>
                    <p className="text-xs text-[#007BFF] font-medium">{selectedLook.salon}</p>
                  </div>
                  <div>
                    <span className="text-xs text-[#94a3b8]">Service Duration</span>
                    <p className="font-semibold text-sm text-[#0f172a] mt-0.5">
                      {selectedLook.duration}
                    </p>
                    <p className="text-xs text-[#64748b]">Includes wash & sculpt</p>
                  </div>
                  <div>
                    <span className="text-xs text-[#94a3b8]">Estimated Price</span>
                    <p className="font-bold text-base text-[#007BFF] mt-0.5">
                      {selectedLook.priceEstimate}
                    </p>
                    <p className="text-xs text-[#64748b]">SalonMama guarantee</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#94a3b8] mb-3">
                    Formulas & Products Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLook.formula.map((prod, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-[#007BFF] text-xs font-medium border border-blue-100"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                  <Link
                    to="/ai-style-finder"
                    className="text-xs font-semibold text-[#64748b] hover:text-[#007BFF] flex items-center gap-1"
                  >
                    <Sparkles className="w-4 h-4 text-[#36A2FF]" />
                    Try on this hairstyle with AI
                  </Link>

                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => handleBookLook(selectedLook.salon)}
                    className="shadow-xl shadow-blue-200"
                  >
                    Book Look at {selectedLook.salon}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Curated Editorial Trend Dispatch / Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-semibold text-[#36A2FF] tracking-widest uppercase">
              SalonMama Trendletter
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
              Get Seasonal Dhaka Style Forecasts Delivered Every Friday.
            </h3>
            <p className="text-white/70 text-sm sm:text-base">
              Exclusive VIP discounts, master stylist formulas, and early booking notifications for
              Gulshan, Banani, and Dhanmondi salon launches.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (newsletterEmail) setNewsletterSubscribed(true);
              }}
              className="pt-4 flex flex-col sm:flex-row gap-3 max-w-md"
            >
              {newsletterSubscribed ? (
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-green-500/20 border border-green-500/40 text-green-300 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  You’re on the VIP Editorial List!
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#36A2FF] text-sm flex-1"
                  />
                  <Magnetic>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#007BFF] hover:bg-[#36A2FF] font-semibold text-sm transition-all shadow-lg hover:shadow-blue-500/30"
                    >
                      Subscribe
                    </button>
                  </Magnetic>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        salonName={bookingSalonName}
      />
    </MotionPage>
  );
}
