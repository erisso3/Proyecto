var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/RegistroEs', function(req, res, next) {
  res.render('RegistroEs', { title: 'Prueba' });
});

