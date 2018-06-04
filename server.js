var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end('Hello World!');
};
var server = http.createServer(handleRequest);

server.listen(8080, () => {
  console.log('server is running on http://localhost:8080');
});
