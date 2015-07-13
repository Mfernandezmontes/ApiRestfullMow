var mongoose = require('mongoose');
    Schema = mongoose.Schema;

//Esquema de la coleccion
var unitsShema = new Schema({
    name:       { type: String },
    faction:    { type: String },
    cp:         { type: Number },
    jp:         { type: Number }
});

module.exports = mongoose.model('Units', unitsShema);