const mongoose = require('mongoose');

const ActividadSchema = new mongoose.Schema({
    nombre: String,
    importancia: String
});

module.exports = mongoose.model('Actividad', ActividadSchema);