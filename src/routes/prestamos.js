const express = require('express');
const router = express.Router();
const prestamosController = require('../controllers/prestamosController');

// Ruta POST para solicitud de préstamo
router.post('/solicitar', prestamosController.solicitarPrestamo);

// Ruta GET para ver estado (asegúrate de que el método exista en el controlador)
router.get('/estado/:id', prestamosController.verEstado);

module.exports = router;