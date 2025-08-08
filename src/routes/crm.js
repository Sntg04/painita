const express = require('express');
const router = express.Router();
const crmController = require('../controllers/crmController');

// Rutas CRM aquí
router.get('/clientes', crmController.listarClientes);

module.exports = router;