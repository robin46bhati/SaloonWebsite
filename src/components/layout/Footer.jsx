import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "../ui/SocialIcons";
import { siteConfig, footerLinks, telLink } from "../../data/siteConfig";
import { serviceCategories } from "../../data/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-gradient text-white/80 pt-16 pb-8 relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold/10 blur-[100px]" />

      <Container className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Logo light />
          <p className="text-sm leading-relaxed text-white/60 max-w-xs">
            {siteConfig.mission}. Premium bridal &amp; party makeup, facials and
            grooming in {siteConfig.address.line2}.
          </p>
          <div className="flex items-center gap-3 pt-1">
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-gold hover:text-gold transition-colors">
              <InstagramIcon size={16} />
            </a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-gold hover:text-gold transition-colors">
              <FacebookIcon size={16} />
            </a>
            <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-gold hover:text-gold transition-colors">
              <YoutubeIcon size={16} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-display text-lg text-gold-light mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {footerLinks.quick.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-gold-light transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-display text-lg text-gold-light mb-4">Services</h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {serviceCategories.map((cat) => (
              <li key={cat.id}>
                <Link to="/services" className="hover:text-gold-light transition-colors">
                  {cat.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-lg text-gold-light mb-4">Contact</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>{siteConfig.address.full}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-gold" />
              <a href={telLink} className="hover:text-gold-light transition-colors">{siteConfig.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-gold" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-light transition-colors">{siteConfig.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>{siteConfig.hours[0].day}: {siteConfig.hours[0].time}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="relative mt-12 border-t border-white/10 pt-6">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {year} Copyright © 2026 Natsu. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            {footerLinks.legal.map((link) => (
              <Link key={link.path} to={link.path} className="hover:text-gold-light transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
