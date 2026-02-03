import { defineConfig, mergeConfig } from 'vite';
import baseViteConfig from '@svelte-kitchen/vite-config';

export default mergeConfig(
  baseViteConfig,
  defineConfig({
    build: {
      outDir: '../dist',
      emptyOutDir: true,
    },

    server: {
      proxy: {
        '/sveltekit': {
          target: 'http://localhost:5174',
          changeOrigin: true,
          rewrite: (path) => path,
        },
      },
    },
  }),
);
