import { Gift, Star, Award } from 'lucide-react';
import { Button } from './Button';

export function RewardsBanner() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#36A2FF] to-[#007BFF] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
              <Gift className="w-4 h-4" />
              <span className="text-sm font-medium">Loyalty Program</span>
            </div>

            <h2 className="text-4xl font-bold">
              Earn Rewards with Every Visit
            </h2>

            <p className="text-lg text-white/90 leading-relaxed">
              Join our loyalty program and earn points on every booking. Redeem points for
              discounts, free services, and exclusive perks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg">
                Join Rewards Program
              </Button>
              <button className="px-8 py-4 rounded-xl font-medium text-white border-2 border-white/30 hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Star className="w-10 h-10 text-yellow-300 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">1000+</h3>
              <p className="text-white/80">Points Earned</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mt-8">
              <Award className="w-10 h-10 text-yellow-300 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">50%</h3>
              <p className="text-white/80">Max Discount</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 -mt-8">
              <Gift className="w-10 h-10 text-yellow-300 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
              <p className="text-white/80">Monthly Perks</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-4">🎁</div>
              <h3 className="text-2xl font-bold text-white mb-2">VIP</h3>
              <p className="text-white/80">Member Access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
