// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  
  // Konfiguracja dla GitHub Pages
  site: 'https://c0zzy98.github.io',
  base: '/astro-cv',

  vite: {
    plugins: [tailwindcss()]
  }
});