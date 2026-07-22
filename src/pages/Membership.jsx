import { ShieldCheck, Gem, Clock3, Sparkles } from "lucide-react";
import SEO from "../components/ui/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import PackageCard from "../components/membership/PackageCard";
import CTASection from "../components/home/CTASection";
import { bridalPackages } from "../data/packages";

const benefits = [
  { icon: Gem, title: "Complimentary Gifts", text: "Every package includes a bridal jewellery gift or bonus party makeup." },
  { icon: ShieldCheck, title: "Premium & Hygienic", text: "Sanitized tools and trusted, skin-safe cosmetic brands throughout." },
  { icon: Clock3, title: "Priority Scheduling", text: "Package bookings get priority slots on your wedding date." },
  { icon: Sparkles, title: "Complete Experience", text: "Makeup, hair, draping, waxing and facials — all in one seamless visit." },
];

export default function Membership() {
  return (
    <>
      <SEO
        title="Membership & Packages"
        description="Compare Anjali Makeup Studio's bridal packages — Exclusive, Premium HD/Airbrush, and Premium Global — each with complete inclusions and complimentary gifts."
        path="/membership"
      />

      <PageHero
        eyebrow="Bridal Packages"
        title="Choose Your Perfect Bridal Package"
        description="Three thoughtfully designed packages, each bundling makeup, hair, draping, waxing and facials into one seamless bridal experience."
        crumb="Membership"
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Compare Packages"
            title="Exclusive Bridal Packages"
            description="Every package includes a complimentary gift — choose the tier that matches your vision for the big day."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {bridalPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} delay={i * 0.12} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Package Benefits"
            title="Why Book a Package"
            description="Bundling your bridal services saves you time, money, and coordination stress."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} direction="up" delay={i * 0.1} className="h-full">
                <div className="flex h-full flex-col items-center gap-3 rounded-3xl bg-white p-7 text-center shadow-luxe">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient text-charcoal shadow-luxe-gold">
                    <b.icon size={20} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-charcoal">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-ink/60">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
