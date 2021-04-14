
const mongoose = require('mongoose');
const app = require('../app.js');
const port = 2222;

mongoose.connect('mongodb://localhost:27017/airbnb_host', {useNewUrlParser: true, useUnifiedTopology: true})
  .catch((err) => {
    console.log('Error connecting to MongoDB: ', err);
  })

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});