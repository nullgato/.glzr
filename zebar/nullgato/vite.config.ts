import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import path from 'path'

export default defineConfig({
    plugins: [solidPlugin()],
    build: { target: 'esnext' },
    base: './',
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './src'),
            '~styles': path.resolve(__dirname, './src/styles'),
            '~modules': path.resolve(__dirname, './src/modules'),
            '~components': path.resolve(__dirname, './src/components'),
        },
    },
})
