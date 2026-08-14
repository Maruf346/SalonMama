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

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <OnboardingModal />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse-salons" element={<BrowseSalons />} />
          <Route path="/salon/:id" element={<SalonDetails />} />
          <Route path="/ai-style-finder" element={<AIStyleFinder />} />
          <Route path="/rewards" element={<Rewards />} />
        </Routes>
      </AnimatePresence>
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
