module.exports = {
  pages: {
    index: {
       // page 的入口
       entry: './src/qq.js'
    }
  },
  // https://m.maoyan.com/ajax/movieOnInfoList
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.maoyan.com',
        changeOrigin: true,
        // 重写path路径
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}