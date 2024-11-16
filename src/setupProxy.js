const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/submit_form',
    createProxyMiddleware({
      target: 'https://mohamed2025.pythonanywhere.com/',
      changeOrigin: true,
    })
  );
};
