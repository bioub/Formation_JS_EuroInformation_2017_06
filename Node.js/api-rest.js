const express = require('express');
const cors = require('cors');

const todos = [{
  done: false,
  value: 'Acheter du pain',
  id: 123,
}, {
  done: true,
  value: 'Remplir ses évals/présences',
  id: 987,
}]

const app = express();
app.use(cors());

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.listen(8000);