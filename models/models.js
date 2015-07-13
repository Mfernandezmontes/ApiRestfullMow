/**
 * Created by adminlocal on 13/07/15.
 */

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Mow', function(err, res) {
    if(err) throw err;
    console.log('Connected to Database');
});


//Exportamos el modelo Units
exports.Units = require('./units');