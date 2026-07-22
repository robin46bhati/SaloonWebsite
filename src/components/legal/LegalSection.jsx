import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function LegalSection({ title, children }) {
  return (
    <Reveal direction="up" as="section" className="border-b border-charcoal/10 py-8 last:border-0">
      <h2 className="font-display text-2xl font-semibold text-charcoal mb-3">{title}</h2>
      <div className="prose-sm space-y-3 text-sm sm:text-base leading-relaxed text-ink/70">
        {children}
      </div>
    </Reveal>
  );
}

export function LegalWrapper({ children, lastUpdated }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="max-w-3xl">
        <p className="mb-8 text-sm text-ink/50">Last updated: {lastUpdated}</p>
        {children}
      </Container>
    </section>
  );
}
