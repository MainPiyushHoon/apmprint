import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [react()],
      base: '/',
    };
  }

  // Determine base path:
  // 1. Explicit environment variable if supplied
  // 2. Custom domain from public/CNAME -> '/'
  // 3. GitHub Pages default repository subpath -> '/apmprint/'
  let base = '/apmprint/';
  const cnamePath = path.resolve(__dirname, 'public', 'CNAME');
  if (fs.existsSync(cnamePath) && fs.readFileSync(cnamePath, 'utf8').trim().length > 0) {
    base = '/';
  }

  if (process.env.VITE_BASE_PATH !== undefined) {
    const raw = process.env.VITE_BASE_PATH;
    base = (!raw || raw === '/') ? '/' : (raw.endsWith('/') ? raw : `${raw}/`);
  }

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

