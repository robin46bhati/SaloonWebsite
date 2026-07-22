import { Sparkles, ShieldCheck, ThumbsUp, FlaskConical, ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import { siteConfig } from "../../data/siteConfig";

const iconMap = { Sparkles, ShieldCheck, ThumbsUp, FlaskConical };

export default function AboutPreview() {
  return (
    <section className="relative bg-white py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image collage */}
        <Reveal direction="left" className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-md">
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img
                src="/images/gallery/bridal-maroon-lehenga.jpg"
                alt="Bride with traditional maroon lehenga and jewellery styled by Anjali Makeup Studio"
                className="h-[26rem] w-full object-cover object-top sm:h-[32rem]"
                loading="lazy"
                width={480}
                height={600}
              />
            </div>
            <div className="absolute -bottom-8 -left-6 w-40 rounded-2xl border-4 border-white shadow-luxe overflow-hidden sm:-left-10 sm:w-48">
              <img
                src="/images/gallery/party-glam-curls.jpg"
                alt="Party makeup client with soft curls, styled by Anjali Makeup Studio"
                className="h-32 w-full object-cover sm:h-40"
                loading="lazy"
                width={192}
                height={160}
              />
            </div>
            <div className="absolute -top-6 -right-4 flex h-24 w-24 items-center justify-center rounded-full bg-gold-gradient shadow-luxe-gold sm:h-28 sm:w-28">
              <span className="font-script text-2xl text-charcoal text-center leading-none sm:text-3xl">Est. 6+ yrs</span>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Our Story"
            title="Where Beauty Meets Perfection, One Bride at a Time"
            description={`${siteConfig.name} began with a simple belief: every celebration deserves artistry that feels personal. From our home studio in ${siteConfig.address.line2}, we've grown into a trusted name for bridal, party and everyday beauty — built on skill, hygiene and heart.`}
          />

          <div className="mt-8 grid grid-cols-2 gap-5">
            {siteConfig.badges.map((badge) => {
              const Icon = iconMap[badge.icon];
              return (
                <Reveal key={badge.title} direction="up" className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-gold">
                    <Icon size={18} />
                  </span>
                  <span className="font-body text-sm text-ink/80 leading-snug pt-2">{badge.title}</span>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-9">
            <Button to="/about" variant="dark" icon={ArrowRight}>
              More About Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
