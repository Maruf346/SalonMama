import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Ayesha Rahman',
      role: 'Regular Customer',
      rating: 5,
      text: 'The AI recommendation feature is amazing! It suggested a hairstyle that perfectly suits my face shape. Booking was super easy too.',
      avatar: 'AR',
    },
    {
      name: 'Mehedi Hassan',
      role: 'First-time User',
      rating: 5,
      text: 'Found the perfect salon near my office. The whole process from browsing to booking took less than 5 minutes. Highly recommended!',
      avatar: 'MH',
    },
    {
      name: 'Nusrat Jahan',
      role: 'Beauty Enthusiast',
      rating: 5,
      text: 'Love how I can see trending styles and book directly. The payment options are convenient for Bangladesh users. Great platform!',
      avatar: 'NJ',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E293B] mb-4">What Our Customers Say</h2>
          <p className="text-lg text-[#64748b]">Join thousands of satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-[#EAF6FF]/30 rounded-2xl p-8 border border-gray-200 hover:border-[#36A2FF]/50 hover:shadow-xl transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-[#36A2FF]/30 mb-4" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-[#1E293B] mb-6 leading-relaxed">"{testimonial.text}"</p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#36A2FF] to-[#007BFF] flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#1E293B]">{testimonial.name}</p>
                  <p className="text-sm text-[#64748b]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
