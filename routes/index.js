var express = require('express');
var router = express.Router();



/* GET ML home page. */
router.get('/', function (req, res, next) {
  res.render('mercadoliebre');
});
/* GET login page. */
router.get('/login', function (req, res, next) {
  res.render('login');
});
/* GET register page. */
router.get('/register', function (req, res, next) {
  res.render('register');
});
/* post ML page. */
router.post('/', function (req, res, next) {
  res.render('mercadoliebre');
});
/* post login page. */
router.post('/login', function (req, res, next) {
  res.render('login');
});
/* post register page. */
router.post('/register', function (req, res, next) {
  res.render('register');
});


module.exports = router;
