import { useState } from 'react';
import {
  Star,
  Gift,
  Award,
  Crown,
  Zap,
  Calendar,
  Users,
  ChevronRight,
  Check,
  Sparkles,
  PartyPopper,
  CheckCircle2,
  X,
} from 'lucide-react';
import { Link } from 'react-router';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'motion/react';
import {
  MotionPage,
  Reveal,
  Stagger,
  StaggerItem,
  TiltCard,
  Magnetic,
  AnimatedNumber,
} from '../components/motion';
import { SEOHead } from '../components/SEOHead';

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
    perks: [
      '10% discount on all services',
      'Free birthday service',
      '1 monthly perk',
      'Early access to new salons',
    ],
    current: true,
  },
  {
    name: 'Gold',
    range: '2,000 – 4,999 pts',
    color: 'from-yellow-500 to-amber-400',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    icon: '🥇',
    perks: [
      '20% discount on all services',
      'Free monthly service',
      'VIP slot booking',
      'Dedicated stylist access',
    ],
    current: false,
  },
  {
    name: 'Platinum',
    range: '5,000+ pts',
    color: 'from-violet-600 to-purple-500',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    icon: '💎',
    perks: [
      '50% discount on all services',
      'Dedicated stylist',
      'Free monthly signature service',
      'Exclusive events & previews',
    ],
    current: false,
  },
];

const EARN_WAYS = [
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Book a Service',
    points: '+100 pts',
    desc: 'Every confirmed booking earns you base points',
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Leave a Review',
    points: '+50 pts',
    desc: 'Share your honest experience after each visit',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Refer a Friend',
    points: '+200 pts',
    desc: 'Earn when your referral makes their first booking',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Complete Profile',
    points: '+75 pts',
    desc: 'Fill in your style preferences and hair profile',
  },
];

const REDEMPTIONS = [
  { title: 'Free Haircut', cost: 500, icon: '✂️', value: 'Up to ৳800 value', available: true },
  { title: '20% Off Any Service', cost: 300, icon: '🏷️', value: 'Max discount ৳500', available: true },
  { title: 'Free Facial', cost: 800, icon: '✨', value: 'Up to ৳1,200 value', available: true },
  { title: 'Free Hair Spa', cost: 600, icon: '💆', value: 'Up to ৳1,500 value', available: true },
  {
    title: 'Complimentary Beard Trim',
    cost: 200,
    icon: '🪒',
    value: 'Up to ৳400 value',
    available: true,
  },
  { title: 'VIP Priority Slot', cost: 400, icon: '🌟', value: 'Skip the queue', available: false },
];

export function Rewards() {
  const [userPoints, setUserPoints] = useState(750);
  const [redeemedItem, setRedeemedItem] = useState<string | null>(null);
  const [scratchedBonus, setScratchedBonus] = useState(false);

  const pointsToNext = 1250;
  const progressToNext = Math.round((userPoints / (userPoints + pointsToNext)) * 100);

  const fireConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#007BFF', '#36A2FF', '#FFD700', '#FF69B4'],
    });
  };

  const handleRedeem = (item: (typeof REDEMPTIONS)[0]) => {
    if (userPoints >= item.cost) {
      setUserPoints((prev) => prev - item.cost);
      setRedeemedItem(item.title);
      fireConfetti();
    }
  };

  const handleClaimDailyBonus = () => {
    if (!scratchedBonus) {
      setScratchedBonus(true);
      setUserPoints((prev) => prev + 50);
      fireConfetti();
    }
  };

  return (
    <MotionPage className="min-h-screen bg-[#fafbfc] pt-16">
      <SEOHead
        title="SalonMama Rewards | Earn Free Haircuts & Discounts"
        description="Earn points on every haircut and salon visit in Dhaka. Redeem points for free haircuts, facials, and exclusive discount vouchers across top salons."
        keywords="salon rewards dhaka, free haircut points bangladesh, salon mama discounts, beauty salon offers dhaka"
      />
      {/* ─── Hero ─── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#005ECE] via-[#007BFF] to-[#004BB5] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.18),transparent_55%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(0,56,200,0.4),transparent_55%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25">
                <Gift className="w-4 h-4 text-yellow-300" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  SalonMama Loyalty Rewards
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                Beauty That
                <br />
                <span className="text-yellow-300">Pays Back Every Visit</span>
              </h1>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-md">
                Earn points with every booking, verified review, and friend referral. Redeem for
                free services, salon vouchers, and exclusive VIP passes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleClaimDailyBonus}
                  disabled={scratchedBonus}
                  className={`px-7 py-3.5 rounded-full font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    scratchedBonus
                      ? 'bg-green-400 text-slate-900 cursor-default'
                      : 'bg-white text-[#007BFF] hover:bg-yellow-300 hover:text-slate-900 hover:scale-105'
                  }`}
                >
                  <PartyPopper className="w-4 h-4" />
                  {scratchedBonus ? 'Daily +50 Pts Claimed!' : 'Claim Daily Bonus (+50 pts)'}
                </button>
                <Link
                  to="/browse-salons"
                  className="px-7 py-3.5 rounded-full bg-white/15 border-2 border-white/30 text-white font-semibold hover:bg-white/25 transition-all text-center text-sm"
                >
                  Book & Earn Points
                </Link>
              </div>
            </div>

            {/* Mock Points Card */}
            <div className="flex justify-center lg:justify-end">
              <TiltCard maxTilt={6} className="w-full max-w-sm">
                <div className="bg-white/15 backdrop-blur-xl rounded-3xl border border-white/25 p-6 w-full shadow-2xl space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">
                        Your Points Balance
                      </p>
                      <div className="text-4xl font-extrabold text-white">
                        <AnimatedNumber value={userPoints} />
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 border border-white/25 text-sm font-bold">
                        🥈 Silver Tier
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-white/80 mb-2">
                      <span>Silver Tier</span>
                      <span className="font-semibold text-yellow-300">
                        {pointsToNext} pts to Gold
                      </span>
                    </div>
                    <div className="h-2.5 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full"
                        style={{ width: `${progressToNext}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/15">
                    {[
                      { label: 'Total Earned', value: '1,840' },
                      { label: 'Redeemed', value: '3' },
                      { label: 'Bookings', value: '12' },
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold text-white">{stat.value}</div>
                        <div className="text-[10px] text-white/70 mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </div>

      {/* ─── How to Earn ─── */}
      <Reveal>
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-2">How to Earn Points</h2>
            <p className="text-[#64748b]">Every interaction with SalonMama earns you rewards</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EARN_WAYS.map((way, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#007BFF] flex items-center justify-center mb-4 group-hover:bg-[#007BFF] group-hover:text-white transition-colors">
                  {way.icon}
                </div>
                <div className="text-lg font-extrabold text-[#007BFF] mb-1">{way.points}</div>
                <div className="font-bold text-[#0f172a] mb-1">{way.title}</div>
                <div className="text-xs text-[#64748b] leading-relaxed">{way.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ─── Redemptions ─── */}
      <Reveal>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-[#0f172a] mb-1">Redeem Your Points</h2>
                <p className="text-[#64748b]">Turn your accumulated points into real beauty perks</p>
              </div>
              <div className="bg-blue-50 px-5 py-2.5 rounded-2xl border border-blue-100 flex items-center gap-3">
                <span className="text-xs text-[#64748b] font-medium">Available Balance:</span>
                <span className="text-xl font-bold text-[#007BFF]">{userPoints} pts</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {REDEMPTIONS.map((item, i) => {
                const canAfford = userPoints >= item.cost;
                return (
                  <div
                    key={i}
                    className={`bg-[#fafbfc] rounded-3xl border p-6 transition-all ${
                      item.available && canAfford
                        ? 'border-gray-200 hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 bg-white'
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
                    <h3 className="font-bold text-[#0f172a] text-lg mb-4">{item.title}</h3>
                    <button
                      onClick={() => handleRedeem(item)}
                      disabled={!item.available || !canAfford}
                      className={`w-full py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        item.available && canAfford
                          ? 'bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white shadow-md hover:shadow-lg'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {!item.available ? (
                        'Coming Soon'
                      ) : !canAfford ? (
                        `Need ${item.cost - userPoints} more pts`
                      ) : (
                        <>
                          <Sparkles className="w-3.5 h-3.5" />
                          Redeem Now
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ─── Tier Levels ─── */}
      <Reveal>
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-2">Membership Tiers</h2>
            <p className="text-[#64748b]">Unlock greater discounts as you climb the ranks</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIERS.map((tier, i) => (
              <div
                key={i}
                className={`relative rounded-3xl p-6 border-2 transition-all ${
                  tier.current
                    ? 'border-[#007BFF] bg-white shadow-xl shadow-blue-100 scale-[1.02]'
                    : `${tier.border} ${tier.bg}`
                }`}
              >
                {tier.current && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                    Current Tier
                  </div>
                )}

                <div className="text-3xl mb-3">{tier.icon}</div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-0.5">{tier.name}</h3>
                <p className="text-xs text-[#64748b] font-medium mb-4">{tier.range}</p>

                <ul className="space-y-2.5">
                  {tier.perks.map((perk, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-[#475569]">
                      <Check className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Redemption Success Modal */}
      <AnimatePresence>
        {redeemedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setRedeemedItem(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              className="relative max-w-sm w-full bg-white rounded-3xl shadow-2xl p-6 text-center z-10 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto text-2xl">
                🎁
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a]">Reward Redeemed!</h3>
              <p className="text-sm text-[#64748b]">
                You have successfully redeemed{' '}
                <span className="font-bold text-slate-800">{redeemedItem}</span>. Your unique promo
                pass has been saved to your "My Bookings" wallet.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <Link
                  to="/my-bookings"
                  className="w-full py-3 rounded-xl bg-[#007BFF] text-white font-bold text-xs"
                >
                  View My Wallet
                </Link>
                <button
                  onClick={() => setRedeemedItem(null)}
                  className="w-full py-2.5 text-xs text-gray-500 hover:text-gray-900"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </MotionPage>
  );
}
