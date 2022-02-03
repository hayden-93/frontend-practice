import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCommonjs()],
  resolve: {
    alias: {
      "@nft": path.join(process.cwd(), "src", "projects", "nft-preview-card"),
      "@testimonials-grid": path.join(process.cwd(), "src", "projects", "testimonials-grid"),
    },
  },
});
