import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Container from "./Container";
import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, description, crumb }) {
  return (
    <section className="relative overflow-hidden bg-charcoal-gradient pt-32 pb-20 sm:pt-40 sm:pb-24">
      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-gold/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-gold/10 blur-[90px]" />

      <Container className="relative flex flex-col items-center text-center gap-4">
        <Reveal direction="up">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs sm:text-sm text-white/60 font-body mb-2">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gold-light">{crumb}</span>
          </nav>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <span className="font-script text-3xl sm:text-4xl text-gold-light">{eyebrow}</span>
        </Reveal>
        <Reveal direction="up" delay={0.15}>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white text-balance">
            {title}
          </h1>
        </Reveal>
        <Reveal direction="up" delay={0.2} className="gold-divider">
          <span className="text-lg">✦</span>
        </Reveal>
        {description && (
          <Reveal direction="up" delay={0.25}>
            <p className="max-w-2xl text-white/70 text-base sm:text-lg leading-relaxed">
              {description}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
