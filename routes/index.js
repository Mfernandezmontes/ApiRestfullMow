var express = require('express');
var router = express.Router();

var controllerUnits = require('../controllers/controllerUnits');


/* GET / */
router.get('/', function(req, res, next) {
  res.send(console.log('GET  /'));
    next()
});

// GET
router.get('/units' , controllerUnits.showAll);
// GET
router.get('/units/:faction', controllerUnits.byFaction);

// POST
router.post('/units/add', controllerUnits.addUnit);

//PUT
router.put('/units/:id', controllerUnits.updateUnit);

//DELETE
router.delete('/units/:id',  controllerUnits.deleteUnit);

module.exports = router;
