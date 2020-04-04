var express = require('express');
var router = express.Router();

router.get('/Actualizar', function(req, res, next) {
  res.render('Actualizar', { title: 'Prueba' });
});

module.exports = router;
