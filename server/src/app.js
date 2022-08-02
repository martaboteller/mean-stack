const express = require('express'); //Helps connect with db
const morgan = require('morgan'); //Listens for petitions
const cors = require('cors');
const path = require('path');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(cors());
app.use(morgan('dev')); //Morgan registers what is comming
app.use(express.json()); //Listens for json responses
app.use(express.urlencoded({ extended: false })); //Listens for htm forms

app.get('/api/employees', function (req, res) {
  res.sendFile(path.join(__dirname, '../public'));
});

// app.all('/', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

//Routes
app.use('/api/employees', require('./routes/employees.routes'));

//Static files/Frontend
app.use(express.static(path.join(__dirname, '../public')));

//Export app
module.exports = app;
