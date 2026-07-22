import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SEO from "../components/ui/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import Reveal from "../components/ui/Reveal";
import CTASection from "../components/home/CTASection";
import { galleryImages, galleryCategories } from "../data/gallery";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered =
    filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  const openLightbox = (img) => {
    setActiveIndex(galleryImages.findIndex((g) => g.src === img.src));
  };
  const closeLightbox = () => setActiveIndex(null);
  const showNext = () => setActiveIndex((i) => (i + 1) % galleryImages.length);
  const showPrev = () => setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <>
      <SEO
        title="Gallery"
        description="Browse real bridal and party makeup transformations by Anjali Makeup Studio — a portfolio of our recent work."
        path="/gallery"
      />

      <PageHero
        eyebrow="Our Portfolio"
        title="Real Transformations, Real Brides"
        description="Every look here was created in our studio — browse bridal and party makeup from recent celebrations."
        crumb="Gallery"
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          {/* Filters */}
          <Reveal direction="up" className="flex flex-wrap justify-center gap-3">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-gold-gradient text-charcoal shadow-luxe-gold"
                    : "border border-gold/25 text-charcoal hover:bg-cream"
                }`}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          {/* Masonry grid */}
          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {filtered.map((img, i) => (
              <Reveal key={img.src} direction="up" delay={(i % 6) * 0.06} className="break-inside-avoid">
                <button
                  onClick={() => openLightbox(img)}
                  className="group relative block w-full overflow-hidden rounded-2xl shadow-luxe focus-visible:outline-none"
                  aria-label={`View larger image: ${img.alt}`}
                >
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
                </button>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              aria-label="Close preview"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10"
            >
              <X size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              aria-label="Previous image"
              className="absolute left-3 sm:left-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              aria-label="Next image"
              className="absolute right-3 sm:right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10"
            >
              <ChevronRight size={22} />
            </button>

            <motion.img
              key={galleryImages[activeIndex].src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-luxe"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </>
  );
}
