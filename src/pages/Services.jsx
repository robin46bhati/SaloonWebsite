import { Wand2, Sparkles, Droplet, Scissors } from "lucide-react";
import SEO from "../components/ui/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import ServiceCard from "../components/services/ServiceCard";
import CTASection from "../components/home/CTASection";
import { serviceCategories, premiumFacials } from "../data/services";

const iconMap = { Wand2, Sparkles, Droplet, Scissors };

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services"
        description="Explore Anjali Makeup Studio's full service menu — bridal & HD makeup, facials, bleach & D-tan, waxing, threading and grooming, with transparent pricing."
        path="/services"
      />

      <PageHero
        eyebrow="Our Menu"
        title="Services Crafted for Every Occasion"
        description="From bridal transformations to everyday grooming — browse our complete, transparently priced service menu."
        crumb="Services"
      />

      {/* Category navigation - visual anchor list */}
      <section className="bg-white py-14">
        <Container>
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((cat) => {
              const Icon = iconMap[cat.icon];
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="flex items-center gap-2 rounded-full border border-gold/25 bg-cream px-5 py-2.5 text-sm font-medium text-charcoal transition-all duration-300 hover:bg-gold hover:text-white hover:-translate-y-0.5"
                >
                  <Icon size={16} />
                  {cat.title}
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Makeup & Styling — with rich cards (has images) */}
      <section id="makeup-styling" className="scroll-mt-24 bg-cream py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Signature"
            title="Makeup & Styling"
            description={serviceCategories[0].description}
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories[0].items.map((item, i) => (
              <ServiceCard key={item.name} service={item} delay={i * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* Premium Facial Treatments spotlight */}
      <section id="skin-grooming" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Glow Up"
            title="Premium Facial Treatments"
            description="Skin & Grooming — facials and cleansing rituals, priced individually below."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {premiumFacials.map((f, i) => (
              <Reveal key={f.name} direction="up" delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-gold/15 p-6 transition-all duration-300 hover:shadow-luxe hover:-translate-y-1">
                  <span className="font-display text-xl font-semibold text-charcoal">{f.name}</span>
                  <p className="text-sm leading-relaxed text-ink/60">{f.tagline}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Price table for this category */}
          <div className="mt-14 overflow-hidden rounded-3xl border border-gold/15 shadow-luxe">
            {serviceCategories[1].items.map((item, i) => (
              <div
                key={item.name}
                className={`flex items-center justify-between gap-4 px-6 py-4 sm:px-10 ${
                  i % 2 === 0 ? "bg-white" : "bg-cream"
                }`}
              >
                <div>
                  <p className="font-body font-medium text-charcoal">{item.name}</p>
                  <p className="text-xs text-ink/50 mt-0.5">{item.description}</p>
                </div>
                <span className="font-display text-xl font-semibold text-gold-dark shrink-0">
                  ₹{item.price.toLocaleString("en-IN")}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bleach & D-Tan + Waxing — simple price list layout */}
      {serviceCategories.slice(2).map((cat, idx) => {
        const Icon = iconMap[cat.icon];
        return (
          <section
            key={cat.id}
            id={cat.id}
            className={`scroll-mt-24 py-16 sm:py-20 ${idx % 2 === 0 ? "bg-cream" : "bg-white"}`}
          >
            <Container>
              <SectionHeading eyebrow="" title={cat.title} description={cat.description} />
              <div className="mt-12 mx-auto max-w-3xl overflow-hidden rounded-3xl border border-gold/15 shadow-luxe">
                {cat.items.map((item, i) => (
                  <Reveal
                    key={item.name}
                    direction="up"
                    delay={i * 0.06}
                    className={`flex items-center justify-between gap-4 px-6 py-5 sm:px-10 ${
                      i % 2 === 0 ? "bg-white" : "bg-cream"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} className="text-gold shrink-0" />
                      <div>
                        <p className="font-body font-medium text-charcoal">{item.name}</p>
                        <p className="text-xs text-ink/50 mt-0.5">{item.description}</p>
                      </div>
                    </div>
                    <span className="font-display text-xl font-semibold text-gold-dark shrink-0">
                      ₹{item.price.toLocaleString("en-IN")}
                    </span>
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
