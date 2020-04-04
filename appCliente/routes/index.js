var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Aplicación Cliente' });
});

router.get('/Actualizar', function(req, res, next) {
  res.render('Actualizar');
});

router.get('/RegistroEs', function(req, res, next) {
  res.render('RegistroEs');
});

router.get('/Eliminar', function(req, res, next) {
  res.render('Eliminar');
});
module.exports = router;
