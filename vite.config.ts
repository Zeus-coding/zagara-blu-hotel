import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

export default defineConfig(({ command }) => ({
  server: { port: 8080 },
  // Resolve the "@/..." import alias from tsconfig.json.
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart({
      // Use src/server.ts as the SSR entry (it wraps rendering with a friendly error page).
      server: { entry: "server" },
    }),
    // Nitro bundles the production server. It picks the right preset automatically
    // (Node locally, Vercel/Netlify/... when built on those platforms).
    ...(command === "build" ? [nitro()] : []),
    viteReact(),
  ],
}));
