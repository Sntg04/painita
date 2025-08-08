const express = require('express');
const router = express.Router();
const crmController = require('../controllers/crmController');

// Rutas CRM
router.get('/clientes', crmController.listarClientes); // Asegúrate que listarClientes exista
router.get('/morosos', crmController.listarMorosos);   // Asegúrate que listarMorosos exista

module.exports = router;