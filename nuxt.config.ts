export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "da",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  runtimeConfig: {
    public: {
      wpApiBase: process.env.WP_API_BASE,
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
      wordpressUrl: process.env.NUXT_WP_API_BASE,
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
