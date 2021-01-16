let http = require('http');
var app = require('./app');

var serv = http.createServer(app);

serv.listen(8008); //commence à accepter les requêtes

console.log("Server running at http://localhost:8008");