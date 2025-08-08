const express = require('express');
const router = express.Router();
const prestamosController = require('../controllers/prestamosController');

router.post('/solicitar', prestamosController.solicitarPrestamo);
router.get('/estado/:id', prestamosController.verEstado);

// Asegúrate de exportar el router
module.exports = router;