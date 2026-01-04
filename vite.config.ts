import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Base path for GitHub Pages - update this to match your repo name
  base: process.env.NODE_ENV === 'production' ? '/urar-form/' : '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
    target: "esnext",
  },
  resolve: {
    dedupe: ["lit"],
  },
  server: {
    port: 5173,
    open: true,
  },
});
