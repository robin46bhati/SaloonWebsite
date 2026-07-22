import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import StatCounter from "../ui/StatCounter";
import { siteConfig, whatsappLink, telLink } from "../../data/siteConfig";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-charcoal">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/gallery/bridal-red-lehenga.jpg"
          alt="Bride in red bridal lehenga with traditional jewellery, makeup by Anjali Makeup Studio"
          className="h-full w-full object-cover object-top opacity-80"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-hero-scrim" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-transparent" />
      </div>

      {/* Ambient gold particles */}
      <div className="pointer-events-none absolute top-24 left-1/3 h-72 w-72 rounded-full bg-gold/20 blur-[110px] animate-float" />

      <Container className="relative z-10 pt-28 pb-20 sm:pt-32">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-block font-script text-4xl sm:text-5xl text-gold-light mb-2"
          >
            {siteConfig.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-semibold leading-[1.08] text-white text-balance"
          >
            Bridal Artistry That Makes You{" "}
            <span className="shimmer-text italic">Shine</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-white/75"
          >
            From HD bridal looks to premium facials, hair styling and grooming —
            {" "}{siteConfig.name} brings studio-grade artistry to every celebration,
            right here in {siteConfig.address.line2}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href={whatsappLink()} icon={ArrowRight} size="lg">
              Book Your Appointment
            </Button>
            <Button to="/services" variant="secondary" size="lg" className="!border-white/40 !text-white hover:!bg-white hover:!text-charcoal">
              Explore Services
            </Button>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            href={telLink}
            className="mt-6 inline-flex items-center gap-2 text-sm text-white/60 hover:text-gold-light transition-colors"
          >
            <Phone size={15} /> Call / WhatsApp {siteConfig.phoneDisplay}
          </motion.a>
        </div>

        {/* Stats strip — glassmorphism, used deliberately here */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-gold mt-16 grid grid-cols-2 gap-6 rounded-3xl px-6 py-7 sm:grid-cols-4 sm:px-10"
        >
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="font-display text-3xl sm:text-4xl font-semibold text-gold-light">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-xs sm:text-sm text-white/70 leading-snug">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="relative h-8 w-5 rounded-full border border-white/30">
          <span className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold animate-scrollDot" />
        </div>
      </div>
    </section>
  );
}
