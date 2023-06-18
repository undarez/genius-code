import  createProxyMiddleware  from 'http-proxy-middleware';
const { createProxyMiddleware: proxy } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/write',
    proxy({
      target: 'http://localhost:9100',
      changeOrigin: true,
    })
  );
};