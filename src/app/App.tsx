import { BrowserRouter, Routes, Route } from 'react-router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { OnboardingModal } from './components/OnboardingModal';
import { HomePage } from './pages/HomePage';
import { BrowseSalons } from './pages/BrowseSalons';
import { SalonDetails } from './pages/SalonDetails';
import { AIStyleFinder } from './pages/AIStyleFinder';
import { Rewards } from './pages/Rewards';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <OnboardingModal />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse-salons" element={<BrowseSalons />} />
          <Route path="/salon/:id" element={<SalonDetails />} />
          <Route path="/ai-style-finder" element={<AIStyleFinder />} />
          <Route path="/rewards" element={<Rewards />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}