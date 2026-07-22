import { Check, Gift, Crown } from "lucide-react";
import { whatsappLink } from "../../data/siteConfig";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";

export default function PackageCard({ pkg, delay = 0 }) {
  const { name, price, tagline, includes, gift, popular } = pkg;

  return (
    <Reveal direction="up" delay={delay} className="h-full">
      <article
        className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
          popular
            ? "bg-charcoal-gradient text-white shadow-luxe-gold scale-[1.02] lg:scale-105"
            : "bg-white text-ink shadow-luxe"
        }`}
      >
        {popular && (
          <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gold-gradient px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal shadow-luxe-gold">
            <Crown size={14} /> Most Popular
          </span>
        )}

        <h3 className={`font-display text-2xl font-semibold ${popular ? "text-white" : "text-charcoal"}`}>
          {name}
        </h3>
        <p className={`mt-2 text-sm leading-relaxed ${popular ? "text-white/65" : "text-ink/60"}`}>
          {tagline}
        </p>

        <div className="mt-6 flex items-baseline gap-1">
          <span className="font-body text-lg">₹</span>
          <span className={`font-display text-5xl font-semibold ${popular ? "text-gold-light" : "text-charcoal"}`}>
            {price.toLocaleString("en-IN")}
          </span>
        </div>

        <div className={`my-6 h-px w-full ${popular ? "bg-white/10" : "bg-charcoal/10"}`} />

        <ul className="flex-1 space-y-3">
          {includes.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed">
              <Check size={16} className={`mt-0.5 shrink-0 ${popular ? "text-gold-light" : "text-gold"}`} />
              <span className={popular ? "text-white/85" : "text-ink/75"}>{item}</span>
            </li>
          ))}
        </ul>

        <div
          className={`mt-6 flex items-start gap-2.5 rounded-2xl p-4 text-xs leading-relaxed ${
            popular ? "bg-white/10 text-gold-light" : "bg-cream text-gold-dark"
          }`}
        >
          <Gift size={16} className="mt-0.5 shrink-0" />
          <span>{gift}</span>
        </div>

        <Button
          href={whatsappLink(`Hi! I'm interested in the ${name} (₹${price.toLocaleString("en-IN")}).`)}
          variant={popular ? "primary" : "dark"}
          className="mt-7 w-full"
        >
          Book This Package
        </Button>
      </article>
    </Reveal>
  );
}
