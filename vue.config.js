const { defineConfig } = require('@vue/cli-service')

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    //修改文件引入自定义路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('style', resolve('src/assets/style'))
  },
})

// vue.config.js
// 注意请求接口的时候不要加 baseURL 不然配置会失效
module.exports = {
  devServer: {
    proxy: {
        '/api': {
            target: 'http://127.0.0.1:5200',    // api接口基础路径
            changeOrigin: true,                 // 是否支持跨域
            ws: true,
            pathRewrite: {
              '^/api': ''                       // 重写路径：去掉路径中开头的 '/api'
            }
        }
    }
  }
}
