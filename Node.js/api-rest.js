const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

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
app.use(bodyParser.json());

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const nextId = todos[todos.length-1].id + 1;
  const todo = req.body;

  todo.id = nextId;
  todos.push(todo);

  res.statusCode = 201;
  res.json(todo);
});

app.listen(8000);