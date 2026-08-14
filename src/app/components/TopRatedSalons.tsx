import { Link } from 'react-router';
import { SalonCard } from './SalonCard';
import { Reveal, Stagger, StaggerItem } from './motion';

export function TopRatedSalons() {
  const salons = [
    {
      id: 1,
      name: 'Glamour Studio',
      rating: 4.9,
      reviews: 234,
      location: 'Gulshan 2, Dhaka',
      price: 'à§³500',
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
      price: 'à§³400',
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
      price: 'à§³600',
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
      price: 'à§³450',
      services: ['Haircut', 'Facial', 'Massage'],
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1600948836587-02c1842c9140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white -mt-1">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E293B] mb-4">Top Rated Salons</h2>
          <p className="text-lg text-[#64748b]">Discover the best-rated salons in your area</p>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {salons.map((salon, index) => (
            <StaggerItem key={index}>
              <SalonCard {...salon} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="text-center mt-10">
          <Link to="/browse-salons" className="text-[#007BFF] font-medium hover:text-[#36A2FF] transition-colors">
            View All Salons →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
