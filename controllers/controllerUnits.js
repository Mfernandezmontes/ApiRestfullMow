/**
 * Created by adminlocal on 13/07/15.
 */

var models = require('../models/models');


// GET units/
exports.showAll = function(req,res){
    models.Units.find(function(err, units) {
        if(err) res.status(500).send(err.message);;

        console.log('GET /units')
        res.status(200).jsonp(units);
    })
}

// GET units/:faction
exports.byFaction = function(req,res){
    models.Units.find({  'faction': req.params.faction } , function(err, units) {
        if(err) res.status(500).send(err.message);;

        console.log(units)

        if(units === 0){
            res.status(404)
        } else {
            console.log('GET /units/' + req.params.faction)
            res.status(200).jsonp(units)
        }
    })
}


// POST units/add

exports.addUnit = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var unit = new models.Units({
        name:       req.body.name,
        faction:    req.body.faction,
        cp:         req.body.cp,
        jp:         req.body.jp
    });

    unit.save(function(err, unit) {
        if(err) return res.status(500).send(err.message);
        res.status(200).jsonp(unit);
    });
};

//PUT update unit by id
exports.updateUnit = function(req, res) {

    console.log('PUT');
    console.log('Id' + req.params.id);
    console.log(req.body);

    models.Units.findByIdAndUpdate( req.params.id , req.body , function(err, unit){
        if(err) return res.status(500).send(err.message);
         res.status(200).jsonp(unit);
    })
}

//TODO: falta remove !!
//DELETE - Delete a unit by id
exports.deleteUnit = function(req, res) {

    console.log('DELETE');
    console.log('Id ' + req.params.id);

    models.Units.findOne( {'_id': req.params.id } , function(err,unit) {
        if(err) return res.status(500).send(err.message);

        console.log(unit);

        unit.remove(function(err){
            if(err) return res.status(500).send(err.message)
            res.status(200);
        });

    })
};
