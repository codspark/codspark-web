import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Detect build mode (GitHub Pages or custom domain)
const isGitHubPages = process.env.DEPLOY_TARGET === "gh-pages";

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? "/codspark-web/" : "/", //auto switch
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
