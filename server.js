const http = require('http');
const handleRequest = (request, response) => {
  response.writeHead(200);
  response.end('Hello World!');
};
const server = http.createServer(handleRequest);

server.listen(8080, () => {
  console.log('server is running on http://localhost:8080');
});
