var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// respond with "hello world" when a GET request is made to the homepage
app.get('/api/v1/people', function (req, res) {
  res.json([
    {
      name: 'Juri'
    },
    {
      name: 'Igor'
    }
  ]);
});

app.post('/api/v1/people', function (req, res) {
  res.json(req.body);
});

const port = 3000;
app.listen(port);
console.log('Magic happens on port ' + port);
