import { Home as HomeIcon, Sparkles } from "lucide-react";
import SEO from "../components/ui/SEO";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to Anjali Makeup Studio's homepage."
        path="/404"
      />
      <section className="relative flex min-h-[90svh] items-center overflow-hidden bg-charcoal-gradient">
        <div className="pointer-events-none absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-gold/15 blur-[110px] animate-float" />
        <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-gold/10 blur-[110px]" />

        <Container className="relative flex flex-col items-center gap-6 py-24 text-center">
          <Reveal direction="scale">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-gradient text-charcoal shadow-luxe-gold">
              <Sparkles size={32} />
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="font-script text-5xl text-gold-light">Oops!</p>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <h1 className="font-display text-6xl sm:text-8xl font-semibold text-white">404</h1>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <p className="max-w-md text-white/70">
              This page seems to have wandered off before its touch-up. Let's get
              you back to somewhere beautiful.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.4}>
            <Button to="/" icon={HomeIcon}>Back to Home</Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
