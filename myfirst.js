let http = require('http');
const { text } = require('stream/consumers');
http.createServer(function (req, res) {
    res.writeHead(200, {"content-type": 'text/html'});
    res.end('Hello World');
}).listen(8080);