import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { navLinks, telLink } from "../../data/siteConfig";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open, and allow Escape to close it
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close drawer on route change (link click)
  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-charcoal shadow-glass py-2" : "bg-transparent py-4"
      }`}
    >
      <Container className="flex items-center justify-between">
        <Logo light />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-7 xl:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative font-body text-sm tracking-wide transition-colors duration-300 py-1 ${
                  isActive ? "text-gold-light" : "text-white/85 hover:text-gold-light"
                } after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-gold-light after:transition-all after:duration-300 ${
                  isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={telLink}
            aria-label="Call Anjali Makeup Studio"
            className="flex items-center gap-2 text-white/85 hover:text-gold-light transition-colors text-sm"
          >
            <Phone size={16} />
            <span>7015499307</span>
          </a>
          <Button to="/contact" size="sm">Book Appointment</Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-gold-light/40 text-gold-light"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 z-40 bg-charcoal/98 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              aria-label="Mobile"
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex h-full flex-col items-center justify-center gap-7 px-8"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 + i * 0.04, duration: 0.4 }}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `font-display text-2xl ${isActive ? "text-gold-light" : "text-white"}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <Button to="/contact" onClick={closeMenu} className="mt-4">
                Book Appointment
              </Button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
