import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
}

const DEFAULT_TITLE = 'SalonMama | Best Salons in Dhaka & Instant Beauty Booking';
const DEFAULT_DESCRIPTION =
  'Discover and book top salons and beauty parlours in Dhaka (Gulshan, Banani, Dhanmondi, Uttara). Try our free AI Hairstyle Finder and get discounts on haircuts, facials, and hair spa.';
const DEFAULT_KEYWORDS =
  'salon in dhaka, best salon in gulshan, men salon dhaka, ladies parlour dhaka, haircut price in dhaka, beauty parlour banani, salon booking bangladesh, salon mama, hair color dhaka, bridal makeup dhaka, ai hairstyle finder';

export function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonicalPath,
}: SEOHeadProps) {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const fullTitle = title ? `${title} | SalonMama` : DEFAULT_TITLE;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Helper to set or create meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('description', description);
    setMetaTag('keywords', keywords);

    // Open Graph
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', `https://salonmama.com${currentPath}`, true);

    // Twitter
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://salonmama.com${currentPath}`);
  }, [fullTitle, description, keywords, currentPath]);

  return null;
}
