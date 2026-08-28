import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 8787 is the backend's port. It is overridable because a Windows listener can
// outlive the process that opened it: when that happens the port is unusable
// until a reboot, and a hardcoded target means the whole app is unrunnable for
// a reason that has nothing to do with the app. `PF_API_PORT=8788 npm run dev`
// (and the same variable for ./dev.sh) is the way out.
const API_PORT = process.env.PF_API_PORT || "8787";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: `http://127.0.0.1:${API_PORT}`,
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, ""),
      },
    },
  },
});
