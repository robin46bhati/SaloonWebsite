// All services + prices, transcribed directly from Anjali Makeup Studio's
// printed price list (Makeup & Styling, Skin & Grooming, Bleach & D-Tan,
// Waxing/Threading/Grooming).

export const serviceCategories = [
  {
    id: "makeup-styling",
    title: "Makeup & Styling",
    icon: "Wand2",
    description: "Flawless, long-lasting makeup artistry for brides, engagements and parties.",
    items: [
      {
        slug: "hd-airbrush-makeup",
        name: "HD / Airbrush Makeup",
        price: 15000,
        description: "Studio-grade high-definition airbrush finish that photographs beautifully and lasts all day.",
        image: "/images/gallery/bridal-red-lehenga.jpg",
        featured: true,
      },
      {
        slug: "bridal-makeup",
        name: "Bridal Makeup (Only)",
        price: 12000,
        description: "Complete bridal makeup with a radiant, long-wear finish tailored to your skin tone.",
        image: "/images/gallery/bridal-maroon-lehenga.jpg",
        featured: true,
      },
      {
        slug: "engagement-makeup",
        name: "Engagement Makeup",
        price: 2100,
        description: "Soft-glam makeup designed to photograph perfectly for your ring ceremony.",
        image: "/images/gallery/bridal-pastel-pink.jpg",
      },
      {
        slug: "party-makeup",
        name: "Party Makeup",
        price: 1500,
        description: "Glamorous, event-ready makeup for sangeet, receptions and celebrations.",
        image: "/images/gallery/party-glam-curls.jpg",
      },
      {
        slug: "hair-styling-hair-do",
        name: "Hair Styling & Hair Do",
        price: 300,
        description: "Elegant updos, curls and styling to complete your bridal or party look.",
        image: "/images/gallery/party-blue-embroidered.jpg",
      },
    ],
  },
  {
    id: "skin-grooming",
    title: "Skin & Grooming (Facials & Cleansing)",
    icon: "Sparkles",
    description: "Premium facial treatments that nourish, brighten and prep your skin for the big day.",
    items: [
      {
        slug: "o3-facial",
        name: "O3+ Facial",
        price: 1500,
        description: "Deep cleansing treatment that brightens skin & gives an instant glow.",
        image: null,
        featured: true,
      },
      {
        slug: "premium-facial",
        name: "Premium Facial",
        price: 1500,
        description: "Nourishes, hydrates & revives your natural glow.",
        image: null,
      },
      {
        slug: "bridal-glow-facial",
        name: "Bridal Glow Facial",
        price: 700,
        description: "Specially designed for brides for a radiant & flawless glow.",
        image: null,
        featured: true,
      },
      {
        slug: "korean-facial",
        name: "Korean Facial",
        price: 600,
        description: "Advanced treatment for hydrated, glass-like skin.",
        image: null,
      },
      {
        slug: "lotus-facial",
        name: "Lotus Facial",
        price: 500,
        description: "Gentle, botanical facial that refreshes and softens the skin.",
        image: null,
      },
      {
        slug: "whitening-facial",
        name: "Whitening Facial",
        price: 500,
        description: "Targets dullness and uneven tone for brighter-looking skin.",
        image: null,
      },
      {
        slug: "fruit-facial",
        name: "Fruit Facial",
        price: 350,
        description: "Enriched with fruit extracts for refreshing & glowing skin.",
        image: null,
      },
      {
        slug: "deep-cleansing",
        name: "Deep Cleansing",
        price: 300,
        description: "Removes dirt, oil & impurities for clear & healthy skin.",
        image: null,
      },
    ],
  },
  {
    id: "bleach-detan",
    title: "Bleach & D-Tan",
    icon: "Droplet",
    description: "Instant brightening treatments for even-toned, radiant skin.",
    items: [
      { slug: "korean-bleach", name: "Korean Bleach", price: 200, description: "Gentle brightening bleach for a soft, even glow." },
      { slug: "ozone-bleach", name: "Ozone Bleach", price: 150, description: "Classic bleach treatment for a fresh, brightened complexion." },
      { slug: "fruit-bleach", name: "Fruit Bleach", price: 100, description: "Mild, skin-friendly bleach with natural fruit extracts." },
      { slug: "d-tan-pack", name: "D-Tan Pack", price: 100, description: "Removes tan and restores your skin's natural tone." },
    ],
  },
  {
    id: "waxing-grooming",
    title: "Waxing, Threading & Grooming",
    icon: "Scissors",
    description: "Smooth, hygienic hair removal and grooming, hand or full body.",
    items: [
      { slug: "manicure-pedicure", name: "Manicure & Pedicure", price: 500, description: "Complete hand & foot care for soft, polished skin." },
      { slug: "oil-rica-waxing", name: "Oil / Rica Waxing", price: 300, description: "Full body waxing with premium oil or rica wax." },
      { slug: "honey-waxing", name: "Honey Waxing", price: 200, description: "Gentle honey-based waxing for smooth, soft skin." },
      { slug: "face-waxing", name: "Face Waxing", price: 200, description: "Precise, gentle waxing for a clean facial finish." },
      { slug: "thread-work", name: "Thread Work", price: 50, description: "Precision eyebrow & facial threading." },
    ],
  },
];

// Every service flattened into one list, each item tagged with its parent
// category — powers the Services listing, Home preview, and detail pages.
export const allServices = serviceCategories.flatMap((cat) =>
  cat.items.map((item) => ({
    ...item,
    category: cat.title,
    categoryId: cat.id,
  }))
);

export const getServiceBySlug = (slug) => allServices.find((s) => s.slug === slug);

// Flattened list used on the Home preview + Services highlight cards
export const featuredServices = allServices.filter((item) => item.featured);

export const premiumFacials = [
  {
    name: "O3+ Facial",
    tagline: "Deep cleansing, brightens skin & gives instant glow.",
  },
  {
    name: "Premium Facial",
    tagline: "Nourishes, hydrates & revives your natural glow.",
  },
  {
    name: "Bridal Glow Facial",
    tagline: "Specially designed for brides for a radiant & flawless glow.",
  },
  {
    name: "Korean Facial",
    tagline: "Advanced treatment for hydrated & glass-like skin.",
  },
  {
    name: "Fruit Facial",
    tagline: "Enriched with fruit extracts for refreshing & glowing skin.",
  },
  {
    name: "Deep Cleansing",
    tagline: "Removes dirt, oil & impurities for clear & healthy skin.",
  },
];
