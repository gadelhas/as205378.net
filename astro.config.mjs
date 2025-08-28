// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://as205378.net',
    vite: {
        plugins: [tailwindcss()],
    },
});
