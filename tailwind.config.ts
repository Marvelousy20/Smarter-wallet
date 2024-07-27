import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "violet-purple": "#819DF5",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-gradient-fade": {
          "background-image":
            "linear-gradient(to bottom, white, rgb(150, 150, 150))",
          color: "transparent",
          "background-clip": "text",
          "-webkit-background-clip": "text",
        },

        ".welcome-gradient": {
          "background-image":
            "linear-gradient(91.26deg, #FFFFFF 0%, #70A2FF 100%);",
          color: "transparent",
          "-webkit-background-clip": "text",
          "background-clip": "text",
        },
      });
    }),
  ],
} satisfies Config;

export default config;
