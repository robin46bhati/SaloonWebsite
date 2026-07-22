import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import ServiceCard from "../services/ServiceCard";
import { featuredServices } from "../../data/services";

export default function ServicesPreview() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Offer"
          title="Signature Services, Crafted With Care"
          description="A glimpse of our most-loved treatments — explore the full menu of makeup, skin, waxing and grooming services."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service, i) => (
            <ServiceCard key={service.name} service={service} delay={i * 0.1} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button to="/services" variant="dark" icon={ArrowRight}>
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
