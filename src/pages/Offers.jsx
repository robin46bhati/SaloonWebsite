import { Crown, PartyPopper, Sparkles, Gift, ArrowRight } from "lucide-react";
import SEO from "../components/ui/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import CTASection from "../components/home/CTASection";
import { offers } from "../data/offers";
import { whatsappLink } from "../data/siteConfig";

const iconMap = { Crown, PartyPopper, Sparkles, Gift };

export default function Offers() {
  return (
    <>
      <SEO
        title="Offers & Promotions"
        description="Current offers at Anjali Makeup Studio — bridal package savings, party makeup combos, facial + cleanup bundles, and referral discounts."
        path="/offers"
      />

      <PageHero
        eyebrow="Limited Time"
        title="Special Offers Just For You"
        description="Because you deserve the best — explore our current combos and savings across bridal, party and skincare services."
        crumb="Offers"
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Book Your Special Day"
            title="Today & Shine Tomorrow"
          />

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {offers.map((offer, i) => {
              const Icon = iconMap[offer.icon];
              return (
                <Reveal key={offer.id} direction="up" delay={i * 0.1} className="h-full">
                  <div className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-gold/15 bg-cream p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe-gold sm:p-10">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl transition-all duration-500 group-hover:bg-gold/20" />
                    <div className="relative flex items-center justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-charcoal shadow-luxe-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <Icon size={24} />
                      </span>
                      <span className="rounded-full bg-white px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gold-dark">
                        {offer.tag}
                      </span>
                    </div>
                    <h3 className="relative font-display text-2xl font-semibold text-charcoal">
                      {offer.title}
                    </h3>
                    <p className="relative flex-1 text-sm leading-relaxed text-ink/65">
                      {offer.description}
                    </p>
                    <a
                      href={whatsappLink(`Hi! I'm interested in the offer: ${offer.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark hover:text-gold"
                    >
                      Claim This Offer <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal direction="up" className="mt-16 flex flex-col items-center gap-5 rounded-3xl bg-charcoal-gradient p-10 text-center sm:p-14">
            <span className="font-script text-3xl text-gold-light">Refer & Get Special Discount</span>
            <p className="max-w-lg text-white/70 text-sm sm:text-base">
              Know someone getting married or planning a celebration? Refer them to
              Anjali Makeup Studio and you both receive a special discount on your
              next visit.
            </p>
            <Button href={whatsappLink("Hi! I'd like to refer a friend and ask about the discount.")}>
              Ask About Referral Discount
            </Button>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
