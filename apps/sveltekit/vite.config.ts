import { defineConfig, mergeConfig } from 'vitest/config';
import baseViteConfig from '@svelte-kitchen/vite-config';

import { sveltekit } from '@sveltejs/kit/vite';

import { playwright } from '@vitest/browser-playwright';

export default mergeConfig(
  baseViteConfig,
  defineConfig({
    plugins: [sveltekit()],

    server: {
      port: 5174,
      hmr: {
        port: 5174,
      },
    },

    test: {
      expect: { requireAssertions: true },

      projects: [
        {
          extends: './vite.config.ts',

          test: {
            name: 'client',

            browser: {
              enabled: true,
              provider: playwright(),
              instances: [{ browser: 'chromium', headless: true }],
            },

            include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
            exclude: ['src/lib/server/**'],
          },
        },

        {
          extends: './vite.config.ts',

          test: {
            name: 'server',
            environment: 'node',
            include: ['src/**/*.{test,spec}.{js,ts}'],
            exclude: ['src/**/*.svelte.{test,spec}.{js,ts}'],
          },
        },
      ],
    },
  }),
);
