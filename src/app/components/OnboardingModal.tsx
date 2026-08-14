import { useState, useEffect } from 'react';
import { X, Sparkles, ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';

const STORAGE_KEY = 'salon-mama-onboarded';

type Step = 0 | 1 | 2;

interface Prefs {
  hairType: string;
  lookingFor: string;
  preference: string;
}

const HAIR_TYPES = [
  { value: 'straight', label: 'Straight', emoji: '💇' },
  { value: 'wavy', label: 'Wavy', emoji: '🌊' },
  { value: 'curly', label: 'Curly', emoji: '🌀' },
  { value: 'any', label: 'Not sure', emoji: '✨' },
];

const LOOKING_FOR = [
  { value: 'haircut', label: 'Haircut & Styling', emoji: '✂️' },
  { value: 'color', label: 'Color & Highlights', emoji: '🎨' },
  { value: 'spa', label: 'Spa & Massage', emoji: '💆' },
  { value: 'all', label: 'Everything!', emoji: '🌟' },
];

const PREFERENCES = [
  { value: 'women', label: "Women's Salon", emoji: '💅' },
  { value: 'men', label: "Men's Salon", emoji: '💈' },
  { value: 'unisex', label: 'Unisex / Any', emoji: '🤝' },
];

export function OnboardingModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>(0);
  const [prefs, setPrefs] = useState<Prefs>({ hairType: '', lookingFor: '', preference: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const done = localStorage.getItem(STORAGE_KEY);
    if (!done) {
      const timer = setTimeout(() => setOpen(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, '1');
    setOpen(false);
  };

  const finish = () => {
    localStorage.setItem(STORAGE_KEY, '1');
    setOpen(false);
    navigate('/ai-style-finder');
  };

  const stepData = [
    {
      title: "What's your hair type?",
      subtitle: 'Help us personalize your experience',
      key: 'hairType' as keyof Prefs,
      options: HAIR_TYPES,
    },
    {
      title: "What are you looking for?",
      subtitle: "We'll surface the right salons and styles",
      key: 'lookingFor' as keyof Prefs,
      options: LOOKING_FOR,
    },
    {
      title: "Your preference?",
      subtitle: "We'll filter salons to match",
      key: 'preference' as keyof Prefs,
      options: PREFERENCES,
    },
  ];

  const current = stepData[step];
  const canAdvance = prefs[current.key] !== '';
  const isLast = step === 2;

  return (
    <AnimatePresence>
      {open && (
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={dismiss}
      />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
      >

        {/* Gradient top strip */}
        <div className="h-1.5 bg-gradient-to-r from-[#36A2FF] to-[#007BFF]" />

        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#64748b] hover:bg-gray-200 transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-7">
          {/* Header */}
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#36A2FF] to-[#007BFF] flex items-center justify-center shadow-sm">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs font-bold text-[#007BFF] uppercase tracking-widest">
              Quick Setup
            </span>
          </div>

          <h2 className="text-xl font-bold text-[#1E293B] mb-1 mt-3">{current.title}</h2>
          <p className="text-sm text-[#64748b] mb-6">{current.subtitle}</p>

          {/* Options grid */}
          <div className="grid grid-cols-2 gap-3 mb-7">
            {current.options.map(opt => {
              const selected = prefs[current.key] === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => setPrefs(p => ({ ...p, [current.key]: opt.value }))}
                  className={`relative flex flex-col items-center gap-2 p-4 rounded-2xl border-2 text-center transition-all duration-200 ${
                    selected
                      ? 'border-[#007BFF] bg-[#EAF6FF] shadow-sm'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {selected && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#007BFF] flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  )}
                  <span className="text-2xl">{opt.emoji}</span>
                  <span className={`text-sm font-semibold leading-snug ${selected ? 'text-[#007BFF]' : 'text-[#1E293B]'}`}>
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i === step
                    ? 'w-6 h-2 bg-[#007BFF]'
                    : i < step
                      ? 'w-2 h-2 bg-[#007BFF]/40'
                      : 'w-2 h-2 bg-gray-200'
                }`}
              />
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={dismiss}
              className="px-4 py-3 rounded-xl text-sm font-medium text-[#64748b] hover:text-[#475569] hover:bg-gray-100 transition-all"
            >
              Skip
            </button>

            <button
              disabled={!canAdvance}
              onClick={() => {
                if (!canAdvance) return;
                if (isLast) {
                  finish();
                } else {
                  setStep(s => (s + 1) as Step);
                }
              }}
              className={`flex-1 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
                canAdvance
                  ? 'bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white shadow-md shadow-blue-200 hover:shadow-lg hover:-translate-y-0.5'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              {isLast ? (
                <>
                  <Sparkles className="w-4 h-4" />
                  Find My Style
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
      )}
    </AnimatePresence>
  );
}
