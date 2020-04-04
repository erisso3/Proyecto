var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Buscar', function(req, res, next) {
  res.render('Buscar', { title: 'Prueba' });
});

module.exports = router;
