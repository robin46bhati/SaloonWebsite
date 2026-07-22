import SEO from "../components/ui/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import TestimonialCard from "../components/testimonials/TestimonialCard";
import CTASection from "../components/home/CTASection";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <>
      <SEO
        title="Testimonials"
        description="Read what clients say about their bridal and party makeup experience at Anjali Makeup Studio."
        path="/testimonials"
      />

      <PageHero
        eyebrow="Kind Words"
        title="Loved By Our Clients"
        description="Every review reflects the trust our clients place in us for their most special days."
        crumb="Testimonials"
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Client Stories"
            title="What Our Clients Say"
          />

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} delay={(i % 3) * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
