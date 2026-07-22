import { Quote } from "lucide-react";
import RatingStars from "../ui/RatingStars";
import Reveal from "../ui/Reveal";

export default function TestimonialCard({ testimonial, delay = 0 }) {
  const { name, event, rating, quote } = testimonial;

  return (
    <Reveal direction="up" delay={delay} className="h-full">
      <article className="relative flex h-full flex-col gap-5 rounded-3xl bg-white p-8 shadow-luxe transition-all duration-500 hover:-translate-y-1.5">
        <Quote className="text-gold/25" size={36} />
        <p className="flex-1 font-body text-[0.95rem] leading-relaxed text-ink/75 italic">
          "{quote}"
        </p>
        <RatingStars rating={rating} />
        <div className="flex items-center gap-3 pt-2">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient font-display text-lg font-semibold text-charcoal">
            {name.charAt(0)}
          </span>
          <div>
            <p className="font-body text-sm font-medium text-charcoal">{name}</p>
            <p className="text-xs text-ink/50">{event}</p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
