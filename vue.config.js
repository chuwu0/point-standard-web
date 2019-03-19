const path = require("path")

function resolve(dir) {
    return path.join(__dirname, dir)
}
// 作为配置文件，直接导出配置对象即可
module.exports = {
    devServer: {
        // 设置主机地址
        host: 'localhost',
        // 设置默认端口
        port: 8080,
        // 设置代理
        proxy: {
            '/data-platform-3': {
                // 目标 API 地址
                target: 'http://192.168.20.225:8080/',
                // 如果要代理 websockets
                ws: true,
                // 将主机标头的原点更改为目标URL
                changeOrigin: false
            }
        },
        // alias: {
        //     "assets": "src/assets"
        // }
    },
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('static', resolve('src/static'))
            .set('views', resolve('src/views'))
            .set('store', resolve('src/store'))
            .set('fetch', resolve('src/fetch'))
            .set('utils', resolve('src/utils'))
    }

}