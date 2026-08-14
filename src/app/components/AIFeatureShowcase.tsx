import { Upload, Sparkles, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Reveal, Stagger, StaggerItem, fadeUpVariants } from './motion';

export function AIFeatureShowcase() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Stagger className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF6FF] border border-[#36A2FF]/20">
              <Sparkles className="w-4 h-4 text-[#007BFF]" />
              <span className="text-sm text-[#007BFF] font-medium">AI-Powered Technology</span>
            </div>

            <h2 className="text-4xl font-bold text-[#1E293B]">
              Find Your Perfect Style with{' '}
              <span className="bg-gradient-to-r from-[#36A2FF] to-[#007BFF] bg-clip-text text-transparent">
                AI
              </span>
            </h2>

            <p className="text-lg text-[#64748b] leading-relaxed">
              Upload your photo and let our advanced AI analyze your face shape to recommend the
              most flattering hairstyles just for you.
            </p>

            <div className="space-y-4">
              <StaggerItem className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#007BFF] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-[#1E293B] mb-1">Face Shape Analysis</h4>
                  <p className="text-[#64748b]">AI detects your face shape for personalized recommendations</p>
                </div>
              </StaggerItem>

              <StaggerItem className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#007BFF] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-[#1E293B] mb-1">Style Matching</h4>
                  <p className="text-[#64748b]">Get styles that complement your unique features</p>
                </div>
              </StaggerItem>

              <StaggerItem className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#007BFF] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-[#1E293B] mb-1">Instant Booking</h4>
                  <p className="text-[#64748b]">Book your chosen style directly with nearby salons</p>
                </div>
              </StaggerItem>
            </div>

            <Link
              to="/ai-style-finder"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white font-semibold shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5 transition-all group"
            >
              Try AI Style Finder
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Link>

            <p className="text-sm text-[#64748b]">
              <span className="font-medium text-[#007BFF]">3 free AI scans remaining</span> this month
            </p>
          </Stagger>

          <Reveal className="relative" variant={fadeUpVariants}>
            <div className="relative bg-gradient-to-br from-[#EAF6FF] to-white rounded-3xl p-8 border border-gray-200 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-2xl overflow-hidden border-2 border-[#36A2FF]/20 bg-white shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1680104073282-8462cdf70b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                    alt="Before AI analysis"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl border-2 border-dashed border-[#36A2FF]/30 bg-white flex flex-col items-center justify-center gap-3 hover:border-[#36A2FF] transition-colors cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#36A2FF] to-[#007BFF] flex items-center justify-center">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center px-2">
                    <p className="text-sm font-medium text-[#1E293B] mb-1">Upload Photo</p>
                    <p className="text-xs text-[#64748b]">Get AI results</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[#1E293B]">Face Shape</span>
                    <span className="text-sm text-[#007BFF] font-semibold">Oval</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[92%] bg-gradient-to-r from-[#36A2FF] to-[#007BFF] rounded-full" />
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[#1E293B]">Best Match</span>
                    <span className="text-sm text-[#007BFF] font-semibold">Korean Cut</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[88%] bg-gradient-to-r from-[#36A2FF] to-[#007BFF] rounded-full" />
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-[#1E293B]">AI Ready</span>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
