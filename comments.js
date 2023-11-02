// Create web server
// For each request, read the file and send it to the client
// If there is an error, send an error message to the client
// If there is no error, send the contents of the file to the client
// If the file does not exist, send an error message to the client

var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function (request, response) {

    var path = url.parse(request.url).pathname;
    var file = __dirname + path;

    fs.readFile(file, function (error, data) {
        if (error) {
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('Page not found\n');
        }
        else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        }
    });
});

server.listen(3000);
console.log('Server running at http://localhost:3000');