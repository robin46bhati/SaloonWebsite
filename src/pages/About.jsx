import { Sparkles, ShieldCheck, ThumbsUp, FlaskConical, Target, Eye, Heart } from "lucide-react";
import SEO from "../components/ui/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import CTASection from "../components/home/CTASection";
import { siteConfig } from "../data/siteConfig";

const iconMap = { Sparkles, ShieldCheck, ThumbsUp, FlaskConical };

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To make every client feel confident and radiant by delivering premium, hygienic makeup and skincare artistry — tailored to each face, each occasion, each story.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be the most trusted bridal & beauty studio in the region, known for craftsmanship, warmth, and beauty that feels authentically you.",
  },
  {
    icon: Heart,
    title: "Our Promise",
    text: "Premium products, sanitized tools, and undivided attention — every single visit, whether it's a big wedding day or a quick touch-up.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn the story behind Anjali Makeup Studio — our mission, vision, and why brides and clients across Faridabad trust us for their beauty needs."
        path="/about"
      />

      <PageHero
        eyebrow="Get to Know Us"
        title="The Story Behind Anjali Makeup Studio"
        description="A home-grown studio built on artistry, hygiene, and a genuine love for making people feel beautiful."
        crumb="About"
      />

      {/* Salon Story */}
      <section className="bg-white py-20 sm:py-28">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left" className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem] shadow-luxe">
              <img
                src="/images/gallery/bridal-royal-arch.jpg"
                alt="Bridal client posed in an ornate Rajasthani archway, styled by Anjali Makeup Studio"
                className="h-[28rem] w-full object-cover object-top sm:h-[36rem]"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Our Journey"
              title="Enhancing Beauty, Inspiring Confidence"
            />
            <div className="mt-6 space-y-4 text-ink/70 leading-relaxed">
              <p>
                {siteConfig.name} was founded by Anjali, a makeup artist whose passion for
                bridal artistry grew into a full studio serving {siteConfig.address.line2}
                and the surrounding villages. What started as a handful of bridal bookings
                has grown into a trusted destination for makeup, skincare and grooming.
              </p>
              <p>
                Every appointment at our studio is treated with the same care — whether
                it's a bride's most important morning or a quick facial before a family
                function. We believe great beauty work is equal parts skill, hygiene, and
                genuinely listening to what each client wants.
              </p>
              <p className="font-script text-3xl text-gold pt-2">
                {siteConfig.taglineHindi}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission / Vision / Promise */}
      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What Drives Us"
            title="Mission, Vision & Promise"
            description="The principles that shape every appointment, every product choice, and every finished look."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} direction="up" delay={i * 0.12} className="h-full">
                <div className="flex h-full flex-col gap-4 rounded-3xl bg-white p-8 text-center shadow-luxe">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-charcoal shadow-luxe-gold">
                    <p.icon size={24} />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-charcoal">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-ink/65">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Beauty You Can Trust"
            description="Four reasons brides and clients keep coming back to Anjali Makeup Studio."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.badges.map((badge, i) => {
              const Icon = iconMap[badge.icon];
              return (
                <Reveal key={badge.title} direction="up" delay={i * 0.1} className="h-full">
                  <div className="group flex h-full flex-col items-center gap-4 rounded-3xl border border-gold/15 p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe-gold">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream text-gold transition-transform duration-500 group-hover:scale-110 group-hover:bg-gold-gradient group-hover:text-charcoal">
                      <Icon size={26} />
                    </span>
                    <h3 className="font-display text-xl font-semibold text-charcoal">{badge.title}</h3>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
