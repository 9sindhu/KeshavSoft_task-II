    import { defineConfig } from "vite";
import nunjucks from "vite-plugin-nunjucks";

export default defineConfig({
  root: "src",

  plugins: [
    nunjucks({
      templatesDir: "src/templates"
    })
  ],

  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: "src/index.html",
        about: "src/about.html",
        contact: "src/contact.html"
      }
    }
  }
});
