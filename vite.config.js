import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [vue()],
  base: '/my-portfolio/',
  // base: process.env.NODE_ENV === 'production' ? '/my-portfolio/' : '/',
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
