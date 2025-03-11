const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
    _id: { type: String, required: true }, // Identificador único del contador
    secuencia: { type: Number, default: 0 } // Valor actual del contador
});

module.exports = mongoose.model('Counter', counterSchema);