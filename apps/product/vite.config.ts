import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  ...(mode === 'production' && {
    build: {
      lib: {
        entry: 'src/main.tsx',
        name: 'PageProductTs',
        fileName: format => {
          if (format === 'es') return 'page-product-ts.js';
          if (format === 'umd') return 'page-product-ts.umd.cjs';
          return `page-product-ts.${format}.js`;
        },
      },
      rollupOptions: {
        external: ['@my-monorepo/base-ui-components'],
        output: {
          globals: {
            '@my-monorepo/base-ui-components': 'BaseUiComponents',
          },
        },
      },
    },
  }),
}));
