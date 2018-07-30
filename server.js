const express = require('express'),
    bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let historico = {
  "Hello": "World"
};

app.get('/', function (req, res) {
  res.send(historico);
  console.info("GET / from: " + req.originalUrl);
});

app.listen(3000, function () {
  console.info('Server listening on port 3000!');
});

