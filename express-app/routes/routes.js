var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/swords'); // this is the name of the database, make it semantic
var Swords = db.get('swords'); // the name of the database

module.exports = router;
