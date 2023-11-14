import { defineConfig, splitVendorChunkPlugin, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

// https://vitejs.dev/config/

export default () => {
  const env = loadEnv("", ".", "");
  return defineConfig({
    resolve: {
      alias: {
        "@utilities": resolve(__dirname, "./src/utilities"),
        "@store": resolve(__dirname, "./src/redux"),
        "#backend": resolve(__dirname, "../backend/src"),
      },
    },
    envPrefix: "FE",
    plugins: [react(), svgr(), splitVendorChunkPlugin()],
    server: {
      host: env.FE_HOST,
      port: Number(env.FE_PORT),
    },
    preview: {
      host: env.FE_HOST,
      port: Number(env.FE_PORT),
    },
  });
};
