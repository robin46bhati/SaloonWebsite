import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Check, Phone } from "lucide-react";
import SEO from "../components/ui/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import ServiceCard from "../components/services/ServiceCard";
import { allServices, getServiceBySlug } from "../data/services";
import { whatsappLink, telLink } from "../data/siteConfig";

// Generic reassurances shown per category when an item has no bespoke
// highlight list of its own — keeps every detail page substantive.
const categoryHighlights = {
  "makeup-styling": [
    "Premium, skin-safe cosmetics matched to your tone",
    "Sanitized brushes & tools for every appointment",
    "Long-wear finish designed to photograph beautifully",
  ],
  "skin-grooming": [
    "Gentle, dermatologist-friendly products",
    "Customized to your skin type and concern",
    "Relaxing, hygienic treatment room",
  ],
  "bleach-detan": [
    "Quick, gentle brightening treatment",
    "Skin-friendly formula, suitable for sensitive skin",
    "Instant, even-toned glow",
  ],
  "waxing-grooming": [
    "Hygienic, single-use waxing strips",
    "Gentle on skin with smooth, long-lasting results",
    "Skilled, precise application",
  ],
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const { name, description, price, image, category, categoryId } = service;
  const highlights = categoryHighlights[categoryId] || [];
  const related = allServices.filter((s) => s.categoryId === categoryId && s.slug !== slug).slice(0, 3);

  return (
    <>
      <SEO
        title={name}
        description={`${description} Starting at ₹${price.toLocaleString("en-IN")} at Anjali Makeup Studio.`}
        path={`/services/${slug}`}
        image={image || undefined}
      />

      <PageHero eyebrow={category} title={name} crumb={name} />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Link
            to="/services"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-gold-dark transition-colors hover:text-gold"
          >
            <ArrowLeft size={16} /> Back to All Services
          </Link>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="left">
              <div className="overflow-hidden rounded-[2rem] shadow-luxe">
                {image ? (
                  <img
                    src={image}
                    alt={name}
                    className="h-[26rem] w-full object-cover object-top sm:h-[32rem]"
                  />
                ) : (
                  <div className="flex h-[26rem] w-full items-center justify-center bg-gradient-to-br from-cream to-gold/20 sm:h-[32rem]">
                    <span className="font-script text-6xl text-gold">A</span>
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal direction="right" className="flex flex-col gap-6">
              <span className="w-fit rounded-full bg-cream px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-gold-dark">
                {category}
              </span>
              <h1 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl">{name}</h1>
              <p className="text-base leading-relaxed text-ink/70">{description}</p>

              <div className="flex items-baseline gap-1">
                <span className="font-body text-lg text-ink/60">₹</span>
                <span className="font-display text-5xl font-semibold text-gold-dark">
                  {price.toLocaleString("en-IN")}
                </span>
              </div>

              {highlights.length > 0 && (
                <ul className="flex flex-col gap-3">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-ink/75">
                      <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-4 pt-2">
                <Button href={whatsappLink(`Hi! I'd like to book: ${name} (₹${price.toLocaleString("en-IN")}).`)}>
                  Book on WhatsApp
                </Button>
                <Button href={telLink} variant="secondary" icon={Phone}>
                  Call to Book
                </Button>
              </div>
              <p className="text-xs text-ink/45">
                Final pricing is confirmed at your appointment. Walk-ins welcome, subject to availability.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-cream py-16 sm:py-20">
          <Container>
            <SectionHeading eyebrow="You Might Also Like" title={`More From ${category}`} />
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s, i) => (
                <ServiceCard key={s.slug} service={s} delay={i * 0.1} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
