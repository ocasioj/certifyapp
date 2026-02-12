import HeroSection from "@/components/home/HeroSection";
import ProviderGrid from "@/components/home/ProviderGrid";
import FeaturedCertifications from "@/components/home/FeaturedCertifications";
import StatsSection from "@/components/home/StatsSection";
import { getProviders, getAllCertifications, getFeaturedCertifications } from "@/lib/data";

export default function HomePage() {
  const providers = getProviders();
  const allCerts = getAllCertifications();
  const featuredCerts = getFeaturedCertifications();

  return (
    <>
      <HeroSection
        totalCerts={allCerts.length}
        totalProviders={providers.length}
      />
      <ProviderGrid providers={providers} />
      <FeaturedCertifications certifications={featuredCerts} />
      <StatsSection />
    </>
  );
}
