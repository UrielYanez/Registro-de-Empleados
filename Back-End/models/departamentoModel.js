const mongoose = require('mongoose');

const DepartamentoSchema = new mongoose.Schema({
    nombre: String,
    estatus: String
});

module.exports = mongoose.model('Departamento', DepartamentoSchema);