import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Check, Gift, Crown, Phone } from "lucide-react";
import SEO from "../components/ui/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import PackageCard from "../components/membership/PackageCard";
import { bridalPackages } from "../data/packages";
import { whatsappLink, telLink } from "../data/siteConfig";

export default function PackageDetail() {
  const { id } = useParams();
  const pkg = bridalPackages.find((p) => p.id === id);

  if (!pkg) return <Navigate to="/membership" replace />;

  const { name, price, tagline, includes, gift, popular } = pkg;
  const others = bridalPackages.filter((p) => p.id !== id);

  return (
    <>
      <SEO
        title={name}
        description={`${tagline} Starting at ₹${price.toLocaleString("en-IN")} at Anjali Makeup Studio.`}
        path={`/membership/${id}`}
      />

      <PageHero eyebrow="Bridal Package" title={name} crumb={name} />

      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <Link
            to="/membership"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-gold-dark transition-colors hover:text-gold"
          >
            <ArrowLeft size={16} /> Back to All Packages
          </Link>

          <Reveal direction="up" className={`rounded-3xl p-8 sm:p-12 ${popular ? "bg-charcoal-gradient text-white" : "bg-cream"}`}>
            {popular && (
              <span className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal">
                <Crown size={14} /> Most Popular
              </span>
            )}
            <p className={`text-sm sm:text-base ${popular ? "text-white/70" : "text-ink/60"}`}>{tagline}</p>

            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-body text-lg">₹</span>
              <span className={`font-display text-5xl font-semibold ${popular ? "text-gold-light" : "text-charcoal"}`}>
                {price.toLocaleString("en-IN")}
              </span>
            </div>

            <div className={`my-8 h-px w-full ${popular ? "bg-white/10" : "bg-charcoal/10"}`} />

            <h2 className={`mb-4 font-display text-xl font-semibold ${popular ? "text-white" : "text-charcoal"}`}>
              What's Included
            </h2>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed">
                  <Check size={16} className={`mt-0.5 shrink-0 ${popular ? "text-gold-light" : "text-gold"}`} />
                  <span className={popular ? "text-white/85" : "text-ink/75"}>{item}</span>
                </li>
              ))}
            </ul>

            <div className={`mt-8 flex items-start gap-2.5 rounded-2xl p-5 text-sm leading-relaxed ${popular ? "bg-white/10 text-gold-light" : "bg-white text-gold-dark"}`}>
              <Gift size={18} className="mt-0.5 shrink-0" />
              <span>{gift}</span>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button
                href={whatsappLink(`Hi! I'm interested in the ${name} (₹${price.toLocaleString("en-IN")}).`)}
                variant={popular ? "primary" : "dark"}
              >
                Book This Package
              </Button>
              <Button
                href={telLink}
                variant="secondary"
                icon={Phone}
                className={popular ? "!border-white/40 !text-white hover:!bg-white hover:!text-charcoal" : ""}
              >
                Call to Book
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {others.length > 0 && (
        <section className="bg-cream py-16 sm:py-20">
          <Container>
            <SectionHeading eyebrow="Compare" title="Other Bridal Packages" />
            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {others.map((p, i) => (
                <PackageCard key={p.id} pkg={p} delay={i * 0.1} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
