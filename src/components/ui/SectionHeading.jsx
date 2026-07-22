import Reveal from "./Reveal";

/**
 * Standard section header used across every page: a small script eyebrow,
 * a serif heading, the signature gold-divider motif, and an optional
 * supporting description. Keeps heading hierarchy + spacing consistent.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  as = "h2",
}) {
  const Tag = as;
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal direction="up" className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <span
          className={`font-script text-3xl sm:text-4xl leading-none ${
            light ? "text-gold-light" : "text-gold"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <Tag
        className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-balance leading-[1.15] ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </Tag>
      <div className={`gold-divider w-full ${align === "center" ? "" : "!justify-start"}`}>
        <span className="text-lg">✦</span>
      </div>
      {description && (
        <p className={`font-body text-base sm:text-lg leading-relaxed ${light ? "text-white/75" : "text-ink/70"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
