module.exports = {
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