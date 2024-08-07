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
                target: 'http://192.168.0.108/Workflow',
                changeOrigin: true,
                pathRewrite: { '^/api': 'api' },
            },
        },
    },
};
