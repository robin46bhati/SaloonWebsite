import { useState } from "react";
import { Wand2, Sparkles, Droplet, Scissors } from "lucide-react";
import SEO from "../components/ui/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import CTASection from "../components/home/CTASection";
import { serviceCategories } from "../data/services";
import { whatsappLink } from "../data/siteConfig";

const iconMap = { Wand2, Sparkles, Droplet, Scissors };

export default function Pricing() {
  const [active, setActive] = useState("all");

  const visibleCategories =
    active === "all" ? serviceCategories : serviceCategories.filter((c) => c.id === active);

  return (
    <>
      <SEO
        title="Pricing"
        description="Transparent pricing for every service at Anjali Makeup Studio — makeup, facials, bleach, waxing and grooming. No hidden charges."
        path="/pricing"
      />

      <PageHero
        eyebrow="Transparent Pricing"
        title="Simple, Honest Pricing"
        description="No surprises — every service is listed with clear pricing, so you can plan your visit with confidence."
        crumb="Pricing"
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          {/* Filter tabs */}
          <Reveal direction="up" className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActive("all")}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === "all"
                  ? "bg-gold-gradient text-charcoal shadow-luxe-gold"
                  : "border border-gold/25 text-charcoal hover:bg-cream"
              }`}
            >
              All Services
            </button>
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active === cat.id
                    ? "bg-gold-gradient text-charcoal shadow-luxe-gold"
                    : "border border-gold/25 text-charcoal hover:bg-cream"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </Reveal>

          {/* Price tables */}
          <div className="mt-14 space-y-16">
            {visibleCategories.map((cat) => {
              const Icon = iconMap[cat.icon];
              return (
                <div key={cat.id}>
                  <Reveal direction="up" className="mb-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient text-charcoal shadow-luxe-gold">
                      <Icon size={20} />
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-charcoal">
                      {cat.title}
                    </h2>
                  </Reveal>

                  <div className="overflow-hidden rounded-3xl border border-gold/15 shadow-luxe">
                    {cat.items.map((item, i) => (
                      <Reveal
                        key={item.name}
                        direction="up"
                        delay={i * 0.04}
                        className={`flex flex-wrap items-center justify-between gap-3 px-6 py-5 sm:px-10 ${
                          i % 2 === 0 ? "bg-white" : "bg-cream"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="hidden h-1.5 w-1.5 rounded-full bg-gold sm:block" />
                          <div>
                            <p className="font-body font-medium text-charcoal">{item.name}</p>
                            {item.description && (
                              <p className="text-xs text-ink/50 mt-0.5 max-w-md">{item.description}</p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-display text-xl font-semibold text-gold-dark">
                            ₹{item.price.toLocaleString("en-IN")}
                          </span>
                          <a
                            href={whatsappLink(`Hi! I'd like to book: ${item.name}`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden text-xs font-medium text-charcoal underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-dark sm:inline"
                          >
                            Book
                          </a>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <Reveal direction="up" className="mt-16 flex flex-col items-center gap-5 text-center">
            <p className="max-w-lg text-sm text-ink/60">
              Prices may vary slightly based on specific requirements or add-ons —
              always confirmed with you before your appointment.
            </p>
            <Button href={whatsappLink("Hi! I have a question about pricing.")}>
              Ask About Pricing
            </Button>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
