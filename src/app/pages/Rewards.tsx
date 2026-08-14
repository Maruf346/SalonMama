import { Star, Gift, Award, Crown, Zap, Calendar, Users, ChevronRight, Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { MotionPage, Reveal } from '../components/motion';

const TIERS = [
  {
    name: 'Bronze',
    range: '0 – 499 pts',
    color: 'from-amber-600 to-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    icon: '🥉',
    perks: ['5% discount on all services', 'Priority booking access', 'Birthday bonus points'],
    current: false,
  },
  {
    name: 'Silver',
    range: '500 – 1,999 pts',
    color: 'from-slate-500 to-slate-400',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    icon: '🥈',
    perks: ['10% discount on all services', 'Free birthday service', '1 monthly perk', 'Early access to new salons'],
    current: true,
  },
  {
    name: 'Gold',
    range: '2,000 – 4,999 pts',
    color: 'from-yellow-500 to-amber-400',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    icon: '🥇',
    perks: ['20% discount on all services', 'Free monthly service', 'VIP slot booking', 'Dedicated stylist access'],
    current: false,
  },
  {
    name: 'Platinum',
    range: '5,000+ pts',
    color: 'from-violet-600 to-purple-500',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    icon: '💎',
    perks: ['50% discount on all services', 'Dedicated stylist', 'Free monthly signature service', 'Exclusive events & previews'],
    current: false,
  },
];

const EARN_WAYS = [
  { icon: <Calendar className="w-6 h-6" />, title: 'Book a Service', points: '+100 pts', desc: 'Every confirmed booking earns you base points' },
  { icon: <Star className="w-6 h-6" />, title: 'Leave a Review', points: '+50 pts', desc: 'Share your honest experience after each visit' },
  { icon: <Users className="w-6 h-6" />, title: 'Refer a Friend', points: '+200 pts', desc: 'Earn when your referral makes their first booking' },
  { icon: <Zap className="w-6 h-6" />, title: 'Complete Profile', points: '+75 pts', desc: 'Fill in your style preferences and hair profile' },
];

const REDEMPTIONS = [
  { title: 'Free Haircut', cost: 500, icon: '✂️', value: 'Up to ৳800 value', available: true },
  { title: '20% Off Any Service', cost: 300, icon: '🏷️', value: 'Max discount ৳500', available: true },
  { title: 'Free Facial', cost: 800, icon: '✨', value: 'Up to ৳1,200 value', available: true },
  { title: 'Free Hair Spa', cost: 600, icon: '💆', value: 'Up to ৳1,500 value', available: false },
  { title: 'Complimentary Beard Trim', cost: 200, icon: '🪒', value: 'Up to ৳400 value', available: true },
  { title: 'VIP Priority Slot', cost: 400, icon: '🌟', value: 'Skip the queue', available: false },
];

const MOCK_USER = {
  points: 750,
  tier: 'Silver',
  nextTier: 'Gold',
  pointsToNext: 1250,
  totalEarned: 1840,
  redemptions: 3,
};

export function Rewards() {
  const progressToNext = Math.round((MOCK_USER.points / (MOCK_USER.points + MOCK_USER.pointsToNext)) * 100);

  return (
    <MotionPage className="min-h-screen bg-gradient-to-b from-[#EAF6FF]/40 via-white to-white pt-16">

      {/* ─── Hero ─── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#007BFF] via-[#1a8cff] to-[#0056D2] py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.12),transparent_55%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(0,56,200,0.35),transparent_55%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20">
                <Gift className="w-4 h-4" />
                <span className="text-sm font-semibold">SalonMama Rewards</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Beauty that
                <br />
                <span className="text-yellow-300">Pays Back</span>
              </h1>
              <p className="text-lg text-white/85 leading-relaxed max-w-md">
                Earn points with every booking, review, and referral. Redeem for free services,
                exclusive discounts, and VIP perks.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button className="px-7 py-3.5 rounded-full bg-white text-[#007BFF] font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Join Free Today
                </button>
                <Link
                  to="/browse-salons"
                  className="px-7 py-3.5 rounded-full bg-white/15 border-2 border-white/30 text-white font-semibold hover:bg-white/25 transition-all text-center"
                >
                  Start Earning
                </Link>
              </div>
            </div>

            {/* Mock Points Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-6 w-full max-w-sm shadow-xl">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">Your Points</p>
                    <div className="text-4xl font-bold text-white">{MOCK_USER.points.toLocaleString()}</div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 border border-white/25">
                      <span className="text-sm">🥈</span>
                      <span className="text-white font-semibold text-sm">{MOCK_USER.tier}</span>
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex justify-between text-xs text-white/70 mb-2">
                    <span>{MOCK_USER.tier}</span>
                    <span className="font-semibold text-yellow-300">{MOCK_USER.pointsToNext} pts to {MOCK_USER.nextTier}</span>
                  </div>
                  <div className="h-2.5 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full transition-all"
                      style={{ width: `${progressToNext}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/15">
                  {[
                    { label: 'Total Earned', value: MOCK_USER.totalEarned.toLocaleString() },
                    { label: 'Redeemed', value: MOCK_USER.redemptions },
                    { label: 'Bookings', value: '12' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                      <div className="text-[10px] text-white/60 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── How to Earn ─── */}
      <Reveal>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-3">How to Earn Points</h2>
            <p className="text-[#64748b]">Every interaction with SalonMama earns you rewards</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EARN_WAYS.map((way, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EAF6FF] to-[#dbeafe] flex items-center justify-center text-[#007BFF] mb-4 group-hover:from-[#36A2FF]/20 group-hover:to-[#007BFF]/20 transition-all">
                  {way.icon}
                </div>
                <div className="text-lg font-bold text-[#007BFF] mb-1">{way.points}</div>
                <div className="font-semibold text-[#1E293B] mb-1">{way.title}</div>
                <div className="text-sm text-[#64748b] leading-snug">{way.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* ─── Tier Levels ─── */}
      <Reveal>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-3">Membership Tiers</h2>
            <p className="text-[#64748b]">Unlock greater benefits as you grow your points</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TIERS.map((tier, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-6 border-2 transition-all ${
                  tier.current
                    ? 'border-[#007BFF] shadow-xl shadow-blue-100 scale-[1.02]'
                    : `${tier.border} ${tier.bg}`
                } ${tier.current ? 'bg-white' : ''}`}
              >
                {tier.current && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                    Current Tier
                  </div>
                )}

                <div className="text-3xl mb-3">{tier.icon}</div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-0.5">{tier.name}</h3>
                <p className="text-xs text-[#64748b] font-medium mb-4">{tier.range}</p>

                <ul className="space-y-2">
                  {tier.perks.map((perk, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#475569]">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {perk}
                    </li>
                  ))}
                </ul>

                {tier.current && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="text-xs text-[#64748b] mb-1.5">Progress to {TIERS[i + 1]?.name}</div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${tier.color} rounded-full`}
                        style={{ width: `${progressToNext}%` }}
                      />
                    </div>
                    <div className="text-[10px] text-[#007BFF] font-semibold mt-1">{MOCK_USER.pointsToNext} pts needed</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* ─── Redemptions ─── */}
      <Reveal>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#1E293B] mb-2">Redeem Your Points</h2>
              <p className="text-[#64748b]">Turn points into real beauty rewards</p>
            </div>
            <div className="text-right hidden sm:block">
              <div className="text-sm text-[#64748b]">Your balance</div>
              <div className="text-2xl font-bold text-[#007BFF]">{MOCK_USER.points} pts</div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REDEMPTIONS.map((item, i) => {
              const canAfford = MOCK_USER.points >= item.cost;
              return (
                <div
                  key={i}
                  className={`bg-white rounded-2xl border p-5 transition-all ${
                    item.available && canAfford
                      ? 'border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1'
                      : 'border-gray-100 opacity-60'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{item.icon}</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#007BFF]">{item.cost} pts</div>
                      <div className="text-xs text-[#64748b]">{item.value}</div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-[#1E293B] mb-3">{item.title}</h3>
                  <button
                    disabled={!item.available || !canAfford}
                    className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-1.5 ${
                      item.available && canAfford
                        ? 'bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white shadow-sm hover:shadow-md hover:-translate-y-0.5'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {!item.available
                      ? 'Coming Soon'
                      : !canAfford
                        ? `Need ${item.cost - MOCK_USER.points} more pts`
                        : (
                          <>
                            <Sparkles className="w-3.5 h-3.5" />
                            Redeem Now
                          </>
                        )
                    }
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      </Reveal>

      {/* ─── Extra Perks ─── */}
      <Reveal>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-8 text-center">Exclusive Member Perks</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: '🎂', title: 'Birthday Bonus', desc: 'Get 500 bonus points on your birthday month, automatically credited.' },
              { icon: '🤝', title: 'Referral Rewards', desc: 'Earn 200 points every time a friend signs up and completes their first booking.' },
              { icon: '🔔', title: 'Flash Deals', desc: 'Members get 24-hour early access to limited-time offers and discounted slots.' },
            ].map((perk, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-4">{perk.icon}</div>
                <h3 className="font-bold text-[#1E293B] mb-2">{perk.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* ─── Bottom CTA ─── */}
      <Reveal>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#36A2FF] to-[#007BFF] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.12),transparent_55%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Award className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Start Earning Today</h2>
          <p className="text-lg text-white/85 mb-8">
            Join 50,000+ members already enjoying free services, exclusive discounts, and VIP access across Dhaka's best salons.
          </p>
          <button className="px-10 py-4 rounded-full bg-white text-[#007BFF] font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all">
            Create Free Account
          </button>
        </div>
      </section>
      </Reveal>

    </MotionPage>
  );
}
