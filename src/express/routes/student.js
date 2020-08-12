var express = require('express');
var student = require('../mock/student');
var router = express.Router();

router.get('/list', function(req, res, next) {
  var params = req.query;
  res.header('Access-Control-Allow-Origin', '*');
  res.type('application/json');
  res.json(student.getData(params));
});

router.get('/add', function(req, res, next) {
  var params = req.query;
  res.header('Access-Control-Allow-Origin', '*');
  res.type('application/json');
  res.json(student.addData(params));
});

router.get('/edit', function(req, res, next) {
  var params = req.query;
  res.header('Access-Control-Allow-Origin', '*');
  res.type('application/json');
  res.json(student.editData(params));
});

router.get('/delete', function(req, res, next) {
  var { students } = req.query;
  res.header('Access-Control-Allow-Origin', '*');
  res.type('application/json');
  res.json(student.deleteData(students));
});

module.exports = router;
