import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function AccordionItem({ question, answer, isOpen, onToggle, id }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gold/15 bg-white">
      <h3>
        <button
          id={`faq-header-${id}`}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${id}`}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="font-body font-medium text-charcoal">{question}</span>
          <ChevronDown
            size={20}
            className={`shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-panel-${id}`}
            role="region"
            aria-labelledby={`faq-header-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-ink/65">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
