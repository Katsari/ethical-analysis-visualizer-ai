// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-02-19',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/color-mode', '@nuxt/icon'],
  css: [
    '@vue-flow/core/dist/style.css',
    '@vue-flow/core/dist/theme-default.css',
    '@vue-flow/controls/dist/style.css',
  ],
  app: {
    baseURL: '/ethical-analysis-visualizer-ai/', // for GitHub Pages
    head: {
      title: 'Ethical Analysis Visualizer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Explore ethical questions through interactive decision trees, powered by LLMs.',
        },
      ],
    },
  },
  icon: {
    serverBundle: {
      collections: ['heroicons'],
    },
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
})
