import { useState } from 'react';
import { Upload, Sparkles, CheckCircle, Sliders, Scan, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Reveal, Stagger, StaggerItem, TiltCard, Magnetic } from './motion';

const FACE_SHAPE_DEMOS = {
  Oval: {
    match: 'Korean Two-Block & Curtain Bangs',
    confidence: '96%',
    description: 'Oval faces suit almost any style. Soft layers and curtain bangs frame your cheekbones nicely.',
    beforeImg:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=600&q=80',
    afterImg:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=600&q=80',
  },
  Square: {
    match: 'Textured Shag & Soft Waves',
    confidence: '94%',
    description: 'Softens strong jawlines with airy volume on top and gentle wavy sides.',
    beforeImg:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=600&q=80',
    afterImg:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=600&q=80',
  },
  Heart: {
    match: 'Chin-Length Bob or Low Fade',
    confidence: '92%',
    description: 'Balances a wider forehead by adding natural volume near the chin and jaw.',
    beforeImg:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=600&q=80',
    afterImg:
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=600&q=80',
  },
  Round: {
    match: 'Layered Cut with Height & Volume',
    confidence: '95%',
    description: 'Adds vertical height on top to give your face a slimmer, well-balanced look.',
    beforeImg:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=600&q=80',
    afterImg:
      'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=600&q=80',
  },
};

type FaceShape = keyof typeof FACE_SHAPE_DEMOS;

export function AIFeatureShowcase() {
  const [selectedShape, setSelectedShape] = useState<FaceShape>('Oval');
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100

  const currentData = FACE_SHAPE_DEMOS[selectedShape];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#007BFF] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Free AI Hairstyle Tool
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-[1.15]">
              Find Out Which Haircut
              <br />
              <span className="bg-gradient-to-r from-[#007BFF] to-[#36A2FF] bg-clip-text text-transparent">
                Suits Your Face Best
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#64748b] leading-relaxed">
              Not sure which hairstyle looks good on you? Select your face shape below or upload a
              selfie to see recommendations and find top salons in Dhaka that can cut it for you.
            </p>

            {/* Interactive Shape Pill Switcher */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#94a3b8]">
                Select a Face Shape to Preview:
              </label>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(FACE_SHAPE_DEMOS) as FaceShape[]).map((shape) => (
                  <button
                    key={shape}
                    onClick={() => setSelectedShape(shape)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedShape === shape
                        ? 'bg-[#007BFF] text-white shadow-md shadow-blue-200 scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {shape} Face
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic AI Results Box */}
            <motion.div
              key={selectedShape}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-5 rounded-2xl bg-[#f8fafc] border border-blue-100/80 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-[#94a3b8] uppercase">
                    Recommended Style
                  </span>
                  <h4 className="text-base font-bold text-[#0f172a]">{currentData.match}</h4>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                    {currentData.confidence} Match
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#64748b] leading-relaxed">{currentData.description}</p>
            </motion.div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Magnetic>
                <Link
                  to="/ai-style-finder"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white font-bold text-sm shadow-lg shadow-blue-200 hover:shadow-xl transition-all"
                >
                  <Scan className="w-4 h-4" />
                  Upload Photo for Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Magnetic>

              <span className="text-xs text-[#94a3b8]">Free scans available every month</span>
            </div>
          </div>

          {/* Right: Interactive Comparison Slider */}
          <div className="lg:col-span-6">
            <TiltCard maxTilt={4} className="w-full">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,123,255,0.06)] border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#0f172a] flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-[#007BFF]" />
                    Slide to compare original vs suggested style
                  </span>
                  <span className="text-[11px] font-semibold text-[#007BFF] bg-blue-50 px-2 py-0.5 rounded-full">
                    {selectedShape} Face Shape
                  </span>
                </div>

                {/* Split canvas */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden select-none bg-slate-900 border border-gray-200">
                  {/* "After" Image */}
                  <img
                    src={currentData.afterImg}
                    alt="Suggested Haircut Look"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-blue-600/90 text-white text-[11px] font-bold shadow-md">
                    Suggested Haircut ✨
                  </div>

                  {/* "Before" Image */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                  >
                    <img
                      src={currentData.beforeImg}
                      alt="Original Selfie Photo"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/70 text-white text-[11px] font-bold shadow-md">
                      Original Selfie
                    </div>
                  </div>

                  {/* Vertical Divider Line */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-xl flex items-center justify-center text-[#007BFF] border-2 border-[#007BFF]">
                      <Sliders className="w-3.5 h-3.5 rotate-90" />
                    </div>
                  </div>
                </div>

                {/* Slider range input */}
                <div className="mt-5 space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPos}
                    onChange={handleSliderChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-ew-resize accent-[#007BFF]"
                  />
                  <div className="flex justify-between text-[11px] text-[#94a3b8] font-medium">
                    <span>← Slide Left (Suggested Style)</span>
                    <span>Slide Right (Original) →</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
