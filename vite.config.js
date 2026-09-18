import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [react()],
      base: '/',
    };
  }

  // In production builds:
  // Use VITE_BASE_PATH if set (e.g. from GitHub Actions configure-pages),
  // otherwise default to '/apmprint/' for GitHub Pages project repository hosting.
  let rawBase = process.env.VITE_BASE_PATH ?? '/apmprint/';
  if (!rawBase || rawBase === '') {
    rawBase = '/';
  }
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

  return {
    plugins: [react()],
    base,
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false
    }
  };
});

