var express    = require('express');
var bodyParser = require('body-parser');
var swords = require('./routes/routes') // matches the path javascript/routes/routes.js

var app = express();

var cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/swords', swords); // the first argument is the name of the database, the second argument matches the routes variable set on line 3

app.listen(process.env.PORT || 8080);
console.log('Server started on localhost://8080');
