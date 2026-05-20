import { Search, Sparkles, Calendar } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Browse & Discover',
      description: 'Explore salons in your area and discover trending hairstyles',
      color: 'from-[#36A2FF] to-[#007BFF]',
    },
    {
      icon: Sparkles,
      title: 'AI Recommendations',
      description: 'Upload your photo to get personalized AI-powered style suggestions',
      color: 'from-[#007BFF] to-[#0056D2]',
    },
    {
      icon: Calendar,
      title: 'Book Instantly',
      description: 'Choose your stylist, select a time slot, and confirm your appointment',
      color: 'from-[#0056D2] to-[#003D99]',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#EAF6FF]/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E293B] mb-4">How It Works</h2>
          <p className="text-lg text-[#64748b]">Get your perfect look in 3 simple steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#36A2FF]/50 hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-br from-[#36A2FF] to-[#007BFF] flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-semibold text-[#1E293B] mb-3">{step.title}</h3>
                  <p className="text-[#64748b] leading-relaxed">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#36A2FF] to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
