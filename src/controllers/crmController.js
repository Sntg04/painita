const db = require('../models/database');

module.exports = {
  listarClientes: async (req, res) => {
    try {
      const result = await db.query('SELECT * FROM clientes');
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ error: 'Error al listar clientes' });
    }
  },

  listarMorosos: async (req, res) => {
    try {
      const result = await db.query(`
        SELECT * FROM prestamos 
        WHERE estado = 'moroso'
      `);
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ error: 'Error al listar morosos' });
    }
  }
};