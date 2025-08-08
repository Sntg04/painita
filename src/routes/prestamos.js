const express = require('express');
const router = express.Router();
const prestamosController = require('../controllers/prestamosController');

// Rutas de préstamos
router.post('/solicitar', prestamosController.solicitarPrestamo);
router.get('/estado/:id', prestamosController.verEstado);

module.exports = router;