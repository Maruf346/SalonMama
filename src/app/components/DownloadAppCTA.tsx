import { Star } from 'lucide-react';

export function DownloadAppCTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#EAF6FF]/40">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#007BFF] via-[#1a8cff] to-[#0056D2] rounded-3xl overflow-hidden relative shadow-2xl">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(255,255,255,0.12),transparent_55%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_70%,rgba(0,56,200,0.35),transparent_55%)] pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center p-8 sm:p-12 lg:p-16">

            {/* Left — Text Content */}
            <div className="space-y-6 text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
                <span className="text-base">📱</span>
                <span className="text-sm font-semibold">SalonMama App</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Book Beauty
                <br />
                <span className="text-yellow-300">On the Go</span>
              </h2>

              <p className="text-lg text-white/85 leading-relaxed max-w-md">
                Download the SalonMama app for the best experience. Get exclusive
                app-only deals, instant booking confirmations, and real-time
                salon availability.
              </p>

              {/* Rating row */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                    ))}
                  </div>
                  <span className="font-bold text-lg">4.9</span>
                </div>
                <div className="h-8 w-px bg-white/25" />
                <div>
                  <p className="font-semibold">10,000+</p>
                  <p className="text-sm text-white/70">Downloads</p>
                </div>
                <div className="h-8 w-px bg-white/25" />
                <div>
                  <p className="font-semibold">500+</p>
                  <p className="text-sm text-white/70">Salons Listed</p>
                </div>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button className="flex items-center gap-3 px-5 py-3.5 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/25 hover:bg-white/25 hover:border-white/40 hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow-md">
                  <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <span className="text-lg leading-none">🍎</span>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-white/70 font-medium uppercase tracking-wide">Download on the</p>
                    <p className="font-bold text-sm">App Store</p>
                  </div>
                </button>

                <button className="flex items-center gap-3 px-5 py-3.5 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/25 hover:bg-white/25 hover:border-white/40 hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow-md">
                  <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <span className="text-lg leading-none">▶</span>
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-white/70 font-medium uppercase tracking-wide">Get it on</p>
                    <p className="font-bold text-sm">Google Play</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Right — Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">

                {/* Phone Shell */}
                <div className="relative w-[230px] sm:w-[250px] h-[460px] sm:h-[500px] bg-[#111827] rounded-[44px] p-[10px] shadow-[0_35px_90px_rgba(0,0,0,0.45)]">

                  {/* Screen */}
                  <div className="w-full h-full bg-white rounded-[36px] overflow-hidden relative flex flex-col">

                    {/* Status Bar */}
                    <div className="flex items-center justify-between px-5 pt-2 pb-1 bg-white flex-shrink-0">
                      <span className="text-[10px] font-bold text-[#1E293B]">9:41</span>
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-end gap-px h-3">
                          <div className="w-[3px] h-[4px] bg-[#1E293B] rounded-sm" />
                          <div className="w-[3px] h-[6px] bg-[#1E293B] rounded-sm" />
                          <div className="w-[3px] h-[9px] bg-[#1E293B] rounded-sm" />
                          <div className="w-[3px] h-[12px] bg-[#1E293B] rounded-sm" />
                        </div>
                        <div className="w-[16px] h-[8px] rounded-[2px] border border-[#1E293B] relative ml-0.5">
                          <div className="absolute inset-0.5 right-1 bg-[#1E293B] rounded-[1px]" />
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-[5px] rounded-r-sm bg-[#1E293B] translate-x-[3px]" />
                        </div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="bg-gradient-to-r from-[#36A2FF] to-[#007BFF] px-4 py-3 flex items-center justify-between flex-shrink-0">
                      <div>
                        <div className="text-white text-xs font-bold tracking-tight">SalonMama</div>
                        <div className="text-white/75 text-[8px] font-medium">Find · Book · Glow</div>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-white/20 border border-white/30 flex items-center justify-center overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=crop&w=64&h=64&q=80"
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Search Bar */}
                    <div className="px-3 pt-2.5 pb-1.5 flex-shrink-0">
                      <div className="h-7 bg-[#f1f5f9] rounded-xl flex items-center px-3 gap-2">
                        <div className="w-3 h-3 rounded-full border-[1.5px] border-[#94a3b8]" />
                        <div className="h-1.5 w-24 bg-[#cbd5e1] rounded-full" />
                      </div>
                    </div>

                    {/* Section label */}
                    <div className="px-4 pb-1.5 flex-shrink-0">
                      <div className="text-[8px] font-bold text-[#1E293B] uppercase tracking-widest">Top Rated Near You ✨</div>
                    </div>

                    {/* Salon Card 1 */}
                    <div className="mx-3 mb-2 rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex-shrink-0">
                      <div className="h-[52px] relative overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=crop&w=300&h=120&q=80"
                          alt="Salon"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                        <div className="absolute top-1.5 left-2 bg-green-500 rounded-full px-1.5 py-0.5">
                          <span className="text-white text-[7px] font-bold uppercase">Open</span>
                        </div>
                      </div>
                      <div className="p-2 bg-white">
                        <div className="flex justify-between items-start mb-0.5">
                          <div className="h-2 w-16 bg-[#1E293B]/30 rounded" />
                          <div className="h-2 w-8 bg-[#EAF6FF] rounded" />
                        </div>
                        <div className="h-1.5 w-20 bg-[#94a3b8]/40 rounded mb-1.5" />
                        <div className="flex items-center justify-between">
                          <div className="flex gap-px">
                            {[1, 2, 3, 4, 5].map(s => (
                              <div key={s} className="w-[7px] h-[7px] rounded-[2px] bg-yellow-400" />
                            ))}
                          </div>
                          <div className="h-[14px] w-[44px] rounded-full bg-gradient-to-r from-[#36A2FF] to-[#007BFF]" />
                        </div>
                      </div>
                    </div>

                    {/* Salon Card 2 */}
                    <div className="mx-3 mb-1 rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex-shrink-0">
                      <div className="h-[44px] relative overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1600948836587-02c1842c9140?crop=entropy&cs=tinysrgb&fit=crop&w=300&h=100&q=80"
                          alt="Salon"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                        <div className="absolute top-1.5 left-2 bg-green-500 rounded-full px-1.5 py-0.5">
                          <span className="text-white text-[7px] font-bold uppercase">Open</span>
                        </div>
                      </div>
                      <div className="p-2 bg-white">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="h-2 w-14 bg-[#1E293B]/30 rounded mb-1" />
                            <div className="flex gap-px">
                              {[1, 2, 3, 4, 5].map(s => (
                                <div key={s} className="w-[7px] h-[7px] rounded-[2px] bg-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <div className="h-[14px] w-[44px] rounded-full bg-gradient-to-r from-[#36A2FF] to-[#007BFF]" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Nav */}
                    <div className="absolute bottom-0 left-0 right-0 h-[46px] bg-white border-t border-gray-100 flex items-center justify-around px-3 rounded-b-[36px]">
                      {[
                        { icon: '🏠', active: true },
                        { icon: '🔍', active: false },
                        { icon: '✂️', active: false },
                        { icon: '❤️', active: false },
                        { icon: '👤', active: false },
                      ].map(({ icon, active }, i) => (
                        <div key={i} className={`flex flex-col items-center gap-px transition-opacity ${active ? 'opacity-100' : 'opacity-35'}`}>
                          <span className="text-sm leading-none">{icon}</span>
                          {active && <div className="w-1 h-1 rounded-full bg-[#007BFF]" />}
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Dynamic Island */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[72px] h-[24px] bg-[#111827] rounded-full z-20 shadow-inner" />

                </div>

                {/* Floating Rating Badge */}
                <div className="absolute -top-3 -right-4 bg-yellow-400 rounded-2xl px-3 py-2 shadow-lg flex items-center gap-1.5 animate-float">
                  <Star className="w-4 h-4 fill-white text-white" />
                  <span className="text-white font-bold text-sm">4.9</span>
                </div>

                {/* Floating Booking Notification */}
                <div
                  className="absolute -left-6 bottom-20 bg-white rounded-2xl px-3 py-2.5 shadow-xl border border-gray-100 animate-float"
                  style={{ animationDelay: '1s' }}
                >
                  <p className="text-[#007BFF] text-xs font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    New booking confirmed!
                  </p>
                  <p className="text-[#64748b] text-[10px] mt-0.5">Glamour Studio · 3:00 PM</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
