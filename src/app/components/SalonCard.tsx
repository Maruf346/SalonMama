import { Link } from 'react-router';
import { Star, MapPin, Clock } from 'lucide-react';
import { Button } from './Button';

interface SalonCardProps {
  id?: number;
  name: string;
  rating: number;
  reviews: number;
  location: string;
  price: string;
  services: string[];
  isOpen: boolean;
  image?: string;
}

export function SalonCard({ id = 1, name, rating, reviews, location, price, services, isOpen, image }: SalonCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#36A2FF]/50 hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 bg-gradient-to-br from-[#EAF6FF] to-[#36A2FF]/20 overflow-hidden">
        {image ? (
          <>
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[#64748b]">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-2 text-[#36A2FF]" />
              <p className="text-sm">Salon Image</p>
            </div>
          </div>
        )}

        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
            isOpen
              ? 'bg-green-100/90 text-green-700'
              : 'bg-red-100/90 text-red-700'
          }`}>
            {isOpen ? 'Open' : 'Closed'}
          </span>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div>
          <h3 className="font-semibold text-lg text-[#1E293B] mb-2">{name}</h3>

          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-[#1E293B]">{rating}</span>
              <span className="text-sm text-[#64748b]">({reviews} reviews)</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-[#64748b]">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {services.map((service, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-[#EAF6FF] text-[#007BFF] text-xs"
            >
              {service}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-[#64748b]">Starting from</p>
            <p className="text-lg font-semibold text-[#007BFF]">{price}</p>
          </div>
          <Link to={`/salon/${id}`}>
            <Button variant="primary" size="sm">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
