const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        lowercase: true
    },
    banco: {
        type: String,
        require: true,
        lowercase: true
    },
    descripcion: {
        type: String,
        require: true,
        lowercase: true
    },
    fechaVto: {
        type: Date,
        require: true,
        lowercase: true
    }
});

module.exports = mongoose.model('Servicio', ServiceSchema);