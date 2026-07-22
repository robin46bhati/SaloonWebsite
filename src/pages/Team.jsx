import { InstagramIcon } from "../components/ui/SocialIcons";
import SEO from "../components/ui/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import CTASection from "../components/home/CTASection";
import { team } from "../data/team";
import { siteConfig } from "../data/siteConfig";

export default function Team() {
  return (
    <>
      <SEO
        title="Our Team"
        description="Meet the artists behind Anjali Makeup Studio — skilled in bridal makeup, hair styling and skincare."
        path="/team"
      />

      <PageHero
        eyebrow="Meet The Artists"
        title="The Hands Behind Every Look"
        description="A small, dedicated team focused on one thing: making you feel your most beautiful."
        crumb="Team"
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our People"
            title="Skilled, Warm & Detail-Obsessed"
            description="Every member of our studio is trained in hygiene-first practices and premium application techniques."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} direction="up" delay={i * 0.12} className="h-full">
                <article className="group flex h-full flex-col items-center gap-4 rounded-3xl bg-cream p-8 text-center shadow-luxe transition-all duration-500 hover:-translate-y-2">
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gold-gradient shadow-luxe-gold transition-transform duration-500 group-hover:scale-105">
                    <span className="font-display text-4xl font-semibold text-charcoal">
                      {member.initial}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-charcoal">{member.name}</h3>
                    <p className="mt-1 text-sm font-medium uppercase tracking-wider text-gold-dark">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-ink/65">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2 pt-2">
                    {member.specialties.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-gold/25 bg-white px-3 py-1 text-xs text-charcoal"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  {i === 0 && (
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex items-center gap-1.5 text-xs font-medium text-gold-dark hover:text-gold"
                    >
                      <InstagramIcon size={14} /> {siteConfig.social.instagramHandle}
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
