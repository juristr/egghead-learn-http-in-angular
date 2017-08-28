var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');

var upload = multer({ dest: 'uploads'});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// just a demo endpoint with hardcoded person ID
app.post('/api/v1/people/123/avatar', upload.single('avatar'), function(req, res) {
  res.send(res.file);
});

const port = 3000;
app.listen(port);
console.log('Magic happens on port ' + port);
