import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'BaseUiComponents',
      fileName: format => {
        if (format === 'es') return 'base-ui-components.js';
        if (format === 'umd') return 'base-ui-components.umd.cjs';
        return `base-ui-components.${format}.js`;
      },
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
