const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/servicioController')

router.post('/', serviceController.createService);
router.get('/', serviceController.getServices);
router.get('/:id', serviceController.getServiceByID);
router.put('/:id', serviceController.updateServices);
router.delete('/:id', serviceController.deleteService);


module.exports = router;