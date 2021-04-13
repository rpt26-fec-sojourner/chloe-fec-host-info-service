const express = require('express');
const app = express();
const port = 2222;
const bodyParser = require('body-parser');
const path = require('path');
const distPath = path.join(__dirname, 'client/dist');
const hostModel = require('./database/hostModel.js');

app.use(express.static(distPath));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/host/:listing_id', (req, res) => {
  let listingID = req.params.listing_id;

  hostModel.findHostInfo(listingID)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`Error querying db for listing ID ${listingID}: ${err}`);
    });
});

app.get('/:listing_id', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.sendFile(path.join(distPath, 'index.html'));
});

module.exports = app;