//Load required modules
require('dotenv').config();
const mongoose = require('mongoose');

//Senvible values will be defined in environment
const url = process.env.MONGO_CONNECTION_STRING;

//Define connection to database
mongoose
  // .connect('mongodb://localhost/mean-employees', {
  .connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db) => console.log('Db is connected')) //message if ok
  .catch((err) => console.log(err)); //message if ko

module.exports = mongoose;
