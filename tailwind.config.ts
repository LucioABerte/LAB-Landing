import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      colors: {
        primary: "#ffdf2b",
        darkBlue: "#fcfcfc",
        customGray: "#808080",
        lightBlue: "#fcfcfc",
        customLightGray: "#808080",
        dark: "#101010"
      },
      fontSize: {
        normal: "1.125rem"
      },
      screens: {
        'sm': {'min': '300px', 'max': '374px'},
        'stm': {'min': '374px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'xl': {'min': '1024px', 'max': '1535px'},
        '2xl': {'min': '1536px'},
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config