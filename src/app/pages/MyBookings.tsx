import { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle,
  QrCode,
  Download,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Heart,
  Star,
  ExternalLink,
  Phone,
  Trash2,
} from 'lucide-react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  MotionPage,
  Reveal,
  Stagger,
  StaggerItem,
  TiltCard,
  Magnetic,
  AnimatedTabPill,
} from '../components/motion';
import { Button } from '../components/Button';
import { BookingModal } from '../components/BookingModal';

interface Appointment {
  id: string;
  salonName: string;
  salonArea: string;
  service: string;
  stylist: string;
  date: string;
  time: string;
  price: string;
  status: 'confirmed' | 'completed' | 'cancelled';
  image: string;
  bookingCode: string;
}

export function MyBookings() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'history' | 'saved'>('upcoming');
  const [selectedBooking, setSelectedBooking] = useState<Appointment | null>(null);
  const [showQRModal, setShowQRModal] = useState<Appointment | null>(null);
  const [isRebookOpen, setIsRebookOpen] = useState(false);
  const [rebookSalon, setRebookSalon] = useState('Glamour Studio');
  const [cancelToast, setCancelToast] = useState(false);

  // Mock appointments
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 'SM-8849',
      salonName: 'Glamour Studio',
      salonArea: 'House 45, Road 12, Gulshan 2',
      service: 'Korean Two-Block & Scalp Treatment',
      stylist: 'Ahmed Rahman (Senior Stylist)',
      date: 'Tomorrow, Nov 21',
      time: '03:30 PM',
      price: '৳1,200',
      status: 'confirmed',
      image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      bookingCode: 'QR-GLM-9924',
    },
    {
      id: 'SM-7412',
      salonName: 'Elite Barber House',
      salonArea: 'Road 11, Banani',
      service: 'Executive Fade & Beard Sculpt',
      stylist: 'Mehedi Hasan',
      date: 'Nov 12, 2026',
      time: '05:00 PM',
      price: '৳850',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1776850476481-2bccba2e35c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      bookingCode: 'QR-ELT-4122',
    },
    {
      id: 'SM-6520',
      salonName: 'Royal Hair Lounge',
      salonArea: 'Satmasjid Road, Dhanmondi',
      service: 'Balayage Color Melt & Blowout',
      stylist: 'Farzana Arman',
      date: 'Oct 28, 2026',
      time: '11:00 AM',
      price: '৳4,500',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1600948835780-9c4a8b55cf50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      bookingCode: 'QR-RYL-8120',
    },
  ]);

  const [savedItems, setSavedItems] = useState([
    {
      id: 1,
      name: 'Glamour Studio',
      area: 'Gulshan 2, Dhaka',
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1695527081874-b674c46f40fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      price: '৳500',
    },
    {
      id: 2,
      name: 'The Style Hub',
      area: 'Uttara Sector 7',
      rating: 4.9,
      reviews: 298,
      image: 'https://images.unsplash.com/photo-1600948836587-02c1842c9140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      price: '৳450',
    },
  ]);

  const upcomingList = appointments.filter((a) => a.status === 'confirmed');
  const pastList = appointments.filter((a) => a.status === 'completed' || a.status === 'cancelled');

  const handleCancel = (id: string) => {
    setAppointments((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: 'cancelled' as const } : app))
    );
    setCancelToast(true);
    setTimeout(() => setCancelToast(false), 3000);
  };

  const handleRebook = (salon: string) => {
    setRebookSalon(salon);
    setIsRebookOpen(true);
  };

  return (
    <MotionPage className="min-h-screen bg-[#fafbfc] pt-16">
      {/* Client Header */}
      <section className="bg-gradient-to-r from-[#007BFF] via-[#1689FF] to-[#005ECE] text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.15),transparent_40%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                SalonMama VIP Client Pass
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                My Appointments & Studio Pass
              </h1>
              <p className="text-white/80 text-sm max-w-md">
                Manage upcoming salon appointments, scannable QR passes, and instant re-bookings.
              </p>
            </div>

            {/* VIP Card badge */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-5 flex items-center gap-4 text-white">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center font-bold text-slate-900 shadow-md">
                VIP
              </div>
              <div>
                <p className="text-xs text-white/70">Membership Status</p>
                <p className="text-base font-bold">Silver Tier (750 pts)</p>
                <Link
                  to="/rewards"
                  className="text-xs text-yellow-300 hover:underline flex items-center gap-0.5 mt-0.5"
                >
                  View Rewards & Free Perks <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Pill Tabs with animated layoutId */}
          <div className="mt-8 flex items-center gap-3">
            {[
              { id: 'upcoming', label: `Upcoming (${upcomingList.length})` },
              { id: 'history', label: `Past Visits (${pastList.length})` },
              { id: 'saved', label: `Saved Studios (${savedItems.length})` },
            ].map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors cursor-pointer z-10 ${
                    active ? 'text-[#007BFF]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {active && (
                    <AnimatedTabPill
                      layoutId="clientNavPill"
                      className="bg-white shadow-md shadow-blue-900/20"
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Tab Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Cancel Toast */}
        <AnimatePresence>
          {cancelToast && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-sm flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                <span>Appointment cancelled. Your payment has been credited to points.</span>
              </div>
              <button
                onClick={() => setCancelToast(false)}
                className="text-xs font-semibold text-amber-900 underline"
              >
                Dismiss
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tab 1: UPCOMING */}
        {activeTab === 'upcoming' && (
          <div className="space-y-6">
            {upcomingList.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-50 text-[#007BFF] flex items-center justify-center mx-auto">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a]">No Upcoming Appointments</h3>
                <p className="text-sm text-[#64748b] max-w-sm mx-auto">
                  Ready for a fresh look? Discover Dhaka’s top-rated studios or try our AI Style
                  Finder.
                </p>
                <div className="pt-2">
                  <Link to="/browse-salons">
                    <Button variant="primary">Browse Salons</Button>
                  </Link>
                </div>
              </div>
            ) : (
              upcomingList.map((app) => (
                <TiltCard key={app.id} maxTilt={4} className="w-full">
                  <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_rgba(0,123,255,0.08)] transition-all">
                    {/* VIP Header banner */}
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 sm:px-6 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="font-semibold tracking-wide">CONFIRMED PASS #{app.id}</span>
                      </div>
                      <span className="text-white/70">Check-in via scannable QR</span>
                    </div>

                    <div className="p-6 sm:p-8 grid md:grid-cols-12 gap-6 items-center">
                      {/* Left: Studio image & quick details */}
                      <div className="md:col-span-8 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                        <img
                          src={app.image}
                          alt={app.salonName}
                          className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shrink-0 shadow-sm"
                        />
                        <div className="space-y-2">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#007BFF] text-xs font-semibold">
                            {app.service}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                            {app.salonName}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#64748b]">
                            <span className="flex items-center gap-1 font-medium text-[#1E293B]">
                              <Calendar className="w-3.5 h-3.5 text-[#007BFF]" />
                              {app.date} at {app.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-[#64748b]" />
                              {app.salonArea}
                            </span>
                          </div>
                          <p className="text-xs text-[#94a3b8]">Stylist: {app.stylist}</p>
                        </div>
                      </div>

                      {/* Right: Actions & QR Pass Button */}
                      <div className="md:col-span-4 flex flex-col gap-2.5 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-gray-100 md:pl-6">
                        <button
                          onClick={() => setShowQRModal(app)}
                          className="w-full py-3 rounded-xl bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-200 hover:shadow-lg transition-all"
                        >
                          <QrCode className="w-4 h-4" />
                          Show Digital Check-in Pass
                        </button>

                        <div className="grid grid-cols-2 gap-2">
                          <a
                            href={`https://maps.google.com/?q=${encodeURIComponent(
                              app.salonName + ' ' + app.salonArea
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                            className="py-2.5 px-3 rounded-xl border border-gray-200 hover:bg-gray-50 text-[#1E293B] font-medium text-xs flex items-center justify-center gap-1 transition-colors"
                          >
                            <MapPin className="w-3.5 h-3.5 text-[#007BFF]" />
                            Directions
                          </a>
                          <button
                            onClick={() => handleCancel(app.id)}
                            className="py-2.5 px-3 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 font-medium text-xs flex items-center justify-center gap-1 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              ))
            )}
          </div>
        )}

        {/* Tab 2: HISTORY */}
        {activeTab === 'history' && (
          <div className="space-y-4">
            {pastList.map((app) => (
              <div
                key={app.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={app.image}
                    alt={app.salonName}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-base text-[#0f172a]">{app.salonName}</h4>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                          app.status === 'completed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {app.status === 'completed' ? 'Completed' : 'Cancelled'}
                      </span>
                    </div>
                    <p className="text-xs text-[#64748b] mt-0.5">
                      {app.service} • {app.date} • {app.price}
                    </p>
                    <p className="text-xs text-[#94a3b8]">Handled by {app.stylist}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => handleRebook(app.salonName)}
                    className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#007BFF] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Rebook Look
                  </button>
                  <button
                    onClick={() => alert(`Downloading official VAT invoice receipt for #${app.id}`)}
                    className="px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs flex items-center justify-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Receipt
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: SAVED STUDIOS */}
        {activeTab === 'saved' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedItems.map((salon) => (
              <div
                key={salon.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={salon.image} alt={salon.name} className="w-full h-full object-cover" />
                  <button
                    onClick={() => setSavedItems((prev) => prev.filter((s) => s.id !== salon.id))}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-red-500 shadow-sm"
                  >
                    <Heart className="w-4 h-4 fill-red-500" />
                  </button>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-lg text-[#0f172a]">{salon.name}</h4>
                    <span className="flex items-center gap-1 text-xs font-semibold text-slate-800">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      {salon.rating}
                    </span>
                  </div>
                  <p className="text-xs text-[#64748b] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {salon.area}
                  </p>
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-[#94a3b8]">From {salon.price}</span>
                    <Link to={`/salon/${salon.id}`}>
                      <Button variant="primary" size="sm">
                        View & Book
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Scannable Digital QR Pass Modal */}
      <AnimatePresence>
        {showQRModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setShowQRModal(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="relative max-w-sm w-full bg-white rounded-3xl shadow-2xl p-6 z-10 text-center space-y-5"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified Appointment Pass
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0f172a]">{showQRModal.salonName}</h3>
                <p className="text-xs text-[#64748b] mt-0.5">{showQRModal.service}</p>
                <p className="text-sm font-semibold text-[#007BFF] mt-1">
                  {showQRModal.date} • {showQRModal.time}
                </p>
              </div>

              {/* High fidelity scannable barcode/QR visual */}
              <div className="bg-[#f8fafc] border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <div className="w-44 h-44 bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
                  {/* Generated QR pattern */}
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full text-slate-900 fill-current"
                  >
                    <rect x="10" y="10" width="25" height="25" rx="3" />
                    <rect x="15" y="15" width="15" height="15" fill="white" />
                    <rect x="18" y="18" width="9" height="9" />
                    <rect x="65" y="10" width="25" height="25" rx="3" />
                    <rect x="70" y="15" width="15" height="15" fill="white" />
                    <rect x="73" y="18" width="9" height="9" />
                    <rect x="10" y="65" width="25" height="25" rx="3" />
                    <rect x="15" y="70" width="15" height="15" fill="white" />
                    <rect x="18" y="73" width="9" height="9" />
                    <rect x="42" y="12" width="16" height="8" />
                    <rect x="42" y="26" width="8" height="14" />
                    <rect x="54" y="32" width="6" height="8" />
                    <rect x="14" y="42" width="8" height="14" />
                    <rect x="28" y="46" width="14" height="6" />
                    <rect x="46" y="46" width="10" height="10" />
                    <rect x="62" y="42" width="16" height="8" />
                    <rect x="82" y="46" width="6" height="14" />
                    <rect x="42" y="66" width="14" height="8" />
                    <rect x="62" y="62" width="10" height="14" />
                    <rect x="78" y="68" width="10" height="10" />
                    <rect x="46" y="80" width="16" height="8" />
                    <rect x="68" y="82" width="18" height="6" />
                  </svg>
                </div>
                <span className="text-xs font-mono text-gray-500 mt-3 font-semibold">
                  {showQRModal.bookingCode}
                </span>
                <span className="text-[11px] text-gray-400 mt-0.5">
                  Scan at front-desk tablet for VIP check-in
                </span>
              </div>

              <div className="pt-2">
                <Button variant="outline" className="w-full" onClick={() => setShowQRModal(null)}>
                  Close Pass
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Rebook Modal */}
      <BookingModal
        isOpen={isRebookOpen}
        onClose={() => setIsRebookOpen(false)}
        salonName={rebookSalon}
      />
    </MotionPage>
  );
}
