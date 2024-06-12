import { defineConfig } from 'vite'

export default defineConfig({
    base: '/',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith('.xml')) {
                        return `[name].[ext]`
                    } else {
                        return `assets/[name]-[hash].[ext]`
                    }
                }
            }
        }
    },
    plugins: [],
})
