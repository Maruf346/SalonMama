import { Link } from 'react-router';
import { SalonCard } from './SalonCard';

export function TopRatedSalons() {
  const salons = [
    {
      id: 1,
      name: 'Glamour Studio',
      rating: 4.9,
      reviews: 234,
      location: 'Gulshan 2, Dhaka',
      price: '৳500',
      services: ['Haircut', 'Facial', 'Spa'],
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 2,
      name: 'Elite Barber House',
      rating: 4.8,
      reviews: 189,
      location: 'Banani, Dhaka',
      price: '৳400',
      services: ['Haircut', 'Beard', 'Styling'],
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1776850476481-2bccba2e35c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 3,
      name: 'Royal Hair Lounge',
      rating: 4.7,
      reviews: 156,
      location: 'Dhanmondi, Dhaka',
      price: '৳600',
      services: ['Hair Color', 'Treatment', 'Styling'],
      isOpen: false,
      image: 'https://images.unsplash.com/photo-1600948835780-9c4a8b55cf50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 4,
      name: 'The Style Hub',
      rating: 4.9,
      reviews: 298,
      location: 'Uttara, Dhaka',
      price: '৳450',
      services: ['Haircut', 'Facial', 'Massage'],
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1600948836587-02c1842c9140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white -mt-1">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E293B] mb-4">Top Rated Salons</h2>
          <p className="text-lg text-[#64748b]">Discover the best-rated salons in your area</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {salons.map((salon, index) => (
            <SalonCard key={index} {...salon} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/browse-salons" className="text-[#007BFF] font-medium hover:text-[#36A2FF] transition-colors">
            View All Salons →
          </Link>
        </div>
      </div>
    </section>
  );
}
