import { defineConfig } from "vite";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/newernice/", // Базовый URL для GitHub Pages
  plugins: [
    tailwindcss(),
    ...tanstackStart({
      prerender: {
        enabled: true, // <--- Включаем генерацию статических HTML-файлов
      },
      server: { entry: "server" },
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@tanstack/react-router/ssr/server": resolve("./node_modules/@tanstack/react-router/src/ssr/server.ts"),
    },
  },
});
