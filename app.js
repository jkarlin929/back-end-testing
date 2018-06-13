const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sorter= require('./sorter');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send({ todos: ["shower", "feed cat"] });
});

app.post('/sort', (req, res) => {
  const unsorted = req.body['numbers'];
  const responseJSON = {
    unsorted
    sorted: sorter(unsorted)
  };
  res.status(201).send(responseJSON);
});

describe('Test the root path', () => {
  it('should respond to the GET method at root with important array', (done) => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.body.todos).toEqual(['shower', 'feed cat']);
      done();
    });
  });
});

app.get('/', (req, res) => {
  res.status(200).send({ todos: ["shower", "feed kitten"] });
});

module.exports = app;