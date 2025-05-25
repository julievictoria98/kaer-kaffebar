import type { Config } from "tailwindcss";

export default {
  content: [
    "./assets/**/*.{js,vue,jsx,tsx,scss,css}",
    "./components/**/*.{js,vue,jsx,tsx}",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,vue,jsx,tsx}",
    "./layouts/**/*.vue",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#514941",
        secondary: "#f4f0ee",
        tertiary: "#ff6938",
        brand: "#c42217",
      },
      spacing: {
        spacing1: "0.8rem",
        spacing2: "1.2rem",
      },
    },
  },
  plugins: [],
} as Config;
