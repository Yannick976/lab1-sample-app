const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

const port = process.env.PORT || 8080;
const host = '0.0.0.0'; // écoute sur toutes les interfaces

server.listen(port, host, () => {
  console.log(`Listening on ${host}:${port}`);
});
