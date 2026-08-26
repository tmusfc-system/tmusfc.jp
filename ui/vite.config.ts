import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0", // コンテナ外（ホスト側）からのアクセスを許可
    port: 5173,
    strictPort: true, // 5173が埋まっていても勝手にポートを変えない
    watch: {
      usePolling: true, // WSL2 / Docker環境でのホットリロード（ファイル変更検知）を安定化
    },
  },
})