import { defineConfig } from "vite";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/newernice/",
  plugins: [
    tailwindcss(),
    ...tanstackStart({
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
