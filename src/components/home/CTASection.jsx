import { ArrowRight, Phone } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { siteConfig, whatsappLink, telLink } from "../../data/siteConfig";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 sm:py-24">
      <img
        src="/images/gallery/bridal-pink-nathni.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-top opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal/80" />

      <Container className="relative flex flex-col items-center gap-6 text-center">
        <Reveal direction="up">
          <span className="font-script text-4xl text-gold-light">{siteConfig.slogan}</span>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <h2 className="max-w-2xl font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white text-balance">
            Ready to Book Your Special Day &amp; Shine Tomorrow?
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <p className="max-w-xl text-white/70">
            Walk-ins welcome. Call, WhatsApp or visit us in {siteConfig.address.line2} to reserve your slot.
          </p>
        </Reveal>
        <Reveal direction="up" delay={0.3} className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <Button href={whatsappLink()} icon={ArrowRight} size="lg">
            Book on WhatsApp
          </Button>
          <Button href={telLink} variant="secondary" icon={Phone} size="lg" className="!border-white/40 !text-white hover:!bg-white hover:!text-charcoal">
            Call Now
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
