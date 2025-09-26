import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    svgr({
      exportAsDefault: true, // ⚡ увімкне підтримку імпорту через ?react
    }),
    react(),
  ],
  build: {
    sourcemap: true,
  },
});
