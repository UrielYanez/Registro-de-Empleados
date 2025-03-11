const mongoose = require('mongoose');

const ParentescoSchema = new mongoose.Schema({
    parentesco: String
});

module.exports = mongoose.model('Parentesco', ParentescoSchema);