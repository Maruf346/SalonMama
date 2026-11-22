import { useState, useRef, useCallback } from 'react';
import {
  Upload, Sparkles, Camera, RotateCcw, BookOpen,
  Star, TrendingUp, X, ArrowRight, Check, Filter, Heart,
} from 'lucide-react';
import { Link } from 'react-router';
import { MotionPage, PageHeaderReveal, Reveal } from '../components/motion';
import { SEOHead } from '../components/SEOHead';

type UIState = 'upload' | 'preview' | 'analyzing' | 'results';
type FilterKey = 'all' | 'saved' | 'short' | 'medium' | 'long' | 'straight' | 'wavy' | 'curly';

interface Hairstyle {
  id: number;
  name: string;
  category: 'short' | 'medium' | 'long';
  type: 'straight' | 'wavy' | 'curly';
  matchScore: number;
  image: string;
  description: string;
  salonCount: number;
  trending: boolean;
  price: string;
}

const HAIRSTYLES: Hairstyle[] = [
  {
    id: 1,
    name: 'Korean Two-Block',
    category: 'short',
    type: 'straight',
    matchScore: 96,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=500&q=80',
    description: 'Disconnected top with clean tapered sides',
    salonCount: 24,
    trending: true,
    price: '৳800',
  },
  {
    id: 2,
    name: 'Soft Lob with Layers',
    category: 'medium',
    type: 'wavy',
    matchScore: 94,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=500&q=80',
    description: 'Face-framing long bob with natural movement',
    salonCount: 31,
    trending: true,
    price: '৳1,200',
  },
  {
    id: 3,
    name: 'Classic Blunt Bob',
    category: 'short',
    type: 'straight',
    matchScore: 91,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=500&q=80',
    description: 'Sleek modern bob with clean, sharp lines',
    salonCount: 18,
    trending: false,
    price: '৳900',
  },
  {
    id: 4,
    name: 'Beach Wave Lob',
    category: 'medium',
    type: 'wavy',
    matchScore: 89,
    image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=500&q=80',
    description: 'Effortless tousled waves with volume',
    salonCount: 27,
    trending: true,
    price: '৳1,400',
  },
  {
    id: 5,
    name: 'Long Curtain Bangs',
    category: 'long',
    type: 'straight',
    matchScore: 88,
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=500&q=80',
    description: 'Soft curtain bangs with flowing layers',
    salonCount: 35,
    trending: true,
    price: '৳1,100',
  },
  {
    id: 6,
    name: 'Natural Curly Shag',
    category: 'medium',
    type: 'curly',
    matchScore: 85,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=500&q=80',
    description: 'Textured shag cut with defined curls',
    salonCount: 14,
    trending: false,
    price: '৳1,000',
  },
  {
    id: 7,
    name: 'Sleek High Ponytail',
    category: 'long',
    type: 'straight',
    matchScore: 83,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=500&q=80',
    description: 'Elegant high pony with mirror shine',
    salonCount: 22,
    trending: false,
    price: '৳600',
  },
  {
    id: 8,
    name: 'Textured Pixie Cut',
    category: 'short',
    type: 'straight',
    matchScore: 81,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=500&q=80',
    description: 'Bold edgy pixie with soft texture',
    salonCount: 12,
    trending: false,
    price: '৳700',
  },
  {
    id: 9,
    name: 'Balayage Long Waves',
    category: 'long',
    type: 'wavy',
    matchScore: 79,
    image: 'https://images.unsplash.com/photo-1523263685509-57c1d050d19b?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=500&q=80',
    description: 'Sun-kissed highlights on loose waves',
    salonCount: 29,
    trending: true,
    price: '৳2,500',
  },
  {
    id: 10,
    name: 'Braided Crown Updo',
    category: 'long',
    type: 'wavy',
    matchScore: 77,
    image: 'https://images.unsplash.com/photo-1595503240812-7286dafaddc1?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=500&q=80',
    description: 'Elegant woven braid for special occasions',
    salonCount: 19,
    trending: false,
    price: '৳1,800',
  },
  {
    id: 11,
    name: 'Side Part Fade',
    category: 'short',
    type: 'straight',
    matchScore: 75,
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=500&q=80',
    description: 'Sharp side part with a clean taper fade',
    salonCount: 33,
    trending: true,
    price: '৳500',
  },
  {
    id: 12,
    name: 'Natural Coil Puff',
    category: 'medium',
    type: 'curly',
    matchScore: 72,
    image: 'https://images.unsplash.com/photo-1617791160588-241658ad0d1a?crop=entropy&cs=tinysrgb&fit=crop&w=400&h=500&q=80',
    description: 'Celebrate natural texture with defined coils',
    salonCount: 11,
    trending: false,
    price: '৳900',
  },
];

const ANALYSIS_STEPS = [
  'Detecting facial landmarks...',
  'Analyzing face shape...',
  'Matching hairstyle database...',
  'Finalizing recommendations...',
];

const FACE_METRICS = [
  { label: 'Face Shape', value: 'Oval', score: 92 },
  { label: 'Jaw Line', value: 'Soft', score: 85 },
  { label: 'Forehead Width', value: 'Balanced', score: 78 },
  { label: 'Symmetry', value: 'High', score: 94 },
];

const BASE_FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All Styles' },
  { key: 'short', label: 'Short' },
  { key: 'medium', label: 'Medium' },
  { key: 'long', label: 'Long' },
  { key: 'straight', label: 'Straight' },
  { key: 'wavy', label: 'Wavy' },
  { key: 'curly', label: 'Curly' },
];

export function AIStyleFinder() {
  const [uiState, setUiState] = useState<UIState>('upload');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [currentStep, setCurrentStep] = useState(0);
  const [bookedStyles, setBookedStyles] = useState<Set<number>>(new Set());
  const [savedStyles, setSavedStyles] = useState<Set<number>>(new Set());
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result as string);
      setUiState('preview');
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const startAnalysis = () => {
    setUiState('analyzing');
    setCurrentStep(0);
    ANALYSIS_STEPS.forEach((_, i) => {
      setTimeout(() => {
        setCurrentStep(i + 1);
        if (i === ANALYSIS_STEPS.length - 1) {
          setTimeout(() => setUiState('results'), 600);
        }
      }, (i + 1) * 850);
    });
  };

  const reset = () => {
    setUiState('upload');
    setUploadedImage(null);
    setCurrentStep(0);
    setActiveFilter('all');
    setBookedStyles(new Set());
  };

  const toggleBook = (id: number) => {
    setBookedStyles(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleSave = (id: number) => {
    setSavedStyles(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const filtered = HAIRSTYLES.filter(s => {
    if (activeFilter === 'saved') return savedStyles.has(s.id);
    if (activeFilter === 'all') return true;
    return s.category === activeFilter || s.type === activeFilter;
  });

  const progressPct = Math.round((currentStep / ANALYSIS_STEPS.length) * 100);

  return (
    <MotionPage className="min-h-screen bg-gradient-to-b from-[#EAF6FF]/50 via-white to-white pt-16">
      <SEOHead
        title="Free AI Hairstyle Finder | Test Haircuts for Your Face Shape"
        description="Upload a selfie to test which haircuts, hair lengths, and beard styles suit your face shape best. Free AI haircut recommender for Dhaka salon visitors."
        keywords="ai hairstyle finder bangladesh, face shape haircut finder, virtual haircut test online, hair style for oval face dhaka, best haircut for men bangladesh"
      />

      {/* ─── Page Header - Gentle initial load entrance ─── */}
      <PageHeaderReveal>
        <div className="relative overflow-hidden py-14 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EAF6FF]/60 via-white to-white pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(54,162,255,0.1),transparent_55%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(0,123,255,0.07),transparent_60%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-blue-100 shadow-sm mb-5 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <Sparkles className="w-4 h-4 text-[#007BFF]" />
              <span className="text-sm font-semibold text-[#007BFF]">AI-Powered Recommendations</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E293B] mb-4 leading-tight animate-slide-up">
              Your{' '}
              <span className="bg-gradient-to-r from-[#36A2FF] to-[#007BFF] bg-clip-text text-transparent">
                Perfect Style
              </span>
              , Found
            </h1>

            <p className="text-lg sm:text-xl text-[#64748b] max-w-2xl mx-auto leading-relaxed animate-slide-up">
              Upload your photo — our AI analyzes your face shape and recommends the most flattering hairstyles, personalized just for you.
            </p>

            {uiState === 'results' && (
              <button
                onClick={reset}
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-[#475569] hover:border-[#007BFF] hover:text-[#007BFF] shadow-sm hover:shadow transition-all animate-fade-in"
              >
                <RotateCcw className="w-4 h-4" />
                Try Another Photo
              </button>
            )}
          </div>
        </div>
      </PageHeaderReveal>

      {/* ─── Main Content - Scroll Reveal ─── */}
      <Reveal amount={0.08}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        {/* ── UPLOAD STATE ── */}
        {uiState === 'upload' && (
          <div className="max-w-2xl mx-auto animate-scale-in">
            <div
              onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`relative rounded-3xl border-2 border-dashed p-14 text-center cursor-pointer transition-all duration-300 group ${
                isDragging
                  ? 'border-[#007BFF] bg-[#EAF6FF]/70 scale-[1.01] shadow-lg shadow-blue-100'
                  : 'border-gray-200 bg-white hover:border-[#36A2FF] hover:bg-[#EAF6FF]/20 hover:shadow-md'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={e => e.target.files?.[0] && handleFile(e.target.files[0])}
              />

              {/* Upload Icon */}
              <div className={`mx-auto w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                isDragging
                  ? 'bg-gradient-to-br from-[#36A2FF] to-[#007BFF] shadow-lg shadow-blue-200'
                  : 'bg-gradient-to-br from-[#36A2FF]/10 to-[#007BFF]/15 group-hover:from-[#36A2FF]/20 group-hover:to-[#007BFF]/25'
              }`}>
                <Upload className={`w-9 h-9 transition-colors ${isDragging ? 'text-white' : 'text-[#007BFF]'}`} />
              </div>

              <h3 className="text-xl font-semibold text-[#1E293B] mb-2">
                {isDragging ? 'Drop your photo here!' : 'Upload Your Photo'}
              </h3>
              <p className="text-[#64748b] mb-7 text-sm">
                Drag & drop or click to browse from your device
              </p>

              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white text-sm font-semibold shadow-md shadow-blue-200 group-hover:shadow-lg group-hover:shadow-blue-300 group-hover:-translate-y-0.5 transition-all">
                <Camera className="w-4 h-4" />
                Choose Photo
              </div>

              <p className="text-xs text-[#94a3b8] mt-4">
                Supports JPG, PNG, WEBP — Max 10MB
              </p>
            </div>

            {/* Tips */}
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {[
                { icon: '💡', tip: 'Use a front-facing photo for best results' },
                { icon: '☀️', tip: 'Good lighting helps reveal your face shape' },
                { icon: '🔒', tip: 'Your photo is never stored or shared' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <p className="text-sm text-[#64748b] leading-snug">{item.tip}</p>
                </div>
              ))}
            </div>

            {/* How it works */}
            <div className="mt-10 text-center">
              <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-5">How it works</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { step: '01', title: 'Upload Photo', desc: 'A clear front-facing selfie works best' },
                  { step: '02', title: 'AI Analysis', desc: 'Detects face shape, jaw, and proportions' },
                  { step: '03', title: 'Get Styles', desc: 'Browse matched styles and book instantly' },
                ].map((item, i) => (
                  <div key={i} className="relative p-5 rounded-2xl bg-gradient-to-br from-[#f8fafc] to-white border border-gray-100 text-center">
                    <div className="text-[11px] font-bold text-[#007BFF]/40 mb-2 tracking-widest">{item.step}</div>
                    <div className="font-semibold text-[#1E293B] text-sm mb-1">{item.title}</div>
                    <div className="text-xs text-[#64748b] leading-snug">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── PREVIEW STATE ── */}
        {uiState === 'preview' && uploadedImage && (
          <div className="max-w-md mx-auto text-center animate-scale-in">
            <div className="relative inline-block rounded-3xl overflow-hidden shadow-2xl mb-8 ring-4 ring-[#EAF6FF]">
              <img
                src={uploadedImage}
                alt="Your photo"
                className="w-full max-h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

              {/* Remove button */}
              <button
                onClick={reset}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Ready badge */}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 flex items-center gap-2 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-semibold text-[#1E293B]">Photo ready</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-[#1E293B] mb-2">Looking great! Ready to analyze?</h3>
            <p className="text-[#64748b] text-sm mb-8 max-w-xs mx-auto">
              Our AI will scan your face shape and match you with the most flattering hairstyles.
            </p>

            <button
              onClick={startAnalysis}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white font-semibold shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-0.5 transition-all inline-flex items-center gap-2.5"
            >
              <Sparkles className="w-5 h-5" />
              Analyze My Style
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* ── ANALYZING STATE ── */}
        {uiState === 'analyzing' && (
          <div className="max-w-sm mx-auto text-center py-8 animate-fade-in">
            {/* Spinning Avatar */}
            {uploadedImage && (
              <div className="relative w-28 h-28 mx-auto mb-8">
                <img
                  src={uploadedImage}
                  alt="Analyzing"
                  className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl"
                />
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#007BFF] animate-spin" />
                <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-[#36A2FF]/40 animate-spin-slow" />
              </div>
            )}

            <h3 className="text-xl font-semibold text-[#1E293B] mb-1">Analyzing your photo</h3>
            <p className="text-sm text-[#64748b] mb-7">This takes just a moment…</p>

            {/* Steps */}
            <div className="space-y-2.5 text-left mb-7">
              {ANALYSIS_STEPS.map((step, i) => {
                const isDone = i < currentStep;
                const isCurrent = i === currentStep - 1 && currentStep <= ANALYSIS_STEPS.length;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-400 ${
                      isDone
                        ? 'bg-[#EAF6FF] text-[#007BFF]'
                        : isCurrent
                          ? 'bg-blue-50 text-[#007BFF]'
                          : 'bg-gray-50 text-[#94a3b8]'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                      isDone ? 'bg-[#007BFF]' : isCurrent ? 'bg-[#007BFF] animate-pulse' : 'bg-gray-200'
                    }`}>
                      {isDone
                        ? <Check className="w-3 h-3 text-white" />
                        : <div className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-white' : 'bg-gray-400'}`} />
                      }
                    </div>
                    <span className="text-sm font-medium">{step}</span>
                  </div>
                );
              })}
            </div>

            {/* Progress bar */}
            <div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#36A2FF] to-[#007BFF] rounded-full transition-all duration-700"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <p className="text-xs text-[#94a3b8] mt-2">{progressPct}% complete</p>
            </div>
          </div>
        )}

        {/* ── RESULTS STATE ── */}
        {uiState === 'results' && (
          <div className="animate-scale-in">

            {/* Analysis Summary Row */}
            <div className="grid lg:grid-cols-3 gap-5 mb-10">

              {/* Photo + Shape Card */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
                {uploadedImage && (
                  <img
                    src={uploadedImage}
                    alt="Your photo"
                    className="w-16 h-16 rounded-xl object-cover flex-shrink-0 shadow-sm"
                  />
                )}
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Analysis Complete</span>
                  </div>
                  <div className="text-2xl font-bold text-[#1E293B] leading-none mb-1">Oval Face</div>
                  <div className="text-sm text-[#64748b]">Works with most hairstyles!</div>
                </div>
              </div>

              {/* Face Metrics */}
              <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-[#007BFF]" />
                  <h3 className="text-xs font-bold text-[#1E293B] uppercase tracking-widest">Face Analysis</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {FACE_METRICS.map((m, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-[#64748b]">{m.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-[#1E293B]">{m.value}</span>
                          <span className="text-xs font-bold text-[#007BFF] bg-[#EAF6FF] px-1.5 py-0.5 rounded-md">{m.score}%</span>
                        </div>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#36A2FF] to-[#007BFF] rounded-full transition-all duration-1000"
                          style={{ width: `${m.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommendations Header + Filters */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1E293B]">Recommended Styles</h2>
                <p className="text-sm text-[#64748b] mt-0.5">
                  {filtered.length} styles matched for your face shape
                </p>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#64748b] mr-1">
                  <Filter className="w-3.5 h-3.5" />
                  Filter:
                </div>
                {[
                  ...BASE_FILTERS,
                  ...(savedStyles.size > 0
                    ? [{ key: 'saved' as FilterKey, label: `Saved (${savedStyles.size})` }]
                    : []),
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setActiveFilter(key)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      activeFilter === key
                        ? key === 'saved'
                          ? 'bg-rose-500 text-white shadow-sm shadow-rose-200'
                          : 'bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white shadow-sm shadow-blue-200'
                        : key === 'saved'
                          ? 'bg-rose-50 text-rose-500 hover:bg-rose-100'
                          : 'bg-gray-100 text-[#64748b] hover:bg-gray-200'
                    }`}
                  >
                    {key === 'saved' && <Heart className="w-3 h-3 inline mr-1 fill-current" />}
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Style Cards Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-[#94a3b8]">
                <p className="text-lg font-medium mb-2">No styles found</p>
                <button onClick={() => setActiveFilter('all')} className="text-[#007BFF] text-sm font-medium hover:underline">
                  Clear filter
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filtered.map(style => (
                  <div
                    key={style.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
                      <img
                        src={style.image}
                        alt={style.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Match Score */}
                      <div className="absolute top-3 left-3 bg-white/92 backdrop-blur-sm rounded-xl px-2.5 py-1.5 flex items-center gap-1.5 shadow-sm">
                        <Sparkles className="w-3 h-3 text-[#007BFF]" />
                        <span className="text-[11px] font-bold text-[#007BFF]">{style.matchScore}% Match</span>
                      </div>

                      {/* Trending badge */}
                      {style.trending && (
                        <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-400 to-rose-500 rounded-xl px-2.5 py-1.5 flex items-center gap-1 shadow-sm">
                          <TrendingUp className="w-3 h-3 text-white" />
                          <span className="text-[11px] font-bold text-white">Trending</span>
                        </div>
                      )}

                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/35 to-transparent" />

                      {/* Heart / Save */}
                      <button
                        onClick={e => { e.stopPropagation(); toggleSave(style.id); }}
                        className={`absolute bottom-3 right-3 w-8 h-8 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-200 shadow-sm ${
                          savedStyles.has(style.id)
                            ? 'bg-rose-500 scale-110'
                            : 'bg-white/75 hover:bg-white hover:scale-110'
                        }`}
                      >
                        <Heart className={`w-4 h-4 transition-colors ${
                          savedStyles.has(style.id) ? 'fill-white text-white' : 'text-[#475569]'
                        }`} />
                      </button>
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3 className="font-semibold text-[#1E293B] text-sm leading-snug">{style.name}</h3>
                        <span className="text-[11px] font-bold text-[#007BFF] bg-[#EAF6FF] px-2 py-0.5 rounded-lg whitespace-nowrap flex-shrink-0">
                          {style.price}
                        </span>
                      </div>

                      <p className="text-xs text-[#64748b] leading-relaxed mb-3">{style.description}</p>

                      <div className="flex items-center gap-1.5 text-xs text-[#94a3b8] mb-3">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                        <span className="font-semibold text-[#475569]">{style.salonCount} salons</span>
                        <span>offer this style</span>
                      </div>

                      {/* Capsule tags */}
                      <div className="flex gap-1.5 mb-3 flex-wrap">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#f1f5f9] text-[#64748b] font-medium capitalize">
                          {style.category}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#f1f5f9] text-[#64748b] font-medium capitalize">
                          {style.type}
                        </span>
                      </div>

                      {bookedStyles.has(style.id) ? (
                        <div className="w-full py-2.5 rounded-xl bg-green-50 border border-green-200 text-green-600 text-xs font-semibold flex items-center justify-center gap-1.5">
                          <Check className="w-3.5 h-3.5" />
                          Booking Requested!
                        </div>
                      ) : (
                        <button
                          onClick={() => toggleBook(style.id)}
                          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white text-xs font-semibold shadow-sm shadow-blue-100 hover:shadow-md hover:shadow-blue-200 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-1.5"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          Book This Style
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      </Reveal>

      {/* ─── Bottom CTA - Scroll Reveal ─── */}
      {uiState !== 'analyzing' && (
        <Reveal amount={0.15}>
          <section className="mt-8 py-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#36A2FF] to-[#007BFF] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(255,255,255,0.12),transparent_55%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(0,56,200,0.3),transparent_55%)] pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center relative z-10 py-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Ready to Book Your Perfect Look?
              </h2>
              <p className="text-lg text-white/85 mb-8 max-w-xl mx-auto">
                Sign up free to save your style results, get personalized weekly picks, and book directly with top-rated salons near you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="px-8 py-3.5 rounded-full bg-white text-[#007BFF] font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Sign Up Free
                </button>
                <Link
                  to="/browse-salons"
                  className="px-8 py-3.5 rounded-full bg-white/15 border-2 border-white/35 text-white font-semibold hover:bg-white/25 hover:border-white/50 transition-all"
                >
                  Browse Salons
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      )}

    </MotionPage>
  );
}
