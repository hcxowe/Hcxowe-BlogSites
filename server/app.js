var express = require('express');
var path = require('path');
var history = require('connect-history-api-fallback');

var app = express();

const staticFileMiddleware = express.static('../front-webapp/dist/static');
//app.use(express.static(path.join(__dirname, '../front-webapp/dist')));

app.use(staticFileMiddleware);

app.use(history({
    disableDotRule: true,
    verbose: true
}));

app.use(staticFileMiddleware);

// app.get('/', function(req, res) {
//      res.sendFile(path.join(__dirname, '../front-webapp/dist/index.html'));
// })

app.listen(3000, function() {
    console.log('start server');
});