var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/services', function(req, res, next) {
  res.render('service');
});

router.get('/ccst', function(req, res, next) {
  res.render('ccst');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio');
});

router.get('/portfolio/details', function(req, res, next){
    res.render('portfolio-details');
});
module.exports = router;
