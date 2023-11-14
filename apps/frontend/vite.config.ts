import { defineConfig, splitVendorChunkPlugin, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/

export default () => {
  const env = loadEnv("", ".", "");
  return defineConfig({
    envPrefix: "FE",
    plugins: [react(), tsconfigPaths(), svgr(), splitVendorChunkPlugin()],
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
