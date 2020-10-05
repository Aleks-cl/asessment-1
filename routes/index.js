var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET Home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET About me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About_Me' });
});
/* GET Products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});
/* GET Survices me page. */
router.get('/survices', function(req, res, next) {
  res.render('index', { title: 'Survices' });
});
/* GET Contact me page. */
router.get('/Contact', function(req, res, next) {
  res.render('index', { title: 'Contact_information' });
});
module.exports = router;
