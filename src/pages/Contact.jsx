import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "../components/ui/SocialIcons";
import SEO from "../components/ui/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import ContactForm from "../components/contact/ContactForm";
import { siteConfig, telLink } from "../data/siteConfig";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [siteConfig.address.line1, `${siteConfig.address.line2}, ${siteConfig.address.state} – ${siteConfig.address.pincode}`],
  },
  {
    icon: Phone,
    title: "Call / WhatsApp",
    lines: [siteConfig.phoneDisplay],
    href: telLink,
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [siteConfig.email],
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: siteConfig.hours.map((h) => `${h.day}: ${h.time}`),
  },
];

export default function Contact() {
  const mapQuery = encodeURIComponent(siteConfig.address.full);

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Anjali Makeup Studio — call, WhatsApp, or visit us in Village Sahupura Khadar, Ballabgarh, Faridabad. Walk-ins welcome."
        path="/contact"
      />

      <PageHero
        eyebrow="Let's Talk"
        title="Book Your Appointment Today"
        description="Walk-ins welcome, or reach out ahead of time — we'd love to help you plan your look."
        crumb="Contact"
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, i) => {
              const Wrapper = card.href ? "a" : "div";
              return (
                <Reveal key={card.title} direction="up" delay={i * 0.08} className="h-full">
                  <Wrapper
                    {...(card.href ? { href: card.href } : {})}
                    className="flex h-full flex-col items-center gap-3 rounded-3xl bg-cream p-7 text-center shadow-luxe transition-all duration-300 hover:-translate-y-1.5 hover:shadow-luxe-gold"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient text-charcoal shadow-luxe-gold">
                      <card.icon size={20} />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-charcoal">{card.title}</h3>
                    <div className="text-sm text-ink/65 leading-relaxed">
                      {card.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </Wrapper>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
            {/* Form */}
            <Reveal direction="left" className="lg:col-span-3">
              <div className="rounded-3xl bg-white p-8 shadow-luxe sm:p-10">
                <SectionHeading
                  align="left"
                  eyebrow="Send an Enquiry"
                  title="We'd Love to Hear From You"
                />
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            {/* Map + Social */}
            <Reveal direction="right" className="lg:col-span-2 flex flex-col gap-6">
              <div className="overflow-hidden rounded-3xl shadow-luxe">
                <iframe
                  title="Anjali Makeup Studio location map"
                  src={`https://maps.google.com/maps?q=${mapQuery}&z=14&output=embed`}
                  className="h-72 w-full border-0 sm:h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="rounded-3xl bg-charcoal-gradient p-7 text-center">
                <p className="font-script text-2xl text-gold-light mb-3">Follow Our Journey</p>
                <div className="flex items-center justify-center gap-3">
                  <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:border-gold hover:text-gold transition-colors">
                    <InstagramIcon size={17} />
                  </a>
                  <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:border-gold hover:text-gold transition-colors">
                    <FacebookIcon size={17} />
                  </a>
                  <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:border-gold hover:text-gold transition-colors">
                    <YoutubeIcon size={17} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
