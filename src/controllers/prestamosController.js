const db = require('../models/database');

module.exports = {
  solicitarPrestamo: async (req, res) => {
    try {
      const { monto, plazo, cliente_id } = req.body;
      
      const result = await db.query(
        `INSERT INTO prestamos 
        (monto, plazo_dias, cliente_id) 
        VALUES ($1, $2, $3) 
        RETURNING id`,
        [monto, plazo, cliente_id]
      );
      
      res.json({ 
        success: true, 
        prestamo_id: result.rows[0].id 
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ 
        error: 'Error al procesar la solicitud' 
      });
    }
  }
};