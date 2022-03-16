import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import styleImport from "vite-plugin-style-import";
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    react(),
    styleImport({
      libs: [
        {
          libraryName: "antd-mobile",
          esModule: true,
          resolveStyle: (name) => {
            // return `antd-mobile/es/components/${name}/${name}.css`;
            return `antd-mobile/es/components/${name}/${name}.css`;
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"),
    },
  },
  server: {
    open: true,
  },
});
