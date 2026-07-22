import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../ui/Reveal";

export default function ServiceCard({ service, delay = 0 }) {
  const { name, description, price, image, category, slug } = service;

  return (
    <Reveal direction="up" delay={delay} className="h-full">
      <Link
        to={`/services/${slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-luxe transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_-15px_rgba(31,31,31,0.35)]"
      >
        <div className="relative h-56 overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cream to-gold/20">
              <span className="font-script text-4xl text-gold">A</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
          {category && (
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-charcoal">
              {category}
            </span>
          )}
          <span className="absolute bottom-4 right-4 rounded-full bg-gold-gradient px-4 py-1.5 font-display text-lg font-semibold text-charcoal shadow-luxe-gold">
            ₹{price.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-6">
          <h3 className="font-display text-2xl font-semibold text-charcoal">{name}</h3>
          <p className="flex-1 text-sm leading-relaxed text-ink/65">{description}</p>
          <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark transition-colors group-hover:text-gold">
            View Details &amp; Book
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
