const Service = require("../models/Service");

exports.createService = async (req, res) => {
    try {
        let service;
        service = new Service(req.body);
        await service.save();
        res.send(service);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Ocurrió un error")
    }
}

exports.getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);

    } catch (error) {
        console.log(error);
        res.status(500).send("Ocurrió un error")
    }
}

exports.updateServices = async (req, res) => {
    try {
        const {nombre, banco, descripcion, fechaVto} = req.body;
        let service = await Service.findById(req.params.id)
        if(!service) {
            res.status(404).json({msg: 'No existe el servicio'})
        }
        service.nombre = nombre;
        service.banco = banco;
        service.descripcion = descripcion;
        service.fechaVto = fechaVto;

        service = await Service.findOneAndUpdate({ _id: req.params.id}, service, {new: true});
        res.json(service);

    } catch (error) {
        console.log(error);
        res.status(500).send("Ocurrió un error")
    }
}

exports.getServiceByID = async (req, res) => {
    try {
        let service = await Service.findById(req.params.id)
        if(!service) {
            res.status(404).json({msg: 'No existe el servicio'})
        }
        
        res.json(service);

    } catch (error) {
        console.log(error);
        res.status(500).send("Ocurrió un error")
    }
}

exports.deleteService = async (req, res) => {
    try {
        let service = await Service.findById(req.params.id)
        if(!service) {
            res.status(404).json({msg: 'No existe el servicio'})
        }
        await Service.findByIdAndRemove({ _id: req.params.id})
        res.json({msg: 'Servicio eliminado correctamente'});

    } catch (error) {
        console.log(error);
        res.status(500).send("Ocurrió un error")
    }
}


