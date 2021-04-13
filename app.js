const express = require('express');
const app = express();
const port = 2222;
const bodyParser = require('body-parser');
const path = require('path');
const distPath = path.join(__dirname, 'client/dist');

app.use(express.static(distPath));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/host/:listing_id', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  // Search DB for provided listing id
});

app.get('/:listing_id', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.sendFile(path.join(distPath, 'index.html'));
});

module.exports = app;