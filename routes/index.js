var express = require('express');
var router = express.Router();

var controllerUnits = require('../controllers/controllerUnits');


/* GET / */
router.get('/', function(req, res, next) {
  res.send(console.log('GET  /'));
    next()
});

// GET /units  = todas las unidades
router.get('/units' , controllerUnits.showAll);

router.get('/units/:name', controllerUnits.byName);

module.exports = router;
