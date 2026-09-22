import { defineConfig } from "vite";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Базовый URL для статических ассетов
  base: "/newernice/",
  plugins: [
    tailwindcss(),
    ...tanstackStart({
      // Указываем статический таргет для генерации статики (SSG) под GitHub Pages
      target: "static",
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@tanstack/react-router/ssr/server": resolve(
        "./node_modules/@tanstack/react-router/src/ssr/server.ts"
      ),
    },
  },
});
