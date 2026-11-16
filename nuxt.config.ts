// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: 'Arham Khan · Creative Developer · Motion & 3D Strategy',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'I am a Creative Developer and Motion Designer crafting high-contrast visual experiences, kinetic physics, and tactile digital realities.' },
        { name: 'author', content: 'Arham Khan' },
        { property: 'og:title', content: 'Arham Khan · Creative Developer · Motion & 3D Strategy' },
        { property: 'og:description', content: 'Creative Developer and Motion Designer crafting high-contrast visual experiences and tactile digital realities.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { href: 'https://fonts.googleapis.com/css2?family=Outfit:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap', rel: 'stylesheet' },
      ],
    },
  },
  nitro: {
    prerender: {
      routes: ['/', '/about', '/contact'],
    },
  },
})
