import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { galleryImages } from "../../data/gallery";

export default function GalleryPreview() {
  const preview = galleryImages.slice(0, 6);

  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Portfolio"
          title="Moments We've Made Beautiful"
          description="A look inside our real bridal and party makeup transformations."
        />

        <div className="mt-14 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
          {preview.map((img, i) => (
            <Reveal key={img.src} direction="up" delay={i * 0.08} className="break-inside-avoid">
              <div className="group relative overflow-hidden rounded-2xl shadow-luxe">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="p-4 text-xs font-medium uppercase tracking-wider text-white">
                    {img.category}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button to="/gallery" variant="dark" icon={ArrowRight}>
            View Full Gallery
          </Button>
        </div>
      </Container>
    </section>
  );
}
