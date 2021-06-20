/**
 * @Description:
 * @Author chen ming
 * @CreateDate 2021/6/6 2:00 下午
 * @UpdateDate 2021/6/6 2:00 下午
 */
module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },

  devServer: {
    proxy: {
      '/report': { // 这里最好有一个 /
        target: 'http://10.118.128.97:8888/', // 后台接口域名
        ws: true,
        secure: false, 
        changeOrigin: true, 
        // headers: { Cookie: 'JSESSIONID=12B4DFE6B8A343DBBC083FDE4D67DC6F' },
        pathRewrite: {
          '^/report': '/report',
        },
      },
      '/zxreport': { // 这里最好有一个 /
        target: 'http://10.118.128.97:9998/',
        ws: true, 
        secure: false,
        changeOrigin: true,
        // headers: { Cookie: 'JSESSIONID=12B4DFE6B8A343DBBC083FDE4D67DC6F' },
        pathRewrite: {
          '^/zxreport': '',
        },
      },
    },
  },
};
