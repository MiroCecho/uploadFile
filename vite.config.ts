

export default {
    build: {
        sourcemap: false,
        minify: true,
        rollupOptions: {
            output: {
                manualChunks: () => {
                    return "bundle"
                }
            }
        },
    },
    server: {
        hmr: { overlay: false },
        port: 2027
    },
    exports: {
    }
};