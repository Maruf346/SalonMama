import { useState } from 'react';
import { useParams } from 'react-router';
import {
  Star,
  MapPin,
  Clock,
  Phone,
  Globe,
  Heart,
  Share2,
  CheckCircle,
  Award,
  Sparkles,
} from 'lucide-react';
import { Button } from '../components/Button';
import { BookingModal } from '../components/BookingModal';

export function SalonDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('services');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Mock salon data
  const salon = {
    id: 1,
    name: 'Glamour Studio',
    tagline: 'Where Style Meets Excellence',
    rating: 4.9,
    reviews: 234,
    location: 'House 45, Road 12, Gulshan 2, Dhaka 1212',
    area: 'Gulshan',
    phone: '+880 1700-123456',
    website: 'www.glamourstudio.bd',
    hours: 'Mon - Sun: 9:00 AM - 9:00 PM',
    about:
      'Glamour Studio is Dhaka\'s premier luxury salon offering world-class hair and beauty services. With over 10 years of experience, our team of expert stylists is dedicated to bringing out your natural beauty with personalized treatments and the latest techniques.',
    coverImage: 'https://images.unsplash.com/photo-1695527081874-b674c46f40fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    features: [
      'Premium Quality Products',
      'Expert Certified Stylists',
      'Hygienic Environment',
      'Modern Equipment',
      'Complimentary Refreshments',
      'Free Parking Available',
    ],
  };

  const services = [
    {
      category: 'Haircut & Styling',
      items: [
        { name: 'Men\'s Haircut', price: '৳500', duration: '45 min' },
        { name: 'Women\'s Haircut', price: '৳800', duration: '1 hour' },
        { name: 'Kids Haircut', price: '৳400', duration: '30 min' },
        { name: 'Hair Styling', price: '৳600', duration: '45 min' },
      ],
    },
    {
      category: 'Hair Color & Treatment',
      items: [
        { name: 'Full Hair Color', price: '৳2500', duration: '2-3 hours' },
        { name: 'Highlights', price: '৳3000', duration: '2-3 hours' },
        { name: 'Keratin Treatment', price: '৳4000', duration: '3 hours' },
        { name: 'Hair Spa', price: '৳1500', duration: '1.5 hours' },
      ],
    },
    {
      category: 'Facial & Skin Care',
      items: [
        { name: 'Classic Facial', price: '৳1200', duration: '1 hour' },
        { name: 'Deep Cleansing Facial', price: '৳1800', duration: '1.5 hours' },
        { name: 'Anti-Aging Facial', price: '৳2500', duration: '1.5 hours' },
        { name: 'Acne Treatment', price: '৳2000', duration: '1 hour' },
      ],
    },
    {
      category: 'Spa & Massage',
      items: [
        { name: 'Head Massage', price: '৳800', duration: '30 min' },
        { name: 'Full Body Massage', price: '৳3000', duration: '1.5 hours' },
        { name: 'Foot Spa', price: '৳1000', duration: '45 min' },
        { name: 'Manicure & Pedicure', price: '৳1500', duration: '1.5 hours' },
      ],
    },
  ];

  const stylists = [
    {
      id: 1,
      name: 'Ahmed Rahman',
      role: 'Senior Hair Stylist',
      experience: '10+ years',
      specialty: 'Men\'s Haircuts, Beard Styling',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1598524374912-6b0b0bab43dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      id: 2,
      name: 'Fatima Khan',
      role: 'Color Specialist',
      experience: '8+ years',
      specialty: 'Hair Coloring, Highlights',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1578390432942-d323db577792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      id: 3,
      name: 'Mehedi Hasan',
      role: 'Master Barber',
      experience: '12+ years',
      specialty: 'Classic Cuts, Hot Shaves',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1553521041-d168abd31de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
    {
      id: 4,
      name: 'Nadia Islam',
      role: 'Beauty Specialist',
      experience: '6+ years',
      specialty: 'Facials, Skin Care',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1605497787865-e6d4762b386f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    'https://images.unsplash.com/photo-1614438865362-9137f7e3036e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    'https://images.unsplash.com/photo-1706629505300-168aa1604912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    'https://images.unsplash.com/photo-1675034743339-0b0747047727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    'https://images.unsplash.com/photo-1760862652442-e8ff7ebdd2f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  ];

  const reviews = [
    {
      id: 1,
      name: 'Ayesha Rahman',
      rating: 5,
      date: 'May 10, 2026',
      comment: 'Absolutely amazing experience! Ahmed did a fantastic job with my haircut. The atmosphere is so professional and welcoming. Will definitely come back!',
      service: 'Haircut & Styling',
    },
    {
      id: 2,
      name: 'Karim Hassan',
      rating: 5,
      date: 'May 8, 2026',
      comment: 'Best barber in Dhaka! Mehedi is a true master of his craft. The hot towel shave was incredibly relaxing. Highly recommended!',
      service: 'Hot Shave',
    },
    {
      id: 3,
      name: 'Nusrat Jahan',
      rating: 4,
      date: 'May 5, 2026',
      comment: 'Great service and very clean facility. Fatima did an excellent job with my hair color. The only downside was the wait time, but it was worth it!',
      service: 'Hair Color',
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white via-[#EAF6FF]/10 to-white">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden">
          <img
            src={salon.coverImage}
            alt={salon.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          {/* Salon Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h1 className="text-4xl sm:text-5xl font-bold mb-2">{salon.name}</h1>
                  <p className="text-xl text-white/90 mb-4">{salon.tagline}</p>

                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{salon.rating}</span>
                      <span className="text-white/80">({salon.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span>{salon.area}, Dhaka</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{salon.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Heart className="w-6 h-6" />
                  </button>
                  <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-gradient-to-br from-white to-[#EAF6FF]/20 rounded-2xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-[#1E293B] mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-[#007BFF]" />
                  About {salon.name}
                </h2>
                <p className="text-[#64748b] leading-relaxed">{salon.about}</p>
              </div>

              {/* Tabs */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="flex border-b border-gray-200 overflow-x-auto">
                  {['services', 'stylists', 'gallery', 'reviews'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                        activeTab === tab
                          ? 'bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white'
                          : 'text-[#64748b] hover:text-[#1E293B]'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  {/* Services Tab */}
                  {activeTab === 'services' && (
                    <div className="space-y-6">
                      {services.map((category, idx) => (
                        <div key={idx}>
                          <h3 className="text-xl font-bold text-[#1E293B] mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-[#007BFF]" />
                            {category.category}
                          </h3>
                          <div className="space-y-3">
                            {category.items.map((item, itemIdx) => (
                              <div
                                key={itemIdx}
                                className="flex items-center justify-between p-4 bg-gradient-to-r from-[#EAF6FF]/50 to-white rounded-xl border border-gray-100 hover:border-[#36A2FF]/50 transition-all group"
                              >
                                <div>
                                  <h4 className="font-semibold text-[#1E293B] group-hover:text-[#007BFF] transition-colors">
                                    {item.name}
                                  </h4>
                                  <p className="text-sm text-[#64748b] mt-1">
                                    <Clock className="w-3 h-3 inline mr-1" />
                                    {item.duration}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="text-xl font-bold text-[#007BFF]">{item.price}</p>
                                  <Button
                                    variant="primary"
                                    size="sm"
                                    className="mt-2"
                                    onClick={() => setIsBookingOpen(true)}
                                  >
                                    Book Now
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stylists Tab */}
                  {activeTab === 'stylists' && (
                    <div className="grid sm:grid-cols-2 gap-6">
                      {stylists.map((stylist) => (
                        <div
                          key={stylist.id}
                          className="bg-gradient-to-br from-white to-[#EAF6FF]/30 rounded-2xl p-6 border border-gray-200 hover:border-[#36A2FF]/50 hover:shadow-xl transition-all"
                        >
                          <div className="flex items-start gap-4">
                            <img
                              src={stylist.image}
                              alt={stylist.name}
                              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-bold text-lg text-[#1E293B]">{stylist.name}</h4>
                              <p className="text-[#007BFF] font-medium text-sm">{stylist.role}</p>
                              <div className="flex items-center gap-1 mt-2">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-semibold">{stylist.rating}</span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                            <p className="text-sm">
                              <Award className="w-4 h-4 inline text-[#007BFF] mr-2" />
                              <span className="text-[#64748b]">Experience:</span>{' '}
                              <span className="font-medium text-[#1E293B]">{stylist.experience}</span>
                            </p>
                            <p className="text-sm">
                              <CheckCircle className="w-4 h-4 inline text-[#007BFF] mr-2" />
                              <span className="text-[#64748b]">Specialty:</span>{' '}
                              <span className="font-medium text-[#1E293B]">{stylist.specialty}</span>
                            </p>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full mt-4"
                            onClick={() => setIsBookingOpen(true)}
                          >
                            Book with {stylist.name.split(' ')[0]}
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Gallery Tab */}
                  {activeTab === 'gallery' && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {gallery.map((image, idx) => (
                        <div
                          key={idx}
                          className="aspect-square rounded-xl overflow-hidden border-2 border-gray-200 hover:border-[#36A2FF] transition-all cursor-pointer group"
                        >
                          <img
                            src={image}
                            alt={`Gallery ${idx + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Reviews Tab */}
                  {activeTab === 'reviews' && (
                    <div className="space-y-4">
                      {reviews.map((review) => (
                        <div
                          key={review.id}
                          className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#36A2FF]/50 transition-all"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-[#1E293B]">{review.name}</h4>
                              <p className="text-sm text-[#64748b]">{review.date}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-[#1E293B] leading-relaxed mb-3">{review.comment}</p>
                          <span className="inline-block px-3 py-1 bg-[#EAF6FF] text-[#007BFF] rounded-full text-sm">
                            {review.service}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Book Now Card */}
              <div className="bg-gradient-to-br from-[#36A2FF] to-[#007BFF] rounded-2xl p-6 text-white shadow-xl sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
                <p className="text-white/90 mb-6">
                  Experience premium salon services with our expert team
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full shadow-lg"
                  onClick={() => setIsBookingOpen(true)}
                >
                  Book Appointment
                </Button>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-[#1E293B] mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#007BFF] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#1E293B]">Address</p>
                      <p className="text-sm text-[#64748b]">{salon.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#007BFF] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#1E293B]">Phone</p>
                      <p className="text-sm text-[#64748b]">{salon.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#007BFF] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#1E293B]">Website</p>
                      <p className="text-sm text-[#64748b]">{salon.website}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#007BFF] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#1E293B]">Hours</p>
                      <p className="text-sm text-[#64748b]">{salon.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-gradient-to-br from-white to-[#EAF6FF]/30 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-[#1E293B] mb-4">Why Choose Us</h3>
                <div className="space-y-3">
                  {salon.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#007BFF] flex-shrink-0" />
                      <span className="text-[#1E293B]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Book Now Button (Mobile) */}
      <div className="fixed bottom-6 right-6 lg:hidden z-40">
        <button
          onClick={() => setIsBookingOpen(true)}
          className="px-6 py-4 bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white rounded-full shadow-2xl font-semibold flex items-center gap-2 hover:scale-105 transition-transform animate-float"
        >
          <Sparkles className="w-5 h-5" />
          Book Now
        </button>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        salonName={salon.name}
      />
    </>
  );
}
