import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../../data/siteConfig";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Anjali Makeup Studio on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxe transition-transform duration-300 hover:scale-110 active:scale-95 animate-float"
    >
      <MessageCircle size={26} className="fill-white/10" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  );
}
