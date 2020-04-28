const express = require('express');
const app = express();
const port = 9090;

const dataJson = require('./data');

app.listen(port, () => {
    console.log('Server listening at http://localhost:' + port);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
    res.send('Welcome to my node-server-1');
});

app.get('/data', (req, res) => {
    res.json({
        status: 200,
        data:dataJson
    });
});