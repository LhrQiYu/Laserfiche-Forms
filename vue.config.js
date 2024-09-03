module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                src: '@/src',
            },
        },
    },
    devServer: {
        proxy: {
            '/api': {
                target: process.env.VUE_APP_URL,
                changeOrigin: true,
                pathRewrite: { '^/api': '' },
            },
        },
    },
}
