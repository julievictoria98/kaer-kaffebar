export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      wpApiBase: process.env.WP_API_BASE,
    },
  },

  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  css: ["@/assets/css/tailwind.css", "@/assets/main.scss"],

  modules: ["@nuxtjs/tailwindcss", "@hypernym/nuxt-gsap"],
  gsap: {
    composables: true,
    autoImport: true,
    provide: false,
    extraPlugins: {
      scrollTrigger: true,
    },
  },
});
