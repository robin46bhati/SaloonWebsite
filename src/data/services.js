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
        name: "HD / Airbrush Makeup",
        price: 15000,
        description: "Studio-grade high-definition airbrush finish that photographs beautifully and lasts all day.",
        image: "/images/gallery/bridal-red-lehenga.jpg",
        featured: true,
      },
      {
        name: "Bridal Makeup (Only)",
        price: 12000,
        description: "Complete bridal makeup with a radiant, long-wear finish tailored to your skin tone.",
        image: "/images/gallery/bridal-maroon-lehenga.jpg",
        featured: true,
      },
      {
        name: "Engagement Makeup",
        price: 2100,
        description: "Soft-glam makeup designed to photograph perfectly for your ring ceremony.",
        image: "/images/gallery/bridal-pastel-pink.jpg",
      },
      {
        name: "Party Makeup",
        price: 1500,
        description: "Glamorous, event-ready makeup for sangeet, receptions and celebrations.",
        image: "/images/gallery/party-glam-curls.jpg",
      },
      {
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
        name: "O3+ Facial",
        price: 1500,
        description: "Deep cleansing treatment that brightens skin & gives an instant glow.",
        image: null,
        featured: true,
      },
      {
        name: "Premium Facial",
        price: 1500,
        description: "Nourishes, hydrates & revives your natural glow.",
        image: null,
      },
      {
        name: "Bridal Glow Facial",
        price: 700,
        description: "Specially designed for brides for a radiant & flawless glow.",
        image: null,
        featured: true,
      },
      {
        name: "Korean Facial",
        price: 600,
        description: "Advanced treatment for hydrated, glass-like skin.",
        image: null,
      },
      {
        name: "Lotus Facial",
        price: 500,
        description: "Gentle, botanical facial that refreshes and softens the skin.",
        image: null,
      },
      {
        name: "Whitening Facial",
        price: 500,
        description: "Targets dullness and uneven tone for brighter-looking skin.",
        image: null,
      },
      {
        name: "Fruit Facial",
        price: 350,
        description: "Enriched with fruit extracts for refreshing & glowing skin.",
        image: null,
      },
      {
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
      { name: "Korean Bleach", price: 200, description: "Gentle brightening bleach for a soft, even glow." },
      { name: "Ozone Bleach", price: 150, description: "Classic bleach treatment for a fresh, brightened complexion." },
      { name: "Fruit Bleach", price: 100, description: "Mild, skin-friendly bleach with natural fruit extracts." },
      { name: "D-Tan Pack", price: 100, description: "Removes tan and restores your skin's natural tone." },
    ],
  },
  {
    id: "waxing-grooming",
    title: "Waxing, Threading & Grooming",
    icon: "Scissors",
    description: "Smooth, hygienic hair removal and grooming, hand or full body.",
    items: [
      { name: "Manicure & Pedicure", price: 500, description: "Complete hand & foot care for soft, polished skin." },
      { name: "Oil / Rica Waxing", price: 300, description: "Full body waxing with premium oil or rica wax." },
      { name: "Honey Waxing", price: 200, description: "Gentle honey-based waxing for smooth, soft skin." },
      { name: "Face Waxing", price: 200, description: "Precise, gentle waxing for a clean facial finish." },
      { name: "Thread Work", price: 50, description: "Precision eyebrow & facial threading." },
    ],
  },
];

// Flattened list used on the Home preview + Services highlight cards
export const featuredServices = serviceCategories
  .flatMap((cat) => cat.items.map((item) => ({ ...item, category: cat.title })))
  .filter((item) => item.featured);

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
