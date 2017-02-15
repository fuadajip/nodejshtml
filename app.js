var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log('Reques was made in: ' + req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var getStream = fs.createReadStream(__dirname + '/index.php', 'utf8');
    getStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log("Server was running on port 3000");