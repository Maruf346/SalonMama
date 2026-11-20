import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { OnboardingModal } from './components/OnboardingModal';
import { HomePage } from './pages/HomePage';
import { BrowseSalons } from './pages/BrowseSalons';
import { SalonDetails } from './pages/SalonDetails';
import { AIStyleFinder } from './pages/AIStyleFinder';
import { Rewards } from './pages/Rewards';
import { EditorialLookbook } from './pages/EditorialLookbook';
import { ForSalons } from './pages/ForSalons';
import { MyBookings } from './pages/MyBookings';
import { ContactConcierge } from './pages/ContactConcierge';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col justify-between selection:bg-[#007BFF] selection:text-white">
      <Navbar />
      <OnboardingModal />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/browse-salons" element={<BrowseSalons />} />
            <Route path="/salon/:id" element={<SalonDetails />} />
            <Route path="/ai-style-finder" element={<AIStyleFinder />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/lookbook" element={<EditorialLookbook />} />
            <Route path="/for-salons" element={<ForSalons />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/contact" element={<ContactConcierge />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
