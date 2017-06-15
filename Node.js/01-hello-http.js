const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  switch (req.url) {
    case '/':
      res.write('Home');
      break;
    case '/contact':
      res.write('Contact us');
      break;
    default:
      res.statusCode = 404;
      res.write('Not found');
  }
  res.end();
});

server.listen(3000);
