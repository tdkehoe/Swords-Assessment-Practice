var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/swords'); // this is the name of the database, make it semantic
var Swords = db.get('swords'); // the name of the database

router.get('/', function(req, res) {  // INDEX
  Swords.find({}, function(err, swords) {
    if (err) {
      res.send(err);
    }
    res.status(200).json(swords); // OK
  })
});

router.post('/', function(req, res) { // CREATE
  Swords.insert(req.body, function(err, sword) {
    if (err) {
      res.send(err);
    }
    res.status(201).json(sword); // Created
  });
})

router.get('/new', function(req, res){ // NEW
  // goes to forms page for user to enter a new item
  // this route isn't needed in Express because it
  // doesn't get any data from the database
  // just use a href anchor in Angular to go to the forms page
});

router.get('/:id', function(req, res) { //SHOW
  Swords.findOne({_id: req.params.id}, function(err, sword) {
    if (err) {
      res.send(err);
    }
    res.status(200).json(sword); // OK
  })
})

router.get('/:id/edit', function(req, res){ // EDIT (identical to SHOW route)
  Swords.findOne({_id: req.params.id}, function(err, sword) {
    if (err) {
      res.send(err)
    }
    res.status(200).json(sword) // OK
  })
});

router.put('/:id', function(req, res) { // UPDATE
  Swords.findAndModify({_id: req.params.id}, req.body, function(err, sword) {
    if (err) {
      throw err;
    }
    res.json(req.body);
  })
})

router.delete('/:id', function(req, res) { //DESTROY
  Swords.remove({_id: req.params.id}, function(err, sword){
    if (err) {
      throw err;
    }
    res.status(204).json(sword); // No Content
  });
});

module.exports = router;
