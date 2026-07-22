import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import Button from "../ui/Button";
import { siteConfig } from "../../data/siteConfig";

const services = [
  "Bridal Makeup",
  "HD / Airbrush Makeup",
  "Party Makeup",
  "Engagement Makeup",
  "Facial Treatment",
  "Waxing & Grooming",
  "Bridal Package",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: services[0], message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi ${siteConfig.name}! I'd like to enquire.
Name: ${form.name}
Phone: ${form.phone}
Interested In: ${form.service}
Message: ${form.message || "—"}`;

    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-cream p-10 text-center h-full">
        <CheckCircle2 size={44} className="text-gold" />
        <h3 className="font-display text-2xl font-semibold text-charcoal">Thank You!</h3>
        <p className="text-sm text-ink/65 max-w-xs">
          Your enquiry has been prepared on WhatsApp — just hit send there and
          we'll get back to you shortly.
        </p>
        <Button variant="secondary" onClick={() => setSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-charcoal">
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-charcoal">
            Phone Number <span className="text-gold">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            pattern="[0-9+\s-]{7,15}"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className="rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="text-sm font-medium text-charcoal">
          Interested In
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className="rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
        >
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-charcoal">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your event or requirements..."
          className="resize-none rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
        />
      </div>

      <Button type="submit" icon={Send} className="w-full sm:w-fit">
        Send Enquiry via WhatsApp
      </Button>
      <p className="text-xs text-ink/45">
        This form opens WhatsApp with your details pre-filled — no data is stored on our servers.
      </p>
    </form>
  );
}
