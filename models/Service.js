const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    banco: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },
    fechaVto: {
        type: Date,
        require: true
    }
});

module.exports = mongoose.model('Servicio', ServiceSchema);