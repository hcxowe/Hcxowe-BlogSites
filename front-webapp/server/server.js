var express         = require('express');
var path            = require('path');
var history         = require('connect-history-api-fallback');

var app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.use(history({
    index: '/index.html', // 默认首页
    resrites: [], // 改写请求
    disableDotRule: true,
    verbose: true,  // 日志
    logger: console.log.bind(console), // 日志函数
    htmlAcceptHeaders: ['text/html', '*/*']
}));

// 404
app.use(function(req, res, next) {
    res.sendfile(path.join(__dirname, '../dist/index.html'));
});

// 500
app.use(function(err, req, res, next) {
    console.log(err);
});

app.listen(8090, 'localhost', function() {
    console.log('server run: http://localhost:8090');
});