/// <reference types="vite/client" />

import svgr from "@svgr/rollup";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// se cambio el vite-plugins-svgr a @svgr/rollup
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "Shidori",
      formats: ["es", "umd", "cjs", "iife"],
      fileName: "shidori",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
