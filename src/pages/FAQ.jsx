import { useState } from "react";
import SEO from "../components/ui/SEO";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import AccordionItem from "../components/faq/AccordionItem";
import { faqs, faqCategories } from "../data/faq";
import { whatsappLink } from "../data/siteConfig";

export default function FAQ() {
  const [category, setCategory] = useState("All");
  const [openId, setOpenId] = useState(0);

  const filtered = category === "All" ? faqs : faqs.filter((f) => f.category === category);

  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Answers to common questions about booking, pricing, services and policies at Anjali Makeup Studio."
        path="/faq"
      />

      <PageHero
        eyebrow="Got Questions?"
        title="Frequently Asked Questions"
        description="Everything you need to know before booking your appointment."
        crumb="FAQ"
      />

      <section className="bg-white py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="We're Here to Help" title="How Can We Help You?" />

          <Reveal direction="up" className="mt-10 flex flex-wrap justify-center gap-3">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setCategory(cat); setOpenId(0); }}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  category === cat
                    ? "bg-gold-gradient text-charcoal shadow-luxe-gold"
                    : "border border-gold/25 text-charcoal hover:bg-cream"
                }`}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          <div className="mt-10 flex flex-col gap-4">
            {filtered.map((faq, i) => (
              <Reveal key={faq.question} direction="up" delay={i * 0.05}>
                <AccordionItem
                  id={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openId === i}
                  onToggle={() => setOpenId(openId === i ? -1 : i)}
                />
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" className="mt-14 flex flex-col items-center gap-4 rounded-3xl bg-cream p-9 text-center">
            <p className="font-display text-xl font-semibold text-charcoal">Still have a question?</p>
            <p className="text-sm text-ink/60 max-w-sm">
              Send us a message on WhatsApp and we'll get back to you right away.
            </p>
            <Button href={whatsappLink("Hi! I have a question that wasn't in your FAQ.")}>
              Ask on WhatsApp
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
