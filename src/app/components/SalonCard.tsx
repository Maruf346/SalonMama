import { Link } from 'react-router';
import { Star, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './Button';
import { TiltCard } from './motion';

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

export function SalonCard({
  id = 1,
  name,
  rating,
  reviews,
  location,
  price,
  services,
  isOpen,
  image,
}: SalonCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-blue-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,123,255,0.09)] transition-all duration-300 flex flex-col justify-between h-full"
    >
      <div>
        {/* Image header */}
        <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden">
          {image ? (
            <>
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-[#64748b]">
              <Clock className="w-10 h-10 text-[#36A2FF]" />
            </div>
          )}

          {/* Status badge */}
          <div className="absolute top-3 right-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-sm ${
                isOpen
                  ? 'bg-emerald-500/90 text-white'
                  : 'bg-rose-500/90 text-white'
              }`}
            >
              {isOpen ? 'Open Now' : 'Closed'}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 text-white flex items-center gap-1.5 text-xs font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
            Verified Studio
          </div>
        </div>

        {/* Info */}
        <div className="p-5 space-y-3">
          <div>
            <h3 className="font-bold text-lg text-[#0f172a] group-hover:text-[#007BFF] transition-colors line-clamp-1">
              {name}
            </h3>

            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-xs text-[#0f172a]">{rating}</span>
                <span className="text-xs text-[#94a3b8]">({reviews})</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1 text-xs text-[#64748b] truncate">
                <MapPin className="w-3.5 h-3.5 shrink-0 text-[#007BFF]" />
                <span className="truncate">{location}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {services.slice(0, 3).map((service, index) => (
              <span
                key={index}
                className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#007BFF] text-[11px] font-semibold"
              >
                {service}
              </span>
            ))}
            {services.length > 3 && (
              <span className="px-2 py-1 rounded-lg bg-gray-100 text-gray-600 text-[11px] font-medium">
                +{services.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer action */}
      <div className="p-5 pt-0">
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-[#94a3b8] font-medium">From</p>
            <p className="text-base font-extrabold text-[#007BFF]">{price}</p>
          </div>
          <Link to={`/salon/${id}`}>
            <Button variant="primary" size="sm" className="shadow-sm shadow-blue-200">
              View & Book
              <ArrowRight className="ml-1 w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
