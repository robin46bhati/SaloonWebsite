import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import PackageCard from "../membership/PackageCard";
import { bridalPackages } from "../../data/packages";

export default function BridalPackageTeaser() {
  return (
    <section className="relative overflow-hidden bg-charcoal-gradient py-20 sm:py-28">
      <div className="pointer-events-none absolute top-10 -left-20 h-72 w-72 rounded-full bg-gold/15 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gold/10 blur-[110px]" />

      <Container className="relative">
        <SectionHeading
          light
          eyebrow="For Your Big Day"
          title="Exclusive Bridal Packages"
          description="Everything you need for your wedding day, bundled into one seamless, indulgent experience."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {bridalPackages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} delay={i * 0.12} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button to="/membership" variant="secondary" icon={ArrowRight} className="!border-gold-light/50 !text-white hover:!bg-gold hover:!text-charcoal">
            Compare All Packages
          </Button>
        </div>
      </Container>
    </section>
  );
}
