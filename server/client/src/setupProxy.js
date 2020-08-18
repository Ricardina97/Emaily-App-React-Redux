const proxyMiddleware = require('http-proxy-middleware');
const createProxyMiddleware = proxyMiddleware.createProxyMiddleware;
module.exports = function(app) {
    app.use(
        ["/api","/auth/google"],
        createProxyMiddleware({
            target: "http://localhost:5000"
        })
    );
    app.use(
        ["/api/*",],
        createProxyMiddleware({
            target: "http://localhost:5000"
        })
    );
};