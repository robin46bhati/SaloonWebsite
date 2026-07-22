import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import TestimonialCard from "../testimonials/TestimonialCard";
import { testimonials } from "../../data/testimonials";

export default function TestimonialsPreview() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Kind Words"
          title="Loved By Our Clients"
          description="Real experiences from brides and clients who trusted us with their special moments."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {featured.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} delay={i * 0.12} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button to="/testimonials" variant="secondary" icon={ArrowRight}>
            Read All Testimonials
          </Button>
        </div>
      </Container>
    </section>
  );
}
