import { Smartphone, Star } from 'lucide-react';
import { Button } from './Button';

export function DownloadAppCTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#EAF6FF]/30">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#36A2FF] to-[#007BFF] rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-16">
            <div className="space-y-6 text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm font-medium">Mobile App</span>
              </div>

              <h2 className="text-4xl font-bold">
                Book On-the-Go with Our Mobile App
              </h2>

              <p className="text-lg text-white/90 leading-relaxed">
                Download the SalonMama app for the best experience. Get exclusive app-only deals,
                push notifications for bookings, and seamless payment options.
              </p>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                    ))}
                  </div>
                  <span className="font-medium">4.9</span>
                </div>
                <div className="h-8 w-px bg-white/30" />
                <div>
                  <p className="font-semibold">10,000+</p>
                  <p className="text-sm text-white/80">Downloads</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/30 transition-all">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-xl">🍎</span>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-white/80">Download on the</p>
                    <p className="font-semibold">App Store</p>
                  </div>
                </button>

                <button className="flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/30 transition-all">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-xl">📱</span>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-white/80">Get it on</p>
                    <p className="font-semibold">Google Play</p>
                  </div>
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-64 h-96 bg-white/10 backdrop-blur-sm rounded-3xl border-4 border-white/30 p-2">
                <div className="w-full h-full bg-gradient-to-b from-white to-[#EAF6FF] rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="w-24 h-24 mx-auto text-[#007BFF] mb-4" />
                    <p className="text-[#64748b] font-medium">App Preview</p>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg">
                  <Star className="w-6 h-6 fill-white text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
