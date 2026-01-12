import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';
import { resolve } from 'path';

export default defineConfig({
  // This tells Vite where your source files are
  root: 'src/templates', 
  plugins: [
    nunjucks()
  ],
  build: {
    // This tells Vite to put the result in the /dist folder 
    // at the very top of your project
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