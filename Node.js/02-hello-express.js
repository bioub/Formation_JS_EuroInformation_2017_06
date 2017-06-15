const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('Home');
});

server.get('/json', (req, res) => {
  res.json({prenom: 'Eric'});
});

server.listen(3001);
