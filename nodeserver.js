var express = require('express');
var router = express();
var mongoose = require('mongoose');
var test = require('./test');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/test')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));


/* GET ALL PRODUCTS */
router.get('/', function(req, res, next) {
	console.log('/ api calling');
  test.find(function (err, products) {
    if (err) return next(err);
    console.log(products);
    res.send(products);
  });
});

/* GET SINGLE PRODUCT BY ID */
router.get('/:id', function(req, res, next) {
	console.log('/:id api calling');
  test.findById(req.params.id, function (err, post) {
    if (err) return next(err);
	console.log(post);
    res.json(post);
  });
});

/* SAVE PRODUCT */
router.post('/', function(req, res, next) {
console.log('/ for post api calling');
  test.create(req.body, function (err, post) {
    if (err) return next(err);
	console.log(post);
    res.json(post);
  });
});

/* UPDATE PRODUCT */
router.put('/:id', function(req, res, next) {
  test.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
	console.log(post);
    res.json(post);
  });
});

/* DELETE PRODUCT */
router.delete('/:id', function(req, res, next) {
  test.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
	console.log(post);
    res.json(post);
  });
});
router.listen(3000);
module.exports = router;
