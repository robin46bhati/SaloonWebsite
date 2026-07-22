/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette — exact tokens as specified, no additions.
        gold: {
          DEFAULT: "#C89B3C",
          light: "#E4C777",
          dark: "#A57C28",
        },
        charcoal: {
          DEFAULT: "#1F1F1F",
          light: "#2E2C29",
          soft: "#3A3733",
        },
        cream: "#F8F4EC",
        ink: "#222222",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        script: ["'Italianno'", "cursive"],
        body: ["'Jost'", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E4C777 0%, #C89B3C 50%, #A57C28 100%)",
        "charcoal-gradient": "linear-gradient(180deg, #1F1F1F 0%, #2E2C29 100%)",
        "hero-scrim": "linear-gradient(180deg, rgba(31,31,31,0.15) 0%, rgba(31,31,31,0.55) 55%, rgba(31,31,31,0.92) 100%)",
      },
      boxShadow: {
        luxe: "0 20px 60px -15px rgba(31,31,31,0.25)",
        "luxe-gold": "0 10px 40px -10px rgba(200,155,60,0.45)",
        glass: "0 8px 32px 0 rgba(31,31,31,0.18)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scrollDot: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(14px)", opacity: "0" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        fadeIn: "fadeIn 1s ease forwards",
        slideInLeft: "slideInLeft 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        slideInRight: "slideInRight 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        shimmer: "shimmer 3s linear infinite",
        float: "float 5s ease-in-out infinite",
        scrollDot: "scrollDot 1.6s ease-in-out infinite",
        spinSlow: "spinSlow 12s linear infinite",
      },
    },
  },
  plugins: [],
};
