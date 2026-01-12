import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';
import { resolve } from 'path';

export default defineConfig({
  base: '/KeshavSoft-Task-2/', 
  root: 'src/templates', 
  plugins: [
    nunjucks()
  ],
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/templates/index.html'),
        about: resolve(__dirname, 'src/templates/about.html'),
        contact: resolve(__dirname, 'src/templates/contact.html'),
      }
    }
  }
});
