/*
 * @LastEditors: wangrui
 * @Description: 
 * @Date: 2025-04-07 15:44:13
 * @LastEditTime: 2025-04-07 15:52:50
 * @FilePath: \learn-english\learnEnglish\vite.config.ts
 */
// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',  // 路径别名
    },
  },
  server: {
    port: 5173,          // 本地开发服务器端口
    open: true,          // 自动打开浏览器
    proxy: {             // 代理设置
      '/api': {
        target: 'https://api.example.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',      // 构建输出目录
    sourcemap: true,     // 生成 sourcemap 文件
    rollupOptions: {
      output: {
        // 静态资源打包分类
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
      },
    },
  },
});
