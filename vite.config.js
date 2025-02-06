import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/https://github.com/faiz1004/Interactive-Quiz-Application/', // Replace with your actual repo name
});
