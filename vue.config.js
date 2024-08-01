module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'src': '@/src',
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost/Workflow',
                changeOrigin: true,
                pathRewrite: { '^/api': 'api' },
            },
        },
    },
};