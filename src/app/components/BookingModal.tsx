import { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CreditCard } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Button } from './Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  salonName: string;
}

export function BookingModal({ isOpen, onClose, salonName }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedStylist, setSelectedStylist] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    { id: '1', name: 'Haircut', price: '৳500', duration: '45 min' },
    { id: '2', name: 'Beard Trim', price: '৳300', duration: '30 min' },
    { id: '3', name: 'Hair Color', price: '৳2000', duration: '2 hours' },
    { id: '4', name: 'Facial', price: '৳1500', duration: '1 hour' },
  ];

  const stylists = [
    { id: '1', name: 'Ahmed Rahman', expertise: 'Senior Stylist' },
    { id: '2', name: 'Fatima Khan', expertise: 'Color Specialist' },
    { id: '3', name: 'Mehedi Hasan', expertise: 'Master Barber' },
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.99 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#36A2FF] to-[#007BFF] text-white p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Book Appointment</h2>
              <p className="text-white/90 mt-1">{salonName}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center gap-4 mt-6">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                    step >= s ? 'bg-white text-[#007BFF]' : 'bg-white/30 text-white'
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div className={`h-1 flex-1 rounded ${step > s ? 'bg-white' : 'bg-white/30'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="p-6">
          {/* Step 1: Select Service */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4">Select Service</h3>
              <div className="space-y-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                      selectedService === service.id
                        ? 'border-[#36A2FF] bg-[#EAF6FF]'
                        : 'border-gray-200 hover:border-[#36A2FF]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-[#1E293B]">{service.name}</p>
                        <p className="text-sm text-[#64748b]">{service.duration}</p>
                      </div>
                      <p className="text-lg font-bold text-[#007BFF]">{service.price}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Stylist & Time */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#1E293B] mb-4">Select Stylist</h3>
                <div className="grid grid-cols-3 gap-3">
                  {stylists.map((stylist) => (
                    <button
                      key={stylist.id}
                      onClick={() => setSelectedStylist(stylist.id)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedStylist === stylist.id
                          ? 'border-[#36A2FF] bg-[#EAF6FF]'
                          : 'border-gray-200 hover:border-[#36A2FF]/50'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#36A2FF] to-[#007BFF] mx-auto mb-2" />
                      <p className="text-sm font-semibold text-[#1E293B] text-center">{stylist.name}</p>
                      <p className="text-xs text-[#64748b] text-center mt-1">{stylist.expertise}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#1E293B] mb-4">Select Date & Time</h3>
                <div className="space-y-3">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#36A2FF] focus:ring-2 focus:ring-[#36A2FF]/20 outline-none"
                  />
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedTime === time
                            ? 'bg-[#007BFF] text-white'
                            : 'bg-gray-100 text-[#1E293B] hover:bg-[#EAF6FF]'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Customer Details */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4">Your Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#36A2FF] focus:ring-2 focus:ring-[#36A2FF]/20 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+880 1XXX-XXXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#36A2FF] focus:ring-2 focus:ring-[#36A2FF]/20 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#36A2FF] focus:ring-2 focus:ring-[#36A2FF]/20 outline-none"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="mt-6 p-4 bg-[#EAF6FF] rounded-xl">
                <h4 className="font-semibold text-[#1E293B] mb-3">Booking Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#64748b]">Service:</span>
                    <span className="font-medium text-[#1E293B]">Haircut</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748b]">Date & Time:</span>
                    <span className="font-medium text-[#1E293B]">{selectedDate} at {selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748b]">Stylist:</span>
                    <span className="font-medium text-[#1E293B]">Ahmed Rahman</span>
                  </div>
                  <div className="border-t border-[#007BFF]/20 pt-2 mt-2 flex justify-between">
                    <span className="font-semibold text-[#1E293B]">Total:</span>
                    <span className="font-bold text-[#007BFF]">৳500</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 rounded-b-3xl">
          <div className="flex gap-3">
            {step > 1 && (
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                className="flex-1"
              >
                Back
              </Button>
            )}
            {step < 3 ? (
              <Button
                variant="primary"
                onClick={() => setStep(step + 1)}
                className="flex-1"
                disabled={
                  (step === 1 && !selectedService) ||
                  (step === 2 && (!selectedStylist || !selectedDate || !selectedTime))
                }
              >
                Continue
              </Button>
            ) : (
              <Button variant="primary" className="flex-1">
                <CreditCard className="w-4 h-4 mr-2" />
                Confirm & Pay
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
      )}
    </AnimatePresence>
  );
}
