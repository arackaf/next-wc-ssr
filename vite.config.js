import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    outDir: path.join(__dirname, "./shoelace-dir"),
    lib: {
      name: "shoelace",
      entry: "./src/shoelace-bundle.js",
      formats: ["umd"],
      fileName: () => "shoelace-bundle.js",
    },
    rollupOptions: {
      output: {
        entryFileNames: `[name]-[hash].js`,
      },
    },
  },
});
