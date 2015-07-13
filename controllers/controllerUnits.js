/**
 * Created by adminlocal on 13/07/15.
 */

var models = require('../models/models');


// GET quizes/
exports.showAll = function(req,res){
    models.Units.find(function(err, units) {
        if(err) res.send(500, err.message);

        console.log('GET /units')
        res.status(200).jsonp(units);
    })
}


exports.byName = function(req,res){
    models.Units.findOne({ name: req.query.name } , function(err, unit) {
        if(err) res.send(500, err.message);

        console.log('GET /units/' + req.query.name)
        res.status(200).jsonp(unit);
    })
}
