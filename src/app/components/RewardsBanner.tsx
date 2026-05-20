import { Gift, Star, Award, Crown } from 'lucide-react';
import { Button } from './Button';

const REWARD_CARDS = [
  {
    icon: <Star className="w-6 h-6" />,
    value: '1,000+',
    label: 'Points Earned',
    sub: 'per booking',
    color: 'from-yellow-400/20 to-orange-300/20',
    iconColor: 'text-yellow-300',
    iconBg: 'bg-yellow-300/20',
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: '50%',
    label: 'Max Discount',
    sub: 'on services',
    color: 'from-sky-400/20 to-blue-300/20',
    iconColor: 'text-sky-200',
    iconBg: 'bg-sky-300/20',
  },
  {
    icon: <Gift className="w-6 h-6" />,
    value: 'Free',
    label: 'Monthly Perks',
    sub: 'for members',
    color: 'from-pink-400/20 to-rose-300/20',
    iconColor: 'text-pink-200',
    iconBg: 'bg-pink-300/20',
  },
  {
    icon: <Crown className="w-6 h-6" />,
    value: 'VIP',
    label: 'Member Access',
    sub: 'priority booking',
    color: 'from-purple-400/20 to-violet-300/20',
    iconColor: 'text-purple-200',
    iconBg: 'bg-purple-300/20',
  },
];

export function RewardsBanner() {
  return (
    <section
      id="rewards"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#36A2FF] to-[#007BFF] relative overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,86,210,0.4),transparent_55%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — Text */}
          <div className="space-y-6 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
              <Gift className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">Loyalty Program</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Earn Rewards with
              <br />
              <span className="text-yellow-300">Every Visit</span>
            </h2>

            <p className="text-lg text-white/85 leading-relaxed max-w-md">
              Join our loyalty program and earn points on every booking. Redeem points for
              discounts, free services, and exclusive VIP perks.
            </p>

            {/* Mini stats */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-white/70 text-xs mt-0.5">Active Members</div>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-bold">৳2M+</div>
                <div className="text-white/70 text-xs mt-0.5">Rewards Redeemed</div>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-white/70 text-xs mt-0.5">Member Rating</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button variant="secondary" size="lg">
                Join Rewards Program
              </Button>
              <button className="px-7 py-3.5 rounded-xl font-semibold text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Right — Cards Grid (2×2, no collisions) */}
          <div className="grid grid-cols-2 gap-4">
            {REWARD_CARDS.map((card, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <span className={card.iconColor}>{card.icon}</span>
                </div>

                {/* Value */}
                <div className="text-2xl font-bold text-white mb-0.5">{card.value}</div>

                {/* Label */}
                <div className="text-sm font-semibold text-white/90 leading-snug">{card.label}</div>

                {/* Sub */}
                <div className="text-xs text-white/55 mt-0.5">{card.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
