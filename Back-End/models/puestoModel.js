const mongoose = require('mongoose');

const PuestoSchema = new mongoose.Schema({
    nombre: String,
    estatus: String
});

module.exports = mongoose.model('Puesto', PuestoSchema);