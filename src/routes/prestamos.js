const express = require('express');
const router = express.Router();
const db = require('../database');

// Ejemplo: Ruta para solicitud de préstamo
router.post('/solicitar', async (req, res) => {
  const { monto, plazo } = req.body;
  
  try {
    const result = await db.query(
      'INSERT INTO prestamos (monto, plazo) VALUES (?, ?)',
      [monto, plazo]
    );
    res.json({ success: true, id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Error en la solicitud' });
  }
});

module.exports = router;