// Central source of truth for brand + contact info, pulled directly from
// Anjali Makeup Studio's own promotional material.

export const siteConfig = {
  name: "Anjali Makeup Studio",
  shortName: "Anjali",
  tagline: "Where Beauty Meets Perfection",
  taglineHindi: "खूबसूरती आपकी, निखार हमारा",
  mission: "Enhancing Beauty, Inspiring Confidence",
  slogan: "Be Beautiful. Be Confident. Be You.",
  category: "Professional Makeup & Salon Studio",

  phone: "7015499307",
  phoneDisplay: "+91 70154 99307",
  whatsappNumber: "917015499307",
  email: "hello@anjalimakeupstudio.in",

  address: {
    line1: "Village Sahupura Khadar",
    line2: "Ballabgarh, Faridabad",
    state: "Haryana",
    pincode: "121004",
    full: "Village Sahupura Khadar, Ballabgarh, Faridabad, Haryana – 121004",
  },

  hours: [
    { day: "Monday – Saturday", time: "9:00 AM – 8:00 PM" },
    { day: "Sunday", time: "10:00 AM – 6:00 PM (By Appointment)" },
  ],

  social: {
    instagram: "https://instagram.com/anjalimakeover._.1",
    instagramHandle: "@anjalimakeover._.1",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },

  badges: [
    { title: "Professional Expertise", icon: "Sparkles" },
    { title: "Premium Products", icon: "FlaskConical" },
    { title: "Hygienic & Safe", icon: "ShieldCheck" },
    { title: "100% Client Satisfaction", icon: "ThumbsUp" },
  ],

  stats: [
    { label: "Bridal Looks Crafted", value: "500", suffix: "+" },
    { label: "Happy Clients", value: "1200", suffix: "+" },
    { label: "Years of Artistry", value: "6", suffix: "+" },
    { label: "Services Offered", value: "20", suffix: "+" },
  ],
};

export const whatsappLink = (message = "Hi Anjali Makeup Studio, I'd like to book an appointment.") =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const telLink = `tel:+91${siteConfig.phone}`;

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Pricing", path: "/pricing" },
  { label: "Gallery", path: "/gallery" },
  { label: "Packages", path: "/membership" },
  { label: "Offers", path: "/offers" },
  { label: "Team", path: "/team" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

export const footerLinks = {
  quick: [
    { label: "About Us", path: "/about" },
    { label: "Gallery", path: "/gallery" },
    { label: "Our Team", path: "/team" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "FAQ", path: "/faq" },
  ],
  legal: [
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms & Conditions", path: "/terms-and-conditions" },
  ],
};
