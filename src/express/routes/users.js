var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('Users/users', {title: 'users'});
});

router.get('/login', function(req, res, next){
  res.render('Users/login', {title: 'users/login'});
});

module.exports = router;
