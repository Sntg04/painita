const db = require('../models/database');

module.exports = {
  solicitarPrestamo: async (req, res) => {
    // Tu lógica existente
  },

  verEstado: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await db.query(
        'SELECT * FROM prestamos WHERE id = $1', 
        [id]
      );
      
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Préstamo no encontrado' });
      }
      
      res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: 'Error al consultar el préstamo' });
    }
  }
};