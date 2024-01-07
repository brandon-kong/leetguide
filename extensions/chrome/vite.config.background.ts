import { defineConfig } from "vite";

const buildConfigs = defineConfig({
    build: {
        lib: {
            name: 'background',
            entry: './src/background.ts',
            formats: ['iife'],
            fileName: () => `background.js`,
        },
        rollupOptions: {
            output: {
                globals: {
                chrome: 'chrome',
                },
            },
        },
    },
})

export default buildConfigs;