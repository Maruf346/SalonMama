import { HeroSection } from '../components/HeroSection';
import { TopRatedSalons } from '../components/TopRatedSalons';
import { TrendingHairstyles } from '../components/TrendingHairstyles';
import { AIFeatureShowcase } from '../components/AIFeatureShowcase';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { RewardsBanner } from '../components/RewardsBanner';
import { DownloadAppCTA } from '../components/DownloadAppCTA';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TopRatedSalons />
      <TrendingHairstyles />
      <AIFeatureShowcase />
      <HowItWorks />
      <Testimonials />
      <RewardsBanner />
      <DownloadAppCTA />
    </>
  );
}
