import { Link } from "react-router-dom";

/**
 * Text-based logo lockup (rather than a raster image) so it stays crisp
 * at every size and can adapt color to light or dark backgrounds.
 */
export default function Logo({ light = false, className = "" }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 group ${className}`}>
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
          light
            ? "border-gold-light/60 text-gold-light"
            : "border-gold text-gold"
        }`}
      >
        <span className="font-display italic text-xl">A</span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-script text-3xl sm:text-[2.2rem] leading-none ${
            light ? "text-white" : "text-charcoal"
          }`}
        >
          Anjali
        </span>
        <span
          className={`font-body text-[0.6rem] sm:text-xs tracking-[0.35em] uppercase mt-0.5 ${
            light ? "text-gold-light" : "text-gold-dark"
          }`}
        >
          Makeup Studio
        </span>
      </span>
    </Link>
  );
}
