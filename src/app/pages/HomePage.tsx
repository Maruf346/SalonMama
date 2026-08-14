import { HeroSection } from '../components/HeroSection';
import { TopRatedSalons } from '../components/TopRatedSalons';
import { TrendingHairstyles } from '../components/TrendingHairstyles';
import { AIFeatureShowcase } from '../components/AIFeatureShowcase';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { RewardsBanner } from '../components/RewardsBanner';
import { DownloadAppCTA } from '../components/DownloadAppCTA';
import { MotionPage, Reveal } from '../components/motion';

export function HomePage() {
  return (
    <MotionPage>
      <HeroSection />
      <Reveal>
        <TopRatedSalons />
      </Reveal>
      <Reveal>
        <TrendingHairstyles />
      </Reveal>
      <Reveal>
        <AIFeatureShowcase />
      </Reveal>
      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <RewardsBanner />
      </Reveal>
      <Reveal>
        <DownloadAppCTA />
      </Reveal>
    </MotionPage>
  );
}
