import { ArrowRight, Crown, PartyPopper, Sparkles, Gift } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { offers } from "../../data/offers";

const iconMap = { Crown, PartyPopper, Sparkles, Gift };

export default function OffersTeaser() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Special Offers"
          title="Book Your Special Day & Save"
          description="Seasonal combos and bundled savings across our most-loved services."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer, i) => {
            const Icon = iconMap[offer.icon];
            return (
              <Reveal key={offer.id} direction="up" delay={i * 0.1} className="h-full">
                <div className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-gold/15 bg-cream p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe-gold">
                  <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-wider text-gold-dark">
                    {offer.tag}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient text-charcoal shadow-luxe-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-charcoal">{offer.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-ink/65">{offer.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <Button to="/offers" variant="secondary" icon={ArrowRight}>
            See All Offers
          </Button>
        </div>
      </Container>
    </section>
  );
}
