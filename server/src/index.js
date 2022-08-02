//This is the starting point of our server
//Add database
//Add app
require('./database');
const app = require('./app');

//Start the server

app.listen(app.get('port'));
console.log('Server on port', app.get('port'));
