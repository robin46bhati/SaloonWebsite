import SEO from "../components/ui/SEO";
import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import BridalPackageTeaser from "../components/home/BridalPackageTeaser";
import GalleryPreview from "../components/home/GalleryPreview";
import OffersTeaser from "../components/home/OffersTeaser";
import TestimonialsPreview from "../components/home/TestimonialsPreview";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <SEO
        title="Premium Bridal & Party Makeup Studio"
        description="Anjali Makeup Studio offers premium bridal makeup, HD/airbrush makeup, facials, waxing and hair styling in Village Sahupura Khadar, Ballabgarh, Faridabad. Book your appointment today."
        path="/"
      />
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <BridalPackageTeaser />
      <GalleryPreview />
      <OffersTeaser />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
}
