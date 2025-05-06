export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: [
    "@/assets/css/tailwind.css", // Then load Tailwind CSS
    "@/assets/main.scss", // Load your custom SCSS first
  ],
  modules: ["@nuxtjs/tailwindcss"],
});
