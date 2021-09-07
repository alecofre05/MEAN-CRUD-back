const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/servicioController')
const apiUrl = '/api/servicios';

router.post(apiUrl, serviceController.createService);
router.get(apiUrl, serviceController.getServices);
router.get(apiUrl+'/banco/:bank_name', serviceController.getServiceByBank);
router.get(apiUrl+'/:id', serviceController.getServiceByID);
router.put(apiUrl+'/:id', serviceController.updateServices);
router.delete(apiUrl+'/:id', serviceController.deleteService);


module.exports = router;