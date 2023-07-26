// Create a web server
// Load the comments.json file
// Return the comments.json file as the response
// Handle errors

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  // response.writeHead(200, {"Content-Type": "text/plain"});
  // response.end("Hello World\n");
  fs.readFile('comments.json', function(err, data){
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(data);
  });
});

// Listen on port 8000, IP defaults to


